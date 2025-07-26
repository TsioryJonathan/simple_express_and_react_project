import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const jsonPath = path.join(__dirname, "../data/user.json");
const jsonData = await fs.readFile(jsonPath, "utf-8");
const data = JSON.parse(jsonData);

export const getAllUser = async (req, res) => {
  try {
    res.status(200).json(data.characters);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = data.characters.filter(
      (character) => character.id == userId
    )[0];

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createNewCharacter = async (req, res) => {
  try {
    const newCharacter = await req.body;
    data.characters.push({
      id: data.characters[data.characters.length - 1].id + 1,
      ...newCharacter,
    });
    res.status(201).json(data.characters);
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" + e });
  }
};

export const updateCharacter = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedCharacter = req.body;
    const index = data.characters.findIndex(
      (character) => character.id == userId
    );
    if (index === -1) {
      return res.status(404).json({ message: "User not found" });
    }
    data.characters[index] = { ...data.characters[index], ...updatedCharacter };
    res.status(200).json(data.characters);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCharacter = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCharacters = data.characters.filter(
      (character) => character.id != id
    );
    data.characters = updatedCharacters;
    res.status(200).json(data.characters);
  } catch (e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
