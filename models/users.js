import bcrypt from 'bcryp'

module.exports = (sequelize, DataType) => {
    const Users = sequelize.define('Users', {
        id: {

            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {

            type: DataType.STRING,
            allowNull: true
        },
        password: {

            type: DataType.STRING,
            allowNull: true
        },
        email: {

            type: DataType.STRING,
            unique: true,
            allowNull: true
            //validate: {
            //    notEmpty: true
            //}
        },
        token: {

            type: DataType.STRING,
            allowNull: true
        }

    }, {
        hooks: {
            beforeCreate: user => {

                const comp = bcrypt.genSaltSync();
                user.password = bcrycp.hashSync(user.password, comp);
            }
        },
        classMethods: {
            isPassword ; (encodedPassword, password) => {

                return bcrypt.compareSync(password, encodedPassword);
            }
        }
    });

    return Users;
};