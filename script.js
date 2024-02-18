let allBtn = document.getElementsByClassName("sit-btn");
let seatsLeft = document.getElementById("seats-left");
let count = 0;
let clickCount = 0;
for (btn of allBtn) {
  btn.addEventListener("click", function (e) {
    clickCount++;
    if (clickCount > 4) {
      btn.setAttribute(("disabled", "true"));
    }

    count++;
    console.log(count);
    const btn = e.target;
    btn.setAttribute("disabled", "true");

    const sitCount = document.getElementById("sit-number");
    sitCount.innerText = count;
    seatsLeft.innerText = parseInt(seatsLeft.innerText) - 1;
    let li = document.createElement("li");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p.innerText = btn.innerText;
    p2.innerText = "Economy";
    p3.innerText = 550;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    document.getElementById("bill-container").appendChild(li);
    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText =
      parseInt(totalPrice.innerText) + parseInt(p3.innerText);
    const grandTotalPrice = document.getElementById("grandtotal-price");
    grandTotalPrice.innerText = parseInt(totalPrice.innerText);
  });
}
const totalPrice = document.getElementById("total-price");
const grandTotalSection = document.getElementById("grandtotal-section");
const grandTotalPrice = document.getElementById("grandtotal-price");
const couponInput = document.getElementById("Coupon-input");
function checkCupon() {
  if (couponInput.value === "NEW15") {
    grandTotalPrice.innerText =
      parseInt(grandTotalPrice.innerText) -
      parseInt(grandTotalPrice.innerText) * 0.15;
    grandTotalSection.classList.add("hidden");
  } else if (couponInput.value === "Couple 20") {
    grandTotalPrice.innerText =
      parseInt(grandTotalPrice.innerText) -
      parseInt(grandTotalPrice.innerText) * 0.2;
    grandTotalSection.classList.add("hidden");
  } else if (grandTotalPrice.innerText === "0") {
    alert("add minimum one ticket");
  } else alert("Input right code");
}
const passengerName = document.getElementById("p-name");
const phoneNumber = document.getElementById("phone-number");
const nextBtn = document.getElementById("next-btn");

function toggleButtonState() {
  if (
    passengerName.value === "" ||
    phoneNumber.value === "" ||
    clickCount < 1
  ) {
    nextBtn.setAttribute("disabled", "true");
  } else {
    nextBtn.removeAttribute("disabled");
  }
}
toggleButtonState();
passengerName.addEventListener("input", toggleButtonState);
phoneNumber.addEventListener("input", toggleButtonState);

function submit() {
  document.getElementById("header").classList.add("hidden");
  document.getElementById("main").classList.add("hidden");
  document.getElementById("footer").classList.add("hidden");
  document.getElementById("submit-section").classList.remove("hidden");
}
function coninueBtn() {
  window.location.reload();
}
