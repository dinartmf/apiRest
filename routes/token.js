module.exports = app => {

    const Users = app.database.models.Users;

    app.post('/token', (req, res) => {

        if (req.body.email && req.body.password) {

            const email = req.body.email;
            const password = req.body.password;

            Users.findOne({where: {email: email}})
                .then(user => {

                    if (User.isPassword(user.password, password)) {

                        // alterar modelo para persistir a data de expiração do token
                        // se não houver data de expiração é o primeiro acesso e deve-se requisitar o token
                        // se houver data de expiração deve-se validar se expirou
                        // se expirou requisitar um novo token e atualizar o novo token na base

                        // retornar o token ou erro de autenticação (caso o token seja negado)
                    }
                })
                .catch(error => {

                    // se não encontrou o usuário na base de dados:
                    // 1 - pode ser o 1 acesso e deve-se tentar requisitar o token
                    // 2 - se obtiver, retornar o token
                    // 3 - se não obtiver, retornar erro de autenticação
                })
        }
    })
}