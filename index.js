import { Client, Databases, TablesDB } from "node-appwrite";

// appwrite function

export default async ({ req, res, log }) => {
  const client = new Client();
  client.setEndpoint(Bun.env["APPWRITE_FUNCTION_API_ENDPOINT"]);
  client.setProject(Bun.env["APPWRITE_FUNCTION_PROJECT_ID"]);
  client.setKey(req.headers["x-appwrite-key"]);

  const databases = new Databases(client);
  const tables = new TablesDB(client);

  const listadoDocuments = await databases.listDocuments({
    databaseId: "root",
    collectionId: "time",
  });

  const listadoRows = await tables.listRows({
    databaseId: "root",
    collectionId: "time",
  });

  log({ listadoDocuments });
  log({ listadoRows });

  return res.json({ ok: true });
};
