const Discussion = require("../models/discussion");

const checkDiscussionExistence = async (req, res, next) => {
    const id = req.params.id;
    try {
        const discussion = await Discussion.findById(id);
        if (!discussion) {
        return res.status(404).json({ message: "Discussion not found" });
        }
        req.discussion = discussion; // Menyimpan data discussion ke dalam objek request untuk digunakan di endpoint berikutnya
        next();
    } catch (err) {
        console.error("Error checking discussion existence:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = checkDiscussionExistence;
