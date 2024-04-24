document.addEventListener('DOMContentLoaded', function () {
    const eventDate = moment('2024-02-14T00:00:00'); // Change this to your desired event date
    const daysElement = document.querySelector('.days');
    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');

    function updateCountdown() {
        const now = moment();
        const duration = moment.duration(eventDate.diff(now));

        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        daysElement.textContent = formatTime(days);
        hoursElement.textContent = formatTime(hours);
        minutesElement.textContent = formatTime(minutes);
        secondsElement.textContent = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);
});
