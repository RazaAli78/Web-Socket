import multer, { diskStorage } from "multer";
import path,{dirname} from "path";

//path where images gonna save
var uploadDirectory = "/uploads/images";
const __dirname = path.resolve();
var storage = diskStorage({
  destination: (req, file, cb) => {
    cb(null,path.join( __dirname ,'./uploads/images'));
  },  
    filename: (req, file, cb) => {
    var originalname = file.originalname;
    console.log({originalname})
    var extension = originalname.split(".");
    let filename =
      file.fieldname + "-" + Date.now() + "." + extension[extension.length - 1];
    cb(null, filename);
  },
});
 
var upload = multer({
  storage: storage,
});
export default upload;