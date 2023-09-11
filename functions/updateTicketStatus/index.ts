import { Handler } from "@netlify/functions";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "PUT") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    await client.connect();

    const db = client.db("tmsDatabase");
    const collection = db.collection("supportTickets");

    const id = event.queryStringParameters?.id;

    if (!id || !ObjectId.isValid(id)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid ticket ID" }),
      };
    }

    const { status } = JSON.parse(event.body!);

    if (!status) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing required fields [status: string]",
        }),
      };
    }

    const isValidStatus = status === "in progress" || status === "resolved";
    if (!isValidStatus) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Invalid status. Valid values are: in progress, resolved",
        }),
      };
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { status } }
    );

    if (result.matchedCount === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Ticket not found" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Ticket updated successfully" }),
    };
  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: e }),
    };
  } finally {
    await client.close();
  }
};
