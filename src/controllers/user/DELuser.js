import user from "../../models/userModels.js";

const delUser = async (req, res) => {
    try {
        const userData = req.body
        const [rows] = await user.getById(userData.id)
        if (rows.length === 0) {
            res.status(404).json({
                error: `usuario id: ${userdata, id} não encontrado!`
            })
        } else {
            await user.Del(userData.id);

            res.json({
                success: "Usuário excluído com sucesso"
            })
        }
    }catch(error){
        console.log(error)
        res.status(500).json({error:"erro no servidor"})
    }
}

        export default delUser;



