import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { parentServices } from "./parent.service";

const createParent = catchAsync(async (req, res) => {
  const result = await parentServices.createParent(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Parents info created successfully!",
    data: result,
  });
});

const getAllParents = catchAsync(async (req, res) => {
  const result = await parentServices.getAllParents();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Parents info retrieved successfully!",
    data: result,
  });
});

const updateParent = catchAsync(async (req, res) => {
  const { parentId } = req.params;
  const result = await parentServices.updateParent(parentId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Parent info updated successfully!",
    data: result,
  });
});

const deleteParent = catchAsync(async (req, res) => {
  const { parentId } = req.params;
  const result = await parentServices.deleteParent(parentId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Parent info deleted successfully!",
    data: result,
  });
});

export const parentControllers = {
  createParent,
  getAllParents,
  updateParent,
  deleteParent,
};
