import user from '../../models/userModels.js'

const postUser = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await user.create(userData.name,userData.email,userData.pass)
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

    export default postUser;