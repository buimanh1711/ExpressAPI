const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Blog = new Schema({
  title: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  content: { type: String },
  image: { type: String },
  createDate: { type: Date, default: Date.now },
  slug: { type: String, maxLength: 255 }
})

module.exports = mongoose.model('blog', Blog)