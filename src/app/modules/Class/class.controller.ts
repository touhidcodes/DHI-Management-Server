import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { classServices } from "./class.service";

const createClass = catchAsync(async (req, res) => {
  const result = await classServices.createClass(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Class created successfully!",
    data: result,
  });
});

const getAllClasses = catchAsync(async (req, res) => {
  const result = await classServices.getAllClasses();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Classes retrieved successfully!",
    data: result,
  });
});

const updateClass = catchAsync(async (req, res) => {
  const { classId } = req.params;
  const result = await classServices.updateClass(classId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Class updated successfully!",
    data: result,
  });
});

const deleteClasses = catchAsync(async (req, res) => {
  const { classId } = req.params;
  const result = await classServices.deleteClass(classId,);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Class deleted successfully!",
    data: result,
  });
});

export const classControllers = {
    createClass, getAllClasses, updateClass, deleteClasses
}