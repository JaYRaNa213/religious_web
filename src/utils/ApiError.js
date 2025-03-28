import ApiError from '../utils/ApiError.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const getBookingById = asyncHandler(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    throw new ApiError(404, 'Booking not found');
  }

  res.status(200).json({
    success: true,
    data: booking,
    message: 'Booking retrieved successfully',
  });
});
