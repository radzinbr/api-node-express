import db from '../database/db.js';

const ProductById = async (id) => {
    return await db.query("SELECT name_produto, preco FROM Produtos WHERE id = ?", [id]);
}

const create = async (prod) => {
    const {name_produto,preco} = prod
    return await db.query(
        "INSERT INTO Produtos (name_produto, preco) VALUES (?, ?)", [name_produto, preco]
    );
}

const Del = async (id)=>{
    return await db.query("DELETE FROM produtos WHERE id = ?",[id])
}

const ListallP = async () => {
    return await db.query("SELECT * from produtos ")
}

export default { ProductById, create, ListallP,Del};
