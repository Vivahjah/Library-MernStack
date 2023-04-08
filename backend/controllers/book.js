const Book = require("../models/book");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

const createBook = async (req, res) => {
    res.status(StatusCodes.CREATED).json({msg: 'Book created'})

};
const updateBook = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'Book updated'})
};

const deleteBook = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'Book deleted'})
};

const getSingleBook = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'Single book'})
};
const getAllBooks = async (req, res) => {
    res.status(StatusCodes.OK).json({msg: 'All books'})
};

module.exports = {
    getAllBooks,
    getSingleBook,
    createBook,
    updateBook,
    deleteBook,
} ;