function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById("nested").querySelector(".target");
}

function deepestChild() {
  let deepest = document.querySelector("div#grand-node");
  let depth = 0;

  console.log(deepest);
}

function findDeepestChild(el) {
  const current
}

deepestChild();
