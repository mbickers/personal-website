function resumeFormat() {
    document.styleSheets[1].disabled = true;
    document.getElementById("resume-stylesheet").removeAttribute("disabled");
}

function printResume(phoneNumber) {
    resumeFormat();

    document.getElementById("phone-number").textContent = phoneNumber;

    document.title = "MaxBickersResume.pdf"

    window.print();
}