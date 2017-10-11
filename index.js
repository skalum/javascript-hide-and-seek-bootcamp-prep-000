function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild() {
  let current = document.querySelector("div#grand-node");
  let deepest;

  while (current) {
    deepest = current;

    current = current.querySelector("*");
  }

  return deepest;
}
