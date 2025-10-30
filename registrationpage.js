
function eventsample(e) {
    console.log(e);
}

document.getElementById("newDataForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let newObj = Object.fromEntries(formData.entries());

    console.log(formData);
    console.log(newObj);

    if (newObj.username === "jd") {
        console.log("username already exists, please login");
    } else {
        console.log("Registration completed. Thanks!");
    }
});