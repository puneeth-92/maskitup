import dotenv from "dotenv";
dotenv.config();
import { aimasker } from "./services/aimasker.js";

const result = await aimasker(`
    My name is Puneeth Jagadeesha.
    
    I study at BMS College of Engineering.
    
    I live in Bangalore.
    
    My email is [EMAIL].
    
    My phone number is [PHONE].
    `);
    
    console.log(result);
