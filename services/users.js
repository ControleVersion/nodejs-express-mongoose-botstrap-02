var User = require('./../models/user');

exports.login = function(req, res) {
    res.render('login');
};
exports.register = function(req, res) {
    User.create(req.body, function(err, user) {
        if (err) {
            return;
        }
        res.redirect('/users/login');
    });
};