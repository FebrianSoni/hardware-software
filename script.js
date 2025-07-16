let score = 0;
let totalAnswered = 0;
const totalQuestions = 25; // Ubah sesuai jumlah soal kamu

// Fungsi untuk menampilkan/menyembunyikan gambar interaktif
function showImage(id) {
  const img = document.getElementById(id);
  img.style.display = img.style.display === "none" || img.style.display === "" ? "block" : "none";
}

// Fungsi untuk memeriksa jawaban
function checkAnswer(button, isCorrect) {
  if (button.classList.contains("answered")) return;

  totalAnswered++;
  button.classList.add("answered");
  button.disabled = true;

  // Disable semua tombol dalam pertanyaan yang sama
  button.parentElement.querySelectorAll("button").forEach(btn => {
    btn.disabled = true;
    if (btn !== button) btn.classList.add("not-chosen");
  });

  if (isCorrect) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("incorrect");
  }

  // Hitung skor dari 0–100
  const scoreFinal = Math.round((score / totalQuestions) * 100);
  const scoreElement = document.getElementById("score-display");
  if (scoreElement) {
    scoreElement.innerText = `Skor: ${scoreFinal} / 100`;
    if (totalAnswered === totalQuestions) {
      scoreElement.innerText += " ✅ Kuis selesai!";
    }
  }
}

// Fungsi untuk menandai menu aktif di navigasi bawah
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav.bottom-nav .nav-item");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && (currentPage === "" || currentPage === "/" || currentPage === "index.html"))) {
      link.classList.add("active");
    }
  });
});
