module.exports = {
    database: 'apiRest',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage: 'apiRest.sqlite',
        define: {
            underscored: true
        }
    },
    jwtSecret: "PrOjEcT1tEsT#",
    jwtSession: {session: false}
};