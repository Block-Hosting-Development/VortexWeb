window.onbeforeunload = vortex;

function vortex() {
    return "no thx :D";
}

window.onload = function () {
    if (window.location.href !== "about:blank") {
        if (document.getElementById("gameSite").value === "1") {
          const html = document.documentElement.outerHTML;
          const newTab = window.open('about:blank', '_blank');
          newTab.document.write(html);
          window.close();
        }
    }
}