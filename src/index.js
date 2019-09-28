console.log("Test");

if (process.env.NODE_ENV !== "production") {
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "styles/codesandbox.css";

  document.head.appendChild(link);
}
