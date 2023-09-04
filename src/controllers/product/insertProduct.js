import Produtos from '../../models/Produtomodels.js'


const Updateproduct = (req, res) => {
   try{
        const produtodata = req.body
        const [result] = Produtos.create(produtodata)
        if (result.affectedRows === 1) {
            res.json({
                success: "usuario inserido com sucesso",
                user: {
                    id: result.insertId,
                    ...userData
                }
            })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({error:"erro no servidor"})
    }
}
export default Updateproduct;