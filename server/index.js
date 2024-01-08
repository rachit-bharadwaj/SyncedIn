import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/connection/mongoose.js";
import authRoutes from "../server/routes/auth.js";
import cors from "cors";
import bodyBarser from "body-parser";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();


app.use(cors());
// app.use(bodyBarser.json({limit : "30mb", extended : true}));
// app.use(bodyBarser.urlencoded({limit : "30mb", extended : true}));
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

await connectDB().then(() => console.log("MongoDB connected"));
