class UserController {
  register(req, res, next) {
    res.json('/register success');
  }
}

module.exports = new UserController();
