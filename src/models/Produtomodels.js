import db from '../database/db.js';

const ProductById = async (id) => {
    return await db.query("SELECT name_produto, preco FROM Produtos WHERE id = ?", [id]);
}

const create = async (name_produto, preco) => {
    return await db.query(
        "INSERT INTO Produtos (name_produto, preco) VALUES (?, ?)", [name_produto, preco]
    );
}

export default { ProductById, create };
