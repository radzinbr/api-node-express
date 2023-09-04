import db from '../database/db.js'

const getById = async(id) => {return await db.query("select name,email from users where id =?",[id])}
export default {getById}