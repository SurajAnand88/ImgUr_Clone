var imageData = [];
var id = null;
var page = 1;
var isSearch = false;
var search = null;

async function getData(text, page) {
  const jsonData = await fetch(
    `https://api.pexels.com/v1/${text}?page=${page}&per_page=20`,
    {
      headers: {
        Authorization:
          "1qn4pATM2ZScL4RFicmbgvu6aSeUFy6SroZjGWYJ0SNRZiRZg6CMXiqD",
      },
    }
  );
  const data = await jsonData.json();
  display(data.photos);
  console.log(data.photos);
}

async function getSearchData(text, page) {
  search = text;
  const jsonData = await fetch(
    `https://api.pexels.com/v1/search?query=${text}&page=${page}&per_page=20`,
    {
      headers: {
        Authorization:
          "1qn4pATM2ZScL4RFicmbgvu6aSeUFy6SroZjGWYJ0SNRZiRZg6CMXiqD",
      },
    }
  );
  const data = await jsonData.json();
  isSearch = true;
  display(data.photos);
  console.log(data.photos);
}

document.getElementById("search").addEventListener("input", (e) => {
  if (id !== null) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    getSearchData(e.target.value, page);
  }, 2000);
});

function display(array) {
  let main = document.querySelector(".main");
  main.innerHTML = "";
  array.map((ele, i) => {
    let div = document.createElement("div");
    div.setAttribute("class", "box-container");
    let a = document.createElement("a");
    a.innerText = `Photographer: ${ele.photographer}`;
    a.href = ele.photographer_url;

    let img = document.createElement("img");
    img.src = ele.src.large;
    img.alt = ele.photographer;
    div.style.border = `6px solid ${ele.avg_color}`;

    let p = document.createElement("p");
    p.innerText = ele.alt;

    div.append(img, a);
    main.append(div);
  });
}

getData("curated", 1);

document.getElementById("next").addEventListener("click", () => {
  page++;
  if (isSearch) {
    getSearchData(search, page);
  } else {
    getData("curated", page);
  }
});
document.getElementById("pre").addEventListener("click", () => {
  if (page > 1) {
    page--;
    if (isSearch) {
      getSearchData(search, page);
    } else {
      getData("curated", page);
    }
  }
});

export { getSearchData };
