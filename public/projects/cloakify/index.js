document.addEventListener("DOMContentLoaded", function() {
    var urlInput = document.getElementsByClassName("url-input")[0];

    urlInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var value = urlInput.value;
            var newTab = window.open("", "_blank");
            var webContent = document.createElement("iframe");
            webContent.setAttribute("src", value.includes("https://") ? value : "https://" + value);
            webContent.style.border = "none";
            webContent.style.width = "100%";
            webContent.style.height = "100vh";
            var head = newTab.document.head;
            var title = document.createElement("title");
            title.textContent = "Classroom";
            var icon = document.createElement("link");
            icon.rel = "icon";
            icon.type = "image/png";
            icon.href = "https://ssl.gstatic.com/classroom/ic_product_classroom_144.png";
            head.appendChild(title);
            head.appendChild(icon);
            newTab.document.body.style.margin = "0px";
            newTab.document.body.appendChild(webContent);
        }
    });
});
