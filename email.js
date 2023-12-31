
function sendEmail(event) {
    event.preventDefault();
    (function() {
        emailjs.init("top1LR8VHBn9B118Z");
    })();

    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    const msg = document.getElementById("msg");

    const serviceID = "service_spc8yzh";
    const templateID = "template_43e8utb";

    emailjs.send(serviceID, templateID, params)
    .then(res => {
        document.getElementById('form').reset();
        msg.style.display = "block";
        setTimeout(() => {
            msg.style.display = "none";
        }, 5000);
    })
    .catch();
}
