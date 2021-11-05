document.querySelectorAll(".panel-tabs a").forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".panel-tabs a").forEach(function (el) {
      el.classList.remove("is-active");
    });

    el.classList.add("is-active");

    document.querySelectorAll(".panel-block").forEach(function (el) {
      el.classList.remove("is-active");
    });

    document.getElementById(el.getAttribute("target-elm")).classList.add("is-active");
  });
});
