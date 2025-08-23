import mongoose from "mongoose";

const dogSchema = new mongoose.Schema(
    {

        Name: {
            type: String,
            required: true,
        },
        Breed: {
            type: String,
            unique: true,
        },
        profilePicure: {
            type: String,
            default: "",
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },


    },
    { timestamps: true }
);

const dog = mongoose.model("dog", dogSchema);

export default dog;