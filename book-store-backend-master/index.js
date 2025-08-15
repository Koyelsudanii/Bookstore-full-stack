const dotenv = require("dotenv");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://book-store-frontend-a58v.vercel.app/"
    ],
    credentials: true
}));

const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

async function main() {
    await mongoose.connect(process.env.MONGODB_URI);
    app.use("/", (req, res) => {
        res.send("Book Store Server is running!");
    });
}

main()
    .then(() => console.log("Mongodb connected successfully!"))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
