import { getSearchData } from "./index.js";

function tags(url, tagName, bgColor) {
  let div = document.createElement("div");
  div.setAttribute("class", "inner-tag");

  let img = document.createElement("img");
  img.src = url;
  img.alt = tagName;

  let p = document.createElement("p");
  p.innerText = tagName;
  p.setAttribute("class", "tagname");
  p.style.backgroundColor = bgColor;

  div.append(img, p);
  div.addEventListener("click", (e) => {
    getSearchData(tagName, 1);
  });
  return div;
}

export { tags };
