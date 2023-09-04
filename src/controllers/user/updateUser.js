import user from "../../models/userModels.js";

const Toupdate = async (req, res) => {
    try {
        const userData = req.body
        const [result] = await user.update(userData)
        if (result.affectedRows === 1) {
            res.json({
                success: "usuario atualizado  com sucesso",
                user: {
                    ...userData
                }
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "erro no servidor" })
    }
}
    export default Toupdate;