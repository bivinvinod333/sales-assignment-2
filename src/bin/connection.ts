import mongoose from "mongoose";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const config = () => {
    const uri = "mongodb://localhost:27017/salesAssignmentDB";
    // @ts-ignore
    mongoose.connect(uri, options);
    mongoose.connection.on("error", (error) => {
        console.log(error);
        process.exit(1);
    });

    mongoose.connection.once("open", () => {
        console.log("Running database!");
    });
};
export default config;
