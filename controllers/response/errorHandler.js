exports.errorHandler = async (err, res, msg) => {
    return res.status(400).send({
        status:'error',
        data:err,
        msg: msg
    })
}
