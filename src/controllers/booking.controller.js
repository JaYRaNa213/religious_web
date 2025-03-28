// Create Booking
export const createBooking = async (req, res) => {
  try {
    const { serviceName, date, userId } = req.body;
    if (!serviceName || !date || !userId) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newBooking = {
      id: Date.now(),
      serviceName,
      date,
      userId,
    };

    // Simulate DB push (Replace this with actual DB logic)
    bookings.push(newBooking);

    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
