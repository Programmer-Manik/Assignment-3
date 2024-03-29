import catchAsync from "../../utils/catchAsync";
import { ReviewServices } from "./review.service";

const createReview = catchAsync(async (req, res) => {
  const result = await ReviewServices.createReviewIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: "Review created successfully",
    data: result,
  });
});

export const ReviewControllers = {
  createReview,
};
