import HTTPError from "../utils/http-error.js";
import StatusCodes from "http-status-codes";
//import logger from "../utils/logger.js";

export const catchAsyncErrors = (action) => (req, res, next) =>
  action(req, res, next).catch((error) => {
    let err = new HTTPError(
      "Internal Server Error",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    next(err);
  });

export const validationCatches = (validation) => async (req, res, next) => {
  try {
    validation(req, res, next);
  } catch (error) {
    //logger.info(error);
    let err = new HTTPError(
      "Validations failed",
      StatusCodes.BAD_REQUEST,
      error.errors
    );
    next(err);
  }
};
