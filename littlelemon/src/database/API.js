import BookingTimes from './bookingtimes.json';

const fetchTimes = function (bookingData, date) {
    let availableTimes = BookingTimes;

    if (bookingData) {
        if (bookingData.length > 0) {
            const reservedTimes = bookingData
                .filter((booking) => booking.date === date)
                .map((booking) => booking.time);

            return availableTimes.times.filter(times => !reservedTimes.includes(times.time));
        }
    }

    return availableTimes.times;
};

const submitAPI = function (bookingData, formData) {

    const appendData = (data) => {
        const updatedData = data;

        fetch('https://6505c2d4ef808d3c66f06d56.mockapi.io/api/bookingdata/bookingdata', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            // Send your data in the request body as JSON
            body: JSON.stringify(updatedData)
        }).then(res => {
            if (!res.ok) {
                console.error('Failed to update data');
            }
            // handle error
        }).catch(error => {
            console.error('Error updating data:', error);
        })
    };

    const newBooking = {
        "id": bookingData.length + 1,
        "firstName": formData.firstName.value,
        "contact": formData.contact.value,
        "date": formData.date.value,
        "time": formData.time.value,
        "guests": formData.guests.value,
        "occasion": formData.occasion.value
    }

    bookingData.push(newBooking);

    appendData(bookingData);

    return true;
};

export { fetchTimes, submitAPI };