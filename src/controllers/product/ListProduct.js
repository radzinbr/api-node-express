import Produtos from '../../models/Produtomodels.js'
//list produtos 

const ListallP = async (req, res) => {
    try {
        const produtoData = req.body
        const [rows] = await Produtos.ListallP(produtoData)
        res.json({
            success: "usuarios encontrados com sucesso ",
            user: rows
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "erro no servidor" })
    }
}

export default ListallP; 