import produtos from '../../models/Produtomodels.js'

const updateproduct = async (req, res) => {
    try{
        const produtoData = req.body
        const [result] = await produtos.Update(produtoData)
        if(result.affectedRows === 1 ){
            res.json({
                success:"Produtos atualizados ",
                user:{
                    ...produtoData
                    
                }
            })
        }
        
    }catch(error){
        console.log(error)
        res.status(500).json({error:"erro no servidor"})

    }
}
export default updateproduct;