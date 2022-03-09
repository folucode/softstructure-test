
module.exports = {
    signup: (req, res) => {
        try {
            const {name, email, password} = req.body;
            const {status, message, data} = authSerivce.signup(name, email, password);
        } catch (error) {
            
        }
    }
}