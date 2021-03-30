const config = require("../config");
const {successHandler} = require("./response/successHandler");
const {errorHandler} = require("./response/errorHandler");
const sql = require('mssql');

exports.registerAccount = async (req, res, next) => {
    let pool = await sql.connect(config.sql);

    // successHandler(res, pool, 'Success!')

    try {




        successHandler(res, d, 'Success!')
        // errorHandler('error', res, 'Error!')
        // const data = req.body;
        // const insert = await eventData.registerAccount(data);
        // success('','msg',res)
        // res.send(insert);
    } catch (error) {
        await errorHandler(error, res, 'Error!')
        // res.status(400).send(error.message);
    }
}
