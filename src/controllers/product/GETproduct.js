import Produtos from '../../models/Produtomodels.js'

const getproduct = async (req, res) => {
    
    try{
        const ProdutoData = req.body
        const [rows] = await Produtos.ProductById(ProdutoData.id)
        if(rows.length === 0){
            res.status(404).json({
                error:`usuario id: ${ProdutoData,id} não encontrado!`
            })
        }else {
            res.json({
                success:"usuario encontrado com sucesso",
                user:rows[0]
            })
        }
    } catch(error){
        console.log(error)
        res.status(500).json({error:"erro no servidor"})
    }
}
 

export default getproduct;