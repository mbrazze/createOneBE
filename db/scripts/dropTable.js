const { query } = require("../index");

/*----DROP CLIENTS TABLE----*/
async function dropClientsTable() {
  let res = await query(`DROP TABLE clients`);
  console.log(res);
}

dropClientsTable();
