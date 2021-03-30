exports.successHandler = async (res, data, msg) => {
    return res.status(200).send({
        status:'success',
        data:data,
        msg: msg
    })
}
