function showDate() {
  let h5 = document.querySelector("h5");

  let now = new Date();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[now.getDay()];
  let date = now.getDate();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  h5.innerHTML = `{day}, ${month}, {date}`;
}