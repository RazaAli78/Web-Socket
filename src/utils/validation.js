import * as yup from 'yup';

export const otpCreate = (req, res, next) =>{
  let schema = yup.object({
    phoneNumber:yup.string().required("phoneNumber is required")
  });
  schema.validateSync(req.body, {abortEarly: false});
  next();
};
export const validPagination = (req, res, next) =>{
  let schema = yup.object({
    skip:yup.number().min(1,'minimum 1 pagination is required').required("pagination is required")
  });
  schema.validateSync(req.params, {abortEarly: false});
  next();
};

export const validSections = (req, res, next) => {
  let schema = yup.object({
    sections: yup.array().min(1, "minimum 1 section is required").required("sections are required"),
    
  }); 
    schema.validateSync(req.body, {abortEarly: false});
    next();
   
}

export const validateCategory = (req, res, next) =>{
    let schema = yup.object({
      title:yup.string().required("title is required")
    });
    schema.validateSync(req.body, {abortEarly: false});
    next();
};
export const validateProduct = (req, res, next) =>{
  let schema = yup.object({
    title: yup.string().required("title is required"),
    categoryId: yup.string().required("categoryId is required"),
    shopId : yup.string().required("shopId is required")
  });
  schema.validateSync(req.body, {abortEarly: false});
  next();
}
export const validateOtp = (req, res, next) => {
  let schema = yup.object({
    hash:yup.string().required("hash is required"),
    phoneNumber:yup.string().required("phoneNumber is required"),
    otp:yup.string().required("opt is required")
  });
  schema.validateSync(req.body, {abortEarly: false});
  next();
} 

export const customerSignup = (req, res, next) =>{
  let schema = yup.object({
    userName: yup.string().required("username is required"),
    password: yup.string().required("password is required"),
    phoneNumber: yup.string().required("phoneNumber is Required"),
    deviceToken: yup.string().required("deviceToken is Required"),
    hash:yup.string().required("hash is required"),
    otp:yup.string().required("otp is required")
     });
  
    schema.validateSync(req.body, {abortEarly: false});
    next();
   
};

export const offlineSignup = (req, res, next) =>{
  let schema = yup.object({
    userName: yup.string().required("username is required"),
    phoneNumber: yup.string().required("phoneNumber is Required"),
  });
  
    schema.validateSync(req.body, {abortEarly: false});
    next();
   
};

export const friendRequest = (req, res, next) =>{
  let schema = yup.object({
    friendType: yup.string().required("friendType is required"),
    user2: yup.string().required("user2 is required")
  }); 
    schema.validateSync(req.body, {abortEarly: false});
    next();
   
};
//contacts
export const appUsers = (req, res, next) =>{
  let schema = yup.object({
    contacts: yup.array().min(1, "minimum 1 contact is required").required("contacts are required"),
    
  }); 
    schema.validateSync(req.body, {abortEarly: false});
    next();
   
};

export const validResetPassword = (req, res, next) => {
  let schema = yup.object({
    hash:yup.string().required("hash is required"),
    phoneNumber:yup.string().required("phoneNumber is required"),
    otp:yup.string().required("opt is required"),
    password: yup.string().required("password is required"),
  });
  schema.validateSync(req.body, {abortEarly: false});
  next();
} 
export const validateShop = (req, res, next) =>{
  let schema = yup.object({
    name:yup.string().required("name is required")
  });
  schema.validateSync(req.body, {abortEarly: false});
  next();
};

export const validatePayment = (req, res, next) =>{
  let schema = yup.object({
    message_id:yup.string().required("Message ID is required"),
    receiver:yup.string().required("Receiver User is required"),
    card:yup.object().required("Card Details is required"),
    customer:yup.object().required("Card Details is required"),
  });
  schema.validateSync(req.body, {abortEarly: false});
  next();
};

