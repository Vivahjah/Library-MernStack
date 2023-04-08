const express = require("express");
const router = express.Router();

const {
    getAllBooks,
    getSingleBook,
    createBook,
    updateBook,
    deleteBook,
} = require("../controllers/book");

router.route("/").get(getAllBooks).post(createBook);
router
    .route("/:id")
    .get(getSingleBook)
    .put(updateBook)
    .delete(deleteBook);

module.exports = router