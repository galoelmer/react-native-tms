import { Handler } from "@netlify/functions";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";

const client = new MongoClient(uri);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const body = JSON.parse(event.body!);

  if (!body.name || !body.email || !body.imageUrl || !body.description) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  try {
    await client.connect();

    const db = client.db("tmsDatabase");
    const collection = db.collection("supportTickets");

    const doc = {
      ...body,
      status: "new",
      createdAt: new Date(),
    };
    const result = await collection.insertOne(doc);

    console.log(`A document was inserted with the _id: ${result.insertedId}`);

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "Entry created successfully" }),
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
