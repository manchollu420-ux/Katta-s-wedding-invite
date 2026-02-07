const weddingDate = new Date("26-02-25T04:30:00").getTime();

const timer = setInterval(() => {
  const now = Date.now();
  const diff = weddingDate - now;

  document.getElementById("days").innerText =
    Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText =
    Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText =
    Math.floor((diff % (1000 * 60)) / 1000);

  if (diff < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "💍 It's Wedding Time 💍";
  }
}, 1000);

function scrollToInvite() {
  document.getElementById("invitation").scrollIntoView({ behavior: "smooth" });
}

function scrollToEvents() {
  document.getElementById("events").scrollIntoView({ behavior: "smooth" });
}

/* MODAL */
function openModal(type) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modalImg");
  const name = document.getElementById("modalName");
  const text = document.getElementById("modalText");

  if (type === "bride") {
    img.src = "assets/images/bride.png";
    name.innerText = "Divya💖";
    text.innerText = "Software Engineer at Accenture";
  }

  if (type === "groom") {
    img.src = "assets/images/groom.png";
    name.innerText = "Sravan💫";
    text.innerText = "Deputy Manager at SBI General";
  }

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
/* Scroll to top */
function scrollToTop(){
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* Music toggle */
let musicPlaying = false;
function toggleMusic(){
  const music = document.getElementById("bg-music");
  if(!musicPlaying){
    music.play();
    musicPlaying = true;
  }else{
    music.pause();
    musicPlaying = false;
  }
}
