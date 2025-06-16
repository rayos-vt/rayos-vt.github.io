import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: '192.168.1.31', 
    user:'root', 
    password: 'WriteR_AdmiN1',
    database: '100gf_stocks',
    connectionLimit: 5
});
async function asyncFunction() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    console.log(rows); //[ {val: 1}, meta: ... ]
    const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
    console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }

  } catch (err) {
	throw err;
  } finally {
	if (conn) conn.end();
  }
}
asyncFunction().then(() => {
  pool.end();
});
