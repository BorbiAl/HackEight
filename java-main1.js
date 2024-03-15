const leaderboard = document.getElementById("leaderboard");
const userForm = document.getElementById("user-form");

// Sample data
const users = [
  { name: "John Doe", timepoints: 100 },
  { name: "Jane Doe", timepoints: 150 },
  { name: "Mike Smith", timepoints: 200 },
];

// Sort users by timepoints
users.sort((a, b) => b.timepoints - a.timepoints);

// Add users to the leaderboard
users.forEach((user, index) => {
  const row = `<tr>
                  <td>${index + 1}</td>
                  <td>${user.name}</td>
                  <td>${user.timepoints}</td>
                </tr>`;
  leaderboard.querySelector("tbody").insertAdjacentHTML("beforeend", row);
});

// Add user to the leaderboard
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = userForm.name.value;
  const timepoints = userForm.timepoints.value;

  // Add user to the users array
  users.push({ name, timepoints: parseInt(timepoints) });

  // Sort users by timepoints
  users.sort((a, b) => b.timepoints - a.timepoints);

  // Add user to the leaderboard
  const row = `<tr>
                  <td>${users.length}</td>
                  <td>${name}</td>
                  <td>${timepoints}</td>
                </tr>`;
  leaderboard.querySelector("tbody").insertAdjacentHTML("beforeend", row);

  // Clear input fields
  userForm.name.value = "";
  userForm.timepoints.value = "";
});