const Answer = require("../models/answer");

const checkAnswerExistence = async (req, res, next) => {
    const id = req.params.id;
    try {
        const answer = await Answer.findById(id);
        if (!answer) {
        return res.status(404).json({ message: "Answer not found" });
        }
        req.answer = answer;
        next();
    } catch (err) {
        console.error("Error checking answer existence:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = checkAnswerExistence;
