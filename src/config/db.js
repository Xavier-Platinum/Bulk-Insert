import mongoose from "mongoose";

export const startServer = async(app) => {
    mongoose.connect(`${process.env.DB}`, {
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