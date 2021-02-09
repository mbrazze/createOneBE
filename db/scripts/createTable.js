const { query } = require("../index");

/*----CREATE CLIENTS TABLE----*/

async function createClients() {
  let res = await query(
    `CREATE TABLE clients(
            id SERIAL PRIMARY KEY,
            firstName TEXT,
            surname TEXT,
            guardianName TEXT,
            guardianContact TEXT,
            email TEXT, 
            mobile TEXT,
            dateOfBirth DATE,
            waiverSigned TEXT,
            allergies TEXT,
            medicalIssues TEXT
        )`
  );
  console.log(res);
}

createClients();
