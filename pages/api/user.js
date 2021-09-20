import { getSession } from "next-auth/client";
import { MongoClient } from "mongodb";

const client = new MongoClient(
    process.env.MONGODB_URL || ""
);

export default async function handler(req, res) {
    const session = await getSession({ req });
    if (!session) {
        return res.status(404).send({
            message: "Not logged in",
        });
    }

    const email = session?.user?.email;
    await client.connect();
    let db = await client.db("auth");
    let doc = await db.collection("users").findOne({ email });
    return res.status(200).send(doc);
};