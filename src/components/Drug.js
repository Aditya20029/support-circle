import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import DateSelection from './DateSelection';
import TimeSlotSelection from './TimeSlotSelection';

function Drug() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const history = useHistory(); // Initialize useHistory

  const resetSelections = () => {
    setSelectedDate(null);
    setSelectedTimeSlot(null);
  };

  const handleBook = () => {
    // Perform the booking action here (e.g., API request to book the appointment).

    // After booking is confirmed, navigate to the next page.
    history.push('/Confirmation'); // Replace '/nextpage' with the actual path to the next page.
  };

  return (
    <div className="booking-page">
      <h1>Book Your Appointment</h1>

      <DateSelection
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        resetSelections={resetSelections}
      />

      {selectedDate && (
        <TimeSlotSelection
          selectedDate={selectedDate}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
          resetSelections={resetSelections}
        />
      )}

      {selectedTimeSlot && (
        <button onClick={handleBook} className="book-button">
          Book Now
        </button>
      )}
    </div>
  );
}

export default Drug;
