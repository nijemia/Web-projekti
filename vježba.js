


function changeTextColor() {
    document.querySelector('.content').style.color =
        document.querySelector('.content').style.color === 'yellow' ? 'white' : 'yellow';
}

function changeBackground() {
    document.body.style.background =
        "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6') no-repeat center/cover";
}

function startAnimation() {
    document.getElementById('box').style.animationPlayState = 'running';
}

for (let i = 0; i < 20; i++) {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerHTML = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (5 + Math.random() * 5) + "s";
    document.body.appendChild(flower);
}