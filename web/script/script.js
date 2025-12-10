let questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {

        let answer = question.lastElementChild;

        if (answer.style.maxHeight) {
            document.querySelectorAll(".answer").forEach((el) => el.style.maxHeight = null);
            answer.style.marginTop = null;
            answer.previousElementSibling.style.transform = null;
        }
        else {
            document.querySelectorAll(".answer").forEach((el) => {
                el.style.maxHeight = null;
                el.style.marginTop = null;
            });
            document.querySelectorAll(".question__open").forEach((el) => el.style.transform = null);
            
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.marginTop = "30px";
            answer.previousElementSibling.style.transform = "rotate(45deg)";
        }

    });
})


document.querySelector(".burger-checkbox").addEventListener("change", (e) => {
    if (e.target.checked) {
        document.body.style.overflow = 'hidden';
        document.querySelector('main').style.opacity = 0.3;
    }
    else {
        document.body.style.overflow = null;
        document.querySelector('main').style.opacity = 1;
    }
});