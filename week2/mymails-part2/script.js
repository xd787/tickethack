// Insert your code here
console.log("connecté");

document.querySelector("#msg-container").innerHTML += `<div class="row">
<img class="avatar" src="images/avatar-1.jpg" />
<div class="text-container">
  <h6>Xavier DEJEAN</h6>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
    unde vel magni possimus libero, alias suscipit nobis officia
    accusantium. Laborum ipsam accusamus iusto deserunt mollitia.
    Repudiandae alias sequi nobis ipsum.
  </p>
</div>
<span class="delete">✖</span>
</div> `;

let messages = document.querySelectorAll("p").length;
document.querySelector("#count").textContent = messages;

let today = new Date().toISOString().slice(0, 10);
document.querySelector("#footer").innerHTML += `<span id="date"></span>`;
document.querySelector("#date").textContent = today;

//today.getFullYear();
//today.getMonth() + 1;
//today.getDate();

//  let formatedDate = today.toISOString().slice(0, 10);
