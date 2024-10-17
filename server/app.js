// app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const adminRouter = require("./routes/adminRoutes");
const tourPackageRouter = require("./routes/tourPackageRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const reviewRouter = require("./routes/reviewRouters");
const config = require("./utils/config");

const app = express();

// Configure CORS
const corsOptions = {
    origin: 'https://thewildexplorers.netlify.app', // Specify your client app's origin
    credentials: true, // Allow credentials to be included
};

app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/tours", tourPackageRouter);

module.exports = app;
