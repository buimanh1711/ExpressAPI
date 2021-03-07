
class SignInController {

  index = (req, res, next) => {
    console.log(req.body)
    res.send('login')
  }
}

module.exports = new SignInController()