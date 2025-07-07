window.onload = () => {
  const form = document.querySelector("form");
  const alert = document.querySelector(".alert");

  form.addEventListener("submit", function (e) {
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      alert.classList.remove("d-none");
    } else {
      alert.classList.add("d-none");
    }

    form.classList.add("was-validated");
  });
};
