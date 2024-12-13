let userScore = 0;
let compScore = 0;
let x;

let choices = document.querySelectorAll(".choice");
let choice_div = document.querySelector(".choices");
let button = document.querySelector("#reset");
let user_score = document.querySelector("#user_score");
let computer_score = document.querySelector("#computer_score");
let msg = document.querySelector("#msg");
let img1_content = document.querySelector("#img1-content");
let img2_content = document.querySelector("#img2-content");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let audio = document.querySelector("audio");

// generating 0 1 2;
function genNum() {
    x = Math.floor(Math.random() * 3);
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        genNum();
        let userChoosed = choice.getAttribute("id");
        let compChoosed = choices[x].getAttribute("id");

        img1.src = "images/rock-rotate.jpg";
        img2.src = "images/rock-rotate-flipped.jpg";

        img1.classList.add("shake1");
        img2.classList.add("shake2");

        audio.play();
        audio.playbackRate = 0.75;

        msg.innerText = "------------";

        let result;
        if (userChoosed === compChoosed) {
            result = "Draw! Choose Again..";
        } else if (
            (userChoosed === "rock" && compChoosed === "scissor") ||
            (userChoosed === "paper" && compChoosed === "rock") ||
            (userChoosed === "scissor" && compChoosed === "paper")
        ) {
            result = "You Won !..";
            userScore++;
        } else {
            result = "Computer won !..";
            compScore++;
        }
        img1.addEventListener("animationend", () => {
            img1.classList.remove("shake1");
            img1.src = `images/${userChoosed}-rotate.jpg`;
            msg.innerText = result;
            user_score.innerText = userScore;
            computer_score.innerText = compScore;
        });

        img2.addEventListener("animationend", () => {
            img2.classList.remove("shake2");
            img2.src = `images/${compChoosed}-rotate-flipped.jpg`;
        });
    });
});

reset.onclick = () => {
    userScore = 0;
    compScore = 0;
    user_score.innerText = userScore;
    computer_score.innerText = compScore;
    msg.innerText = "Play your move";
    img1.src = "images/rock-rotate.jpg";
    img2.src = "images/rock-rotate-flipped.jpg";
};