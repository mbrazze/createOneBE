const { query } = require("../db/index");

/*-----CLIENTS TABLE-----*/
/*-----POST: CREATE A CLIENT----*/
async function createClient(value) {
  console.log(value);
  const res = query(
    `
        INSERT INTO clients (firstName, surname, guardianName, guardianContact, email, mobile, dateOfBirth, waiverSigned, allergies, medicalIssues)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [
      value.firstName,
      value.surname,
      value.guardianName,
      value.guardianContact,
      value.email,
      value.mobile,
      value.dateOfBirth,
      value.waiverSigned,
      value.allergies,
      value.medicalIssues,
    ]
  );
  return res;
}

/*-----GET: Get all clients-----*/
async function getAllClients() {
  const res = await query(`SELECT * FROM clients`);
  console.log(res);
  return res.rows;
}

/*-----DELETE: client-----*/
async function deleteClient(id) {
  const res = await query(`
      DELETE FROM clients WHERE id=${id};
      `);
  console.log(res);
}

module.exports = {
  createClient,
  getAllClients,
  deleteClient,
};
