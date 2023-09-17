import BookingTimes from './bookingtimes.json';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBApfy8owoCAnhx5uTvwhPGsH320a3vNGw",
    authDomain: "littlelemonapimsr.firebaseapp.com",
    databaseURL: "https://littlelemonapimsr-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "littlelemonapimsr",
    storageBucket: "littlelemonapimsr.appspot.com",
    messagingSenderId: "423048192060",
    appId: "1:423048192060:web:6eeda35d48488e7deee339",
    measurementId: "G-C8T4W1YX5J"
};

const firebaseApp = initializeApp(firebaseConfig);

const fetchTimes = function (date, res) {
    const database = getDatabase(firebaseApp);
    const reference = ref(database, 'bookings');

    onValue(reference, (snapshot) => {
        const bookingData = snapshot.val();

        if (bookingData) {
            let availableTimes = BookingTimes;

            const reservedTimes = Object.values(bookingData)
                .filter((booking) => {
                    return booking.date === date;
                })
                .map((booking) => {
                    return booking.time;
                });

            res(availableTimes.times.filter(times => !reservedTimes.includes(times.time)));
        } else {
            res(BookingTimes.times);
        }

    });
};

const submitAPI = function (formData) {

    const newBooking = {
        "firstName": formData.firstName.value,
        "contact": formData.contact.value,
        "date": formData.date.value,
        "time": formData.time.value,
        "guests": formData.guests.value,
        "occasion": formData.occasion.value
    }

    const database = getDatabase(firebaseApp);
    const reference = ref(database, 'bookings');
    push(reference, newBooking);

};

export { fetchTimes, submitAPI };