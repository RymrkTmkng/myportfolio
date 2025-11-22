window.addEventListener("load", function () {

  if (window.location.pathname.endsWith(".html")) {
    const newUrl = window.location.pathname.replace(".html", "");
    window.history.pushState({}, "", newUrl); 
  }

 
  switch (window.location.pathname) {
    case "/index":
      loadPage("index.html");
      break;
    case "/about":
      loadPage("about.html");
      break;
    default:
      loadPage("404.html");
  }
});

function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((html) => {
      document.documentElement.innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading page:", error);
      document.documentElement.innerHTML = "<h1>Page Not Found</h1>";
    });
}
