const select = function ($target) {
  const $gamesListItems = document.querySelectorAll(".games__list__item");
  $gamesListItems.forEach(($item) => {
    $item.classList.remove("active");
  });
  const $gamesFeatureItems = document.querySelectorAll(".games__feature__item");
  $gamesFeatureItems.forEach(($item) => {
    $item.classList.remove("active");
  });
  $target.classList.add("active");
  $featureItem = document.querySelector(
    `#games__feature__item--${$target.dataset.target}`
  );
  $featureItem.classList.add("active");
};

const autoSelect = function () {
  const $activeGameListItem = document.querySelector(
    ".games__list__item.active"
  );
  var $target = $activeGameListItem.nextElementSibling;
  if ($target == null) {
    $target = $activeGameListItem.parentNode.firstElementChild;
  }
  select($target);
};

window.addEventListener("load", function () {
  const $gamesListItems = this.document.querySelectorAll(".games__list__item");
  $gamesListItems.forEach(($gamesListItem) => {
    $gamesListItem.addEventListener("click", (event) => {
      const $target = event.currentTarget;
      select($target);
    });
  });

  var timer = setInterval(autoSelect, 5000);

  const $games = this.document.querySelector(".games");
  $games.addEventListener("mouseover", () => {
    this.clearInterval(timer);
  });

  $games.addEventListener("mouseout", () => {
    timer = setInterval(autoSelect, 5000);
  });
});
