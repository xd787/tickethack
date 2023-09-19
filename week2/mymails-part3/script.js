const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector("#msg-container").innerHTML += newMessage;

const messagesCount = document.querySelectorAll("p").length;
document.querySelector("#count").textContent = messagesCount;

for (let i = 0; i < document.querySelectorAll(".row").length; i++)
  document
    .querySelectorAll(".delete")
    [i].addEventListener("click", function () {
      document.querySelector(".row").remove();
      const updateCount = document.querySelectorAll(".delete").length;
      document.querySelector("#count").textContent = updateCount;
    });

document.querySelector("#btn-add").addEventListener("click", function () {
  let addMessage = document.querySelector("#add-message").value;
  let newRow = document.querySelector(
    "#msg-container"
  ).innerHTML += `<div class="row">
  <img class="avatar" src="images/avatar-1.jpg" />
  <div class="text-container">
    <h6>John Doe</h6>
    <p>
    ${addMessage}
    </p>
  </div>
  <span class="delete">✖</span>
</div>`;

  const updateCount = document.querySelectorAll(".delete");

  document.querySelector("#count").textContent = updateCount.length;
  for (let j = 0; j < updateCount.length; j++)
    updateCount[j].addEventListener("click", function () {
      document.querySelector(".row").remove();
      const updateCount = document.querySelectorAll(".delete").length;
      document.querySelector("#count").textContent = updateCount;
    });
});

document.querySelector("#btn-search").addEventListener("click", function () {
  let textToCompare = document.querySelector("#search-message").value.toLowerCase();
  let listeMessages = document.querySelectorAll(".row");
  for (let i = 0; i < listeMessages.length; i++) {
    let nomPrenom = document.querySelectorAll("h6")[i].textContent.toLowerCase();
    if (nomPrenom.includes(textToCompare)) {
      listeMessages[i].style.display = "flex";
    } else {
      listeMessages[i].style.display = "none";
    }
  }
});

let year = new Date().getUTCFullYear();
let month;
let day;

if (new Date().getMonth() < 9) {
  month = "0" + (new Date().getMonth() + 1);
} else {
  month = new Date().getMonth() + 1;
}

if (new Date().getDate() < 9) {
  day = "0" + new Date().getDate();
} else {
  day = new Date().getDate();
}

const date = year + "-" + month + "-" + day;
document.querySelector("#footer").innerHTML += `<span id="date">${date}</span>`;
