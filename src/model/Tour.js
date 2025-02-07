import mongoose from "mongoose"

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A tour must have a name"]
    },
    price: {
        type: Number,
        default: 0
    },
    difficulty: {
        type: String,
        required: [true, "A tour must have a difficulty!"],
        enum: {
            values: ["easy", "medium", "difficult"],
            message: "Difficulty is either: easy, medium and difficult"
        }
    }
});

export default mongoose.models.Tour || mongoose.model('Tour', tourSchema)