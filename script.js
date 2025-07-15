let score = 0;
let totalAnswered = 0;
const totalQuestions = 25;

function showImage(id) {
  const img = document.getElementById(id);
  img.style.display = img.style.display === "none" || img.style.display === "" ? "block" : "none";
}

function checkAnswer(button, isCorrect) {
  if (button.classList.contains("answered")) return;

  totalAnswered++;
  button.classList.add("answered");
  button.disabled = true;
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

  document.getElementById("score-display").innerText = `Skor: ${score} / ${totalQuestions}`;

  if (totalAnswered === totalQuestions) {
    document.getElementById("score-display").innerText += " ✅ Kuis selesai!";
  }
}
