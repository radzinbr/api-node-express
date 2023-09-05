import produtos from "../../models/Produtomodels.js"

const delproduct = async (req, res) => {
    try {
        const produtoData = req.body
        const [rows] = await produtos.Del(produtoData.id)
        if (rows.lenght === 0) {
            res.status(404).json({
                error: `usuario ${userData.id} não encontrado`
            })
        } else {
            await produtos.Del(produtoData.id)
            res.json({
                success: "usuario excluido com sucesso"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "erro no servidor" })
    }
}
export default delproduct;