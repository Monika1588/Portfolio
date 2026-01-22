// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");

// // Allow frontend to access backend
// app.use(cors({
//   origin: "https://portfolio-1-nfdx.onrender.com",
//   credentials: true
// }));

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/projects", require("./routes/projectRoutes"));
// app.use("/api/feedback", require("./routes/feedbackRoutes"));
// app.use("/api/contact", require("./routes/contactRoutes"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`Backend server running on port ${PORT}`)
// );





const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: "https://magenta-lollipop-6c2481.netlify.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.json());

app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Backend server running on port ${PORT}`)
);
