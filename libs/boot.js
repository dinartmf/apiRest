module.exports = app => {
    app.database.sequelize.sync().done(() => {

        app.listen(app.get('port'), () => {

            console.log('API REST - porta ' + app.get("port"));
        });
    });
}
