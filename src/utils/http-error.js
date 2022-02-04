class HTTPError extends Error {
  constructor(message, errorCode, details=[]){
    super(message);
    this.code = errorCode;
    this.details = details 
  }
};

export default HTTPError;