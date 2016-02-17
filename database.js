import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize';

let database = null;

module.exports = app => {

    if (!database) {

        const config_db = app.libs.config;

        const sequelize = new Sequelize(
            config_db.database,
            config_db .username,
            config_db.password,
            config_db.params);

        database = {
            sequelize,
            Sequelize,
            models: {}
        };

        const dir = path.join(__dirname, 'models');

        fs.readdirSync(dir).forEach(file => {

            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);

            database.models[model.name] = model;
        });
    }

    return database;
};