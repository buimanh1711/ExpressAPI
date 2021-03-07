const blogRouter = require('./blog')
const siteRouter = require('./site')
const signInRouter = require('./sign-in')


const route = (app) => {
    app.use('/api/site', siteRouter)
    app.use('/api/blogs', blogRouter)
    app.use('/api/sign-in', signInRouter)
}

module.exports = route