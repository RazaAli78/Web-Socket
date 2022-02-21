import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });

 const GET_IMAGE_PATH = process.env.NODE_ENV === "production"? "https://recreave-mvp-backend.herokuapp.com/uploads/images/":`http://localhost:${process.env.PORT}/uploads/images`;
 export default GET_IMAGE_PATH;
