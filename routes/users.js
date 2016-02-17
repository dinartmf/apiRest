module.exports = app => {

    const Users = app.database.models.Users;

    app.route('/user')

        .all(app.auth.authenticate())

        .post('/users', (req, res) => {

            Users.create(req.body)
                .then(result => res.json(result))
                .catch(error => {res.status(412).json({msg: error.message});
            });
        });

    .get((req, res) => {

            Users.findById(req.user.id, {
                attributes: ['id', ]'name'], ['email']
            })
                .then(result => {

                    if (result) {

                        res.json(result);
                    } else {

                        res.sendStatus(404);
                    }
                })
                .catch(error => {

                    res.status(412).json({msg: error.message});
                });
        });
}