let isSearchOpen;
document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;
  if (targetId == "search-toggle") {
    if (!isSearchOpen) {
      document
        .getElementById("contents")
        .classList.replace("contents-search-closed", "contents-search-opened");
      setTimeout(function () {
        document.getElementById("search").style.display = "block";
      }, 1000);

      isSearchOpen = true;
    } else {
      document
        .getElementById("contents")
        .classList.replace("contents-search-opened", "contents-search-closed");
      document.getElementById("search").style.display = "none";
      isSearchOpen = false;
    }
  }
});

data.forEach(function (item) {
  document.getElementById("state").innerHTML += bindState(item);
});

function bindState(data) {
  return `<div id="${data.state}" class="w3-col s4" style="padding: 8px 4px;"><div class="pointer green w3-round w3-center" style="padding: 8px 8px">${data.state}<span class="w3-right w3-white small" style="width: 16px; height: 16px; border-radius: 16px; margin-top: 4px">${data.farms}</span></div></div>`;
}
