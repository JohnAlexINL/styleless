const hasStyleTag = document.getElementsByTagName("style").length > 0;
const hasLinkCSS = !!document.querySelector('link[rel="stylesheet"]');

if (!hasStyleTag && !hasLinkCSS) {
  const style = document.createElement("style");
  style.textContent = `
    body {
        font-family: 'Courier New', Courier, monospace;
        text-shadow: 2px 2px 4px black;
        background-color: #111;
        color: white;
        margin: 0px;
        padding: 64px 15%;
    }
    a {
        text-decoration: none;
        color: #46f;
    }
  `;
  document.head.appendChild(style);
}
