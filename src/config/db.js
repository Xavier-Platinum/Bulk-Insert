import mongoose from "mongoose";

export const startServer = async(app) => {
    mongoose.connect("mongodb+srv://Vircom_v1:Vircom_2021@vircom-v1.xzwnx.mongodb.net/Vircom_v1?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async(conn) => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT} on ${app.settings.env} mode and db=>>${conn}`);
        })
    })
    .catch(async(err) => {
        console.log(`Error ==>> ${err}`);
    })
}