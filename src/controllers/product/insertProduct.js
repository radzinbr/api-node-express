import Produtos from '../../models/Produtomodels.js'


const Updateproduct = async (req, res) => {
   try{
        const produtodata = req.body
        const [result] = await Produtos.create(produtodata.name_produto,produtodata.preco)
        if (result.affectedRows === 1) {
            res.json({
                success: "usuario inserido com sucesso",
                user: {
                    id: result.insertId,
                    ...produtodata
                }
            })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({error:"erro no servidor"})
    }
}
export default Updateproduct;