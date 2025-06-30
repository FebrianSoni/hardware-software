function showImage(id) {
    const img = document.getElementById(id);
    img.style.display = img.style.display === "none" || img.style.display === "" ? "block" : "none";
  }
  
function checkAnswer(button, correct) {
    if (correct) {
      alert("Jawaban Benar! 🎉");
      button.style.backgroundColor = "#4ade80";
    } else {
      alert("Jawaban Salah 😅");
      button.style.backgroundColor = "#f87171";
    }
  }
