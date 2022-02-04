import * as dotenv from "dotenv";


dotenv.config({ path: ".env" });

export const GET_IMAGE_PATH = process.env.NODE_ENV === "production"? "https://gift-commerence.herokuapp.com/uploads/images/":"http://localhost:8000/uploads/images";
