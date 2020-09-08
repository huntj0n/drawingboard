const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body

        let user = await db.user.check_user(email);
        user = user[0]

        // if(user[0]){
        //     const compareHash = user.password
        //     const authenticated = bcrypt.compareSync(password, compareHash)
        //     if(authenticated){
        //         delete user.password
        //         req.session.user = user
        //         res.status(200).send(user)
        //     } else {
        //         res.status(401).send(`email or password inccorect`)
        //     }
        // } else {
        //     res.status(401).send('email or password incorrect')
        // }
            
        if(!user){
            return res.status(400).send(`user object undefined`)
        } else {
            const authenticated = bcrypt.compareSync(password, user.password);
            if(!authenticated){
                return res.status(401).send('not authenticated')
            }
            delete user.password;
            // req.session.user = user[0];
            req.session.user = user 
            console.log(req.session.user)
            res.status(202).send(req.session.user);
        }

    },
    register: async (req, res) => {
        const db = req.app.get('db');
        const {email, password} = req.body;

       let foundUser = await db.user.check_user([email])

        if(foundUser[0]){
            res.status(400).send("user already exists")
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt)

            const registerUser = await db.user.register(email, hash)
            req.session.user = registerUser[0]
            res.status(200).send(registerUser[0])
        }

    },
    logout: async (req, res) => {
        req.session.destroy();
        res.sentStatus(200);
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    }
}