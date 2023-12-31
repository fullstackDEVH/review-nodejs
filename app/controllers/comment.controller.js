import reviewModel from "../models/review.model.js";
import commentModel from "../models/comment.model.js";
import ErrorHandler from "../utils/errorHandle.js";
import { catchAsync } from "../middlewares/catchAsyncError.js";

export const createComment = catchAsync(async (req, res, next) => {
  const reviewId = req.params.reviewId;
  const foundReview = await reviewModel.findById(reviewId);

  if (!foundReview) {
    return next(new ErrorHandler("Không tìm thấy bài riviu", 404));
  }

  const newComment = new commentModel(req.body);
  foundReview.comments.push(newComment);

  await Promise.all([newComment.save(), foundReview.save()]);
  await newComment.populate("author");

  res.status(200).json({
    message: "Tạo bình luận thành công",
    data: newComment,
  });
});

export const getCommentByReviewId = catchAsync(async (req, res, next) => {
  const foundReview = await reviewModel
    .findById(reviewId)
    .populate("comments.author");

  res.status(200).json({
    message: "Lấy thông tin bài review thành công",
    data: foundReview,
  });
});
