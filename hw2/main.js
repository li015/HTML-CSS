
var anchor_buttons_bar = document.getElementsByClassName("anchor-buttons_bar");
var divClone = anchor_buttons_bar.cloneNode(true)
// document.body.appendChild(divClone);
// 然後當點選這個符號
// 時，會將該與會者移除會議，其他與會者的⼩視窗依序上提/左移，重新排列好

// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByClassName('ATTENDANT');
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }



//然後，如果
// 點選此橢圓 (不⼀定要點選在圖釘上)，則此與會者將會取代⽬前的主視窗，⽽⽬前主視窗的與會者會
// 加到旁邊的側邊欄。


//anchor the attendee
function anchor_att(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("img1");
    // Get the image text
    var imgText = document.getElementById("anchor_name");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }



// 同 (iii)，當游標點擊主視窗使⽤者頭像上的橢圓時 (不⼀定要點選在圖釘上)，則關閉主視窗，且原先
// 主視窗上的與會者會加入其他的與會者，⼀起重新排在整個視窗上，如下圖：


//document.getElementsByClassName('meeting-overview').display()
function leave_anchor(){
    let layout = document.querySelector('.meeting-overview');
    var originalgrid = layout.getAttribute("grid-template-columns");
    if (originalgrid === "1fr 1fr 1fr "){
        originalgrid = "0fr 0fr 1fr "
    }
    else{
        originalgrid = "1fr 1fr 1fr "
    }
    // layout.setAttribute("grid-template-columns", 
        // "0fr 0fr 1fr ")
}
// Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);


//如果⽬前沒有⼈被釘選 (anchored) 在主視窗上 (如 (iv) ), 則點擊某⼀位與會者頭像上的橢圓，如上功
// 能 (iii), 則會出現主視窗，且此與會者會被釘選在主視窗上，⽽其他與會者則排列在側邊欄。




// (vi) 如果踢出所有的與會者，只剩下⾃⼰，則⾃⼰應佔滿整個視窗。




// 可在 “適當的地⽅” 放置⼀個 按鈕 (顏⾊樣式不拘)，且當滑鼠點擊他時，可以新增⼀個與會者視
// 窗 (姓名、頭像等資訊可⾃編)。


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please Add name!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



  var timecode = Date.now();