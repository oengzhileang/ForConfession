const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you too!";
    gif.src = "https://media.tenor.com/JYW5vUN59CsAAAAC/tonton-friends.gif";
});
noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = wrapper.clientWidth - noBtnRect.width;
    const maxY = wrapper.clientHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});