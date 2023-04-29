import { tags } from "./tags.js";

var urls = [
  "https://th.bing.com/th/id/OIP.kbUQEBnvjOS4L-FE76Dk2wHaEl?w=281&h=180&c=7&r=0&o=5&pid=1.7",
  "https://i.etsystatic.com/7424399/r/il/462d8d/1274162435/il_fullxfull.1274162435_hj0t.jpg",
  "https://th.bing.com/th/id/OIP.dvMl7R5vsvF3N6Zy3f39vQHaJ3?w=155&h=207&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.SLKGbQajp0Dh1zHfUty2uwHaEN?w=310&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.urqj1RRGuBHTBu9atq1SfwHaE7?w=267&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.x2Z3wopR_IQFDX7N39bEwQHaEo?w=224&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.p9S3bKtR6yiuKEd26kFF_QHaEo?w=295&h=184&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.7mkzzL-r8RFFS0FyEB9jZgHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.5LDmAFGj4ZRsqdbEnTd72gHaFi?w=260&h=196&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.a5HwHJi5T1cLKO9FtS3AFQHaJ4?w=201&h=268&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.oNhHMMkepO0rTz7_hZ6QGgHaFN?w=286&h=199&c=7&r=0&o=5&pid=1.7",
];
var tagNames = [
  "SuperHeros",
  "Wholesome",
  "Funny",
  "Awesome",
  "Gamimg",
  "Photography",
  "Space",
  "Unmuted",
  "Astronomy",
  "Movies and TV",
  "Sport",
];

var bgColor = [
  "#328d67",
  "#5d85c3",
  "#633875",
  "#8472bd",
  "#2b1a5a",
  "#60aebb",
  "#60aebb",
  "#50535a",
  "#50207b",
  "#2084b0",
  "#d6707c",
];

function wrapTags() {
  var tag = document.getElementById("tags");
  urls.forEach((ele, i) => {
    let t = tags(ele, tagNames[i], bgColor[i]);
    tag.append(t);
  });
}

wrapTags();
