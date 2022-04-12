import { Data } from "../models/Data.model";

export const insertData = async(req, res) => {
    let bulkData = [];
    bulkData.push(req.body)
    if (!req.body && bulkData.length === 0 || null) {
        return res.json({
            status: 0,
            msg: "request not valid"
        })
    }  else {
        bulkData.forEach(async data => {
            console.log(data)
            await Data.bulkWrite(data)
            .then(result => {
                res.json({
                    status: 1,
                    message: "Bulk upload successful",
                    body: JSON.stringify(result, null, result.length)
                })
            })
            .catch((err) => {
                return res.json({
                    status: 0,
                    body: JSON.stringify(err, null, )
                })
            })
        })

    }
}