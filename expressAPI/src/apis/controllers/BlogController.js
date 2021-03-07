const BlogModel = require('../models/blog')

class BlogController {
    index = (req, res) => {
        BlogModel.find({})
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => res.send(err))
    }

    create = (req, res) => {
        let data = req.body
        let newBlog = new BlogModel(data)
        console.log(data)
        newBlog.save((err) => {
            console.log('err: ', err)
        })
        res.json(req.body)
    }
}

const blogController = new BlogController()

module.exports = blogController