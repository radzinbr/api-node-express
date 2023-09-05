import Produtos from '../../models/Produtomodels.js'

//insert product 

const Updateproduct = async (req, res) => {
   try{
        const produtoData = req.body
        const [result] = await Produtos.create(produtoData)
        if (result.affectedRows === 1) {
            res.json({
                success: "usuario inserido com sucesso",
                user: {
                    id: result.insertId,
                    ...produtoData
                }
            })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({error:"erro no servidor"})
    }
}
export default Updateproduct;