(function () {
  "use strict";
  debugger;
  var state = document.getElementById("s-state");

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cart-hplus").addEventListener("submit", calcTotal);
    var btn = document.getElementById("btn-estimate");
    btn.disabled = true;
    state.addEventListener("change", function () {
      // if (state.value === "") {
      //   btn.disabled = true;
      // } else {
      //   btn.disabled = false;
      // }
      btn.disabled = state.value === "";
    });
  });

  function calcTotal(event) {
    event.preventDefault();

    if (state.value === "") {
      alert("Plear select your shipping state");
      state.focus();
    }
    var itembball =
      parseInt(document.getElementById("txt-q-bball").value, 10) || 0,
      itemjersey =
        parseInt(document.getElementById("txt-q-jersey").value, 10) || 0,
      itemPower =
        parseInt(document.getElementById("txt-q-power").value, 10) || 0,
      shippingState = state.value,
      shippingMethod = document.querySelector("[name=r_method]:checked").value;
    var totalQTY = itembball + itemPower + itemjersey,
      shippingCostPer,
      ShippingCost,
      taxtFactor = 1,
      estimate,
      totalItemPrice = 90 * itembball + 25 * itemjersey + 30 * itemPower;
    if (shippingState === "CA") {
      taxtFactor = 1.075;
    }
    switch (shippingMethod) {
      case "usps":
        shippingCostPer = 2;
        break;
      case "ups":
        shippingCostPer = 3;
        break;
      default:
        shippingCostPer = 0;
        break;
    }
    ShippingCost = shippingCostPer * totalQTY;
    estimate = totalItemPrice * taxtFactor + ShippingCost;
    document.getElementById("txt-estimate").value = estimate;

    var result = document.getElementById("results");

    result.innerHTML = 'Total Items: ' + totalQTY + '<br />';
    result.innerHTML += 'Total shipping Cost: ' + ShippingCost.toFixed(2) + '<br />';
    result.innerHTML += 'Tax: ' + (((taxtFactor - 1) * 100).toFixed(2) + ' % ' + shippingState);







  }
})();
