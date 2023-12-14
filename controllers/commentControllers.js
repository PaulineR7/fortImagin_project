const { Comment } =require('../db/sequelizeSetup')

const findAllComment = (req, res) => {
    Comment.findAll()
        .then(results => {
            res.json(results)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
}
const createComment = (req,res) => {
    Comment.create(req.body)
        .then(comment => {
            res.json({message :"Le commentaire a bien été créé", data: comment})
        })
}

module.exports= {createComment, findAllComment}
