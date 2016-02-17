import passport from 'passport';
import {Strategy} from 'passport-jwt';

module.exports = app => {

    const Users = app.database.model.Users;
    const cfg = app.libs.config;
    const strategy = new Strategy({secretOrKey: cfg.jwtSecret},
        (payload, done) => {

            Users.findById(payload.id)
                .then(user => {

                    if (user) {
                        return done(null, {id: user.id,email: user.email});
                    }

                    return done(null, false);
                })
                .catch(error, done(error, null));
        });

    passpost.use(strategy);

    return {
        inicialize: () => {
            return passport.authenticate('jwt', cfg.jwtSession);
        }
    };
};