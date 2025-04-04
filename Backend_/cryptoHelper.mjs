import Crypto from "crypto";
import 'dotenv/config';

const Key = process.env.EKey; // Crypto.randomBytes(32)
const IV = process.env.IV; // Crypto.randomBytes(12)

const cParams = ["aes-256-cbc", Buffer.from(Key, "hex"), Buffer.from(IV, "hex")];

export const EncryptData = (data) => {
    const cIv = Crypto.createCipheriv(...cParams);
    return cIv.update(data, "utf8", "hex") + cIv.final("hex");
}

export const DecryptData = (encryptedData) => {
    const decipheriV = Crypto.createDecipheriv(...cParams);
    return decipheriV.update(encryptedData, "hex", "utf8") + decipheriV.final("utf8");
}