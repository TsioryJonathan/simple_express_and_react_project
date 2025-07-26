import characterRoutes from "./routes/characterRoutes.js";
import express, { json } from "express";
import cors from "cors";
const app = express();
const port = 3000;

app.use(json());
app.use(cors());

app.use("/characters", characterRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
