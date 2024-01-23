document
  .getElementById("newHabitForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevents the default form submit action

    const habitName = document.getElementById("habitName").value;
    const habitStoppedOn = document.getElementById("habitStoppedOn").value;

    const newHabit = {
      name: habitName,
      stoppedOn: habitStoppedOn,
    };

    fetch("http://localhost:3000/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHabit),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        loadHabits();
        // window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Clear the form fields
    document.getElementById("habitName").value = "";
    document.getElementById("habitStoppedOn").value = "";
  });

document.querySelector(".btnadd").addEventListener("click", function () {
  window.location.href = "index.html";
});
