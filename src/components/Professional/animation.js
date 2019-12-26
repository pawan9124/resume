export const createLine = function(lineNumber, lineData) {
  let line = document.createElement("div");
  line.setAttribute("data-line-nr", lineNumber);
  line.className = "code-l";

  lineData.map((data, index) => {
    let childData = document.createElement("span");
    childData.className = data.class;
    let textnode = document.createTextNode(data.text);
    childData.appendChild(textnode);
    line.appendChild(childData);
  });
  return line.outerHTML;
};
