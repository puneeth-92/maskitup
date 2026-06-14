import express from "express";
import cors from "cors";
import { regexMasker } from "./services/regexmasker.js";
import dotenv from "dotenv";
import { aimasker } from "./services/aimasker.js";

const app=express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Maskitup is running.");
});

app.post("/mask", async (req, res) => {
    const {text}=req.body;
    const regex_result=regexMasker(text);
    const ai_result=await aimasker(regex_result.maskedText);
    const personCount =(ai_result.match(/\[PERSON\]/g) || []).length;
    const orgCount =(ai_result.match(/\[ORGANIZATION\]/g) || []).length;
    const locationCount =(ai_result.match(/\[LOCATION\]/g) || []).length;
    res.json({
        maskedText:ai_result,
        stats:{ 
            ...regex_result.stats,
            persons: personCount,
            organizations: orgCount,
            locations: locationCount,
        }
    });
});

app.listen(6969,()=>{
    console.log("server is running");
})