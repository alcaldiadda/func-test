import { Client, Databases } from "node-appwrite";

export default async ({ req, res, log }) => {
  const client = new Client();
  client.setEndpoint(process.env.APPWRITE_FUNCTION_API_ENDPOINT);
  client.setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID);
  client.setKey(req.headers["x-appwrite-key"]);

  const databases = new Databases(client);

  const listado = await databases.listDocuments({
    databaseId: "root",
    collectionId: "time",
  });

  log({ listado });

  return res.json({ ok: true });
};
