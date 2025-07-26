import express from "express";
import {
  createNewCharacter,
  deleteCharacter,
  getAllUser,
  getUserById,
  updateCharacter,
} from "../controllers/characterController.js";

const router = express.Router();

router.get("/", getAllUser);
router.post("/", createNewCharacter);
router.get("/:id", getUserById);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);

export default router;
