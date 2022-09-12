FARMERS.forEach(function(item, index) {
  let background = "background-grey-2" 
  if (index % 2 == 0) {
    background = "background-grey"
  }
    document.getElementById("farmers-root").innerHTML += bindFarmers(item, index + 1, background);
});


function bindFarmers(farmer, index, background) {
    return `<a href="./farmer.html"><div class="w3-row w3-padding-small ${background} w3-round-large" style="border: 1px solid rgba(0, 109, 0, 0); margin-bottom: 12px;">
    <div class="w3-col" style="width: 5%">
      <p class="small" style="margin-top: 13px">${index}</p>
    </div>
    <div class="w3-col" style="width: 16%">
      <div
        class="background-primary-dark"
        style="
          width: 45px;
          height: 45px;
          border-radius: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <img
          src="./images/farmer-smile.jpg"
          alt=""
          style="width: 40px; height: 40px; border-radius: 40px"
        />
      </div>
    </div>
    <div class="w3-col" style="width: 50%">
      <div style="margin-top: 2px">
        <p class="medium no-margin">Emmanuel Effiong</p>
        <div
          class="x-small background-grey-3 w3-text-white"
          style="
            padding: 0px 4px;
            width: fit-content;
            border-radius: 2px;
          "
        >
          pending verification
        </div>
      </div>
    </div>
    <div class="w3-col" style="width: 29%">
      <div>
        <p class="no-margin x-small bold">18 plots</p>
        <p class="no-margin x-small">Excellent farm</p>
        <p class="no-margin x-small">Udukpani Cross river</p>
      </div>
    </div>
  </div></a>`
}