let inputEl = document.getElementById("inputdob");

function calculateAge() {

    if (inputEl.value === "") {

        document.getElementById("result").innerHTML =
            "⚠ Please enter your date of birth";

        return;
    }

    let birthDate = new Date(inputEl.value);

    let today = new Date();

    if (birthDate > today) {

        document.getElementById("result").innerHTML =
            "⚠ Date of birth cannot be in future";

        return;
    }

    let years =
        today.getFullYear() - birthDate.getFullYear();

    let months =
        today.getMonth() - birthDate.getMonth();

    let days =
        today.getDate() - birthDate.getDate();

    if (days < 0) {

        months--;

        days += 30;
    }

    if (months < 0) {

        years--;

        months += 12;
    }

    let nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if (today > nextBirthday) {

        nextBirthday.setFullYear(
            today.getFullYear() + 1
        );
    }

    let diff = nextBirthday - today;

    let remainingDays = Math.ceil(
        diff / (1000 * 60 * 60 * 24)
    );

    let message = "";

    if (
        today.getDate() === birthDate.getDate() &&
        today.getMonth() === birthDate.getMonth()
    ) {

        message = "🎉 Happy Birthday 🎂";

    } else {

        message =
            "🎈 Your next birthday is in " +
            remainingDays +
            " days <br><br>" +
            "🎉 Advance Happy Birthday! 🎂";
    }

    let totalDays =
        years * 365 + months * 30 + days;

    let heartBeats =
        totalDays * 24 * 60 * 80;

    document.getElementById("result").innerHTML =

        "🎂 Your Age is <br><br>" +

        years + " Years " +
        months + " Months " +
        days + " Days <br><br>" +

        "💓 Do you know?<br>" +

        "Your heart has beaten approximately <br><br>" +

        heartBeats.toLocaleString() +

        " times 💜<br><br>" +

        message;
}