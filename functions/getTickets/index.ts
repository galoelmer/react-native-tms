import { Handler } from "@netlify/functions";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";

const client = new MongoClient(uri);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    await client.connect();

    const db = client.db("tmsDatabase");
    const collection = db.collection("supportTickets");
    const result = await collection.find({}).toArray();

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (e) {
    // console.log(e);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: e }),
    };
  } finally {
    await client.close();
  }
};
