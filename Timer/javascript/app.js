const completeDate = "20 March 2080 10:00 PM"

document.getElementById("complete-date").innerText = completeDate
const input = document.querySelectorAll("input");

const clock = () => {
    const complete = new Date(completeDate);
    const now = new Date();
    const difference = complete - now / 1000;
    input[0].value = Math.floor(difference / 3600 / 24)
    input[1].value = Math.floor(difference / 3600) % 24;
    input[2].value = Math.floor(difference / 60) % 60
    input[3].value = Math.floor(difference) % 60
}

clock()

setInterval(() => {
    clock()
}, 1000);