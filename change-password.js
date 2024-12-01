
const mockDatabase = JSON.parse(localStorage.getItem("mockDatabase")) || {};

document.getElementById("changePasswordForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("change-email").value;
  const newPassword = document.getElementById("new-password").value;

  if (mockDatabase[email]) {
    mockDatabase[email] = newPassword;
    localStorage.setItem("mockDatabase", JSON.stringify(mockDatabase));
    alert("Password changed successfully!");
    window.location.href = "login.html";
  } else {
    alert("User not found. Please register first.");
  }
});