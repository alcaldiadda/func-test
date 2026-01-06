import { Client, Databases, TablesDB } from "node-appwrite";

// appwrite function

export default async ({ req, res, log }) => {
  const client = new Client();
  client.setEndpoint(Bun.env["APPWRITE_FUNCTION_API_ENDPOINT"]);
  client.setProject(Bun.env["APPWRITE_FUNCTION_PROJECT_ID"]);
  client.setKey(req.headers["x-appwrite-key"]);

  const tables = new TablesDB(client);

  const tx = await tablesDB.createTransaction();

  const deleteAllRows = await tables.deleteRows({
    databaseId: 'root',
    tableId: 'time',
    transactionId: tx.$id,
  });

  await tablesDB.updateTransaction({
      transactionId: tx.$id,
      commit: true,
    });


  return res.json({ ok: true });
};
