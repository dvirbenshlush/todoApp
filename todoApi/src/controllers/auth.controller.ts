import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUser, User } from "../models/user.model";
import { ErrorRequestHandler, Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const JWT_SECRET = process.env.JWT_SECRET || '';
const authService = new AuthService();

export const register = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body.user;
  
      const userExist = await authService.login(username);
      if (userExist) return res.status(400).json({ msg: "User already exists" });
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const user = new User({ username, password: hashedPassword });
      await authService.register(user);
  
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
  
      res.json({ token, user: { id: user.id, username: user.username } });
    } catch (err: any) {
      res.status(500).json({ msg: "Server error: " + err.message });
    }
};
  

export const login = async (req: Request, res: Response) => {
    try {
      const { password } = req.body.user;
  
      const user = await authService.login(req.body.user.username);
      if (!user) return res.status(400).json({ msg: "Invalid credentials" });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
  
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
  
      res.json({ token, user: { id: user.id, username: user.username } });
    } catch (err) {
      res.status(500).json({ msg: "Server error" });
    }
  };
  
