import db from '../database/db.js'

const getById = async (id) => {
    return await db.query("SELECT name,email FROM users WHERE id =?", [id]
    )
}
const create = async (name, email, pass) => {
    return await db.query(
        "INSERT INTO users (name,email,pass) VALUES (?,?,?) ", [name, email, pass]
    )
}

const Update = async (user) => {
    const { id, name, email, pass } = user
    return await db.query(
        "UPDATE users SET name=?, email=?,pass= ? WHERE id = ?", [name, email, pass, id]
    )
}

const Del = async (id) => {
    return await db.query("DELETE FROM users WHERE id =? ", [id])
}

const Listall = async (id) => {
        // Pega todo os dados de um ID e exibe para o pesquisador
         return await db.query('SELECT * FROM users ', [id]);
  
      } 
export default { getById, create, Del, Update,Listall}

