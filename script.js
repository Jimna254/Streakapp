function loadHabits() {
  fetch("http://localhost:3001/habits")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("habitsContainer");
      const currentDate = new Date();

      data.forEach((habit) => {
        const stoppedDate = new Date(habit.stoppedOn);
        const timeDiff = currentDate - stoppedDate;
        const daysSinceStopped = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const habitCard = document.createElement("div");
        habitCard.classList.add("habitcard");
        habitCard.innerHTML = `
              <h3>${habit.name}</h3>
              <p>Stopped On: ${habit.stoppedOn}</p>
              <p>Days Since Stopped: ${daysSinceStopped} days</p>
            `;
        container.appendChild(habitCard);
      });
    })
    .catch((error) => console.error("Error:", error));
}

document.querySelector(".add-icon").addEventListener("click", function () {
  window.location.href = "add.html";
});

window.onload = loadHabits;
