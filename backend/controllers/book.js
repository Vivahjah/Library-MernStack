const Book = require("../models/book");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");

const createBook = async (req, res) => {
  const { name, author, description, price, available, image } = req.body;

  if (
    name === "" ||
    author === "" ||
    description === "" ||
    price === "" ||
    available === "" ||
    image === ""
  ) {
    throw new BadRequestError("please fill in all fields");
  }
  const book = await Book.create({
    name,
    author,
    description,
    price,
    available,
    image,
  });
  res.status(StatusCodes.CREATED).json({ book });
};

const updateBook = async (req, res) => {
  const {
    body: { name, author, description, price, available, image },
    params: { id: bookId },
  } = req;
  if (
    name === "" ||
    author === "" ||
    description === "" ||
    price === "" ||
    available === "" ||
    image === ""
  ) {
    throw new BadRequestError(
      " name or author or description or price or available or image cannot be empty"
    );
  }
  const book = await Book.findByIdAndUpdate({ _id: bookId }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!book) {
    throw new NotFoundError(`No workout with id ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};
const deleteBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findByIdAndDelete({ _id: bookId });
  if (!book) {
    throw new NotFoundError(`No book with id ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};

const getSingleBook = async (req, res) => {
  const { id: bookId } = req.params;
  const book = await Book.findOne({ _id: bookId });
  if (!book) {
    throw new NotFoundError(`No book with id ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};
const getAllBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json({ books, count: books.length });
};

module.exports = {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
};
