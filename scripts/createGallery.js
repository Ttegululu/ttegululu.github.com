var createGallery = function(dataValue, dataIndex, dataArr){
  // li
  createUl = document.createElement("li");
  createUl.id = dataArr.length-dataIndex+dataValue.title;
  createUl.setAttribute("class", "buttonHover");
  createUl.setAttribute("style", " border-radius:6px; cursor:pointer;");
  document.getElementById("NewWaterfall").appendChild(createUl);
  // img
  createImg = document.createElement("img");
  createImg.setAttribute("style", "width:100%; border-radius:15px; padding:8px;");
  createImg.setAttribute("src", "../images/"+dataValue.img);
  document.getElementById(createUl.id).appendChild(createImg);
  // title
  createSpan = document.createElement("span");
  createTextNode = document.createTextNode(dataArr.length-dataIndex+". "+dataValue.title);
  createSpan.appendChild(createTextNode);
  createSpan.setAttribute("class", "f-ng");
  createSpan.setAttribute("style", "width:100%; font-size:12px; text-align:right; color:#ccc; padding:0 9px 9px;");
  document.getElementById(createUl.id).appendChild(createSpan);
};