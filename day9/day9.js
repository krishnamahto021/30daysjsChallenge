// task 1
// const pId = document.getElementById("h1Tag");
// pId.innerText = "I am new text";

// task 2
// const pClass = document.getElementsByClassName("paragraphClass");
// pClass[0].style.backgroundColor = "red";

//task 3
// const divEle = document.createElement("div");
// divEle.innerText = "i am new div";
// document.body.appendChild(divEle);

// task 4
// const ulItem = document.getElementById("ulId");
// const li = document.createElement("li");
// li.textContent = "i am new li item";
// ulItem.appendChild(li);

// task 5
// const ulItem = document.getElementById("uId");
// ulItem.remove();

// task 6
// const ulItem = document.getElementsByTagName("ul");
// ulItem[0].removeChild;

// task 7
// const imgTag = document.getElementsByClassName("img");
// imgTag[0].src =
//   "https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png";

// task 8
// const img = document.getElementsByClassName("img");
// img[0].classList.remove("img");
// img[0].classList.add("newImg");

// task 9
const btn = document.createElement("button");
btn.innerText = "change";
document.body.appendChild(btn);
// btn.addEventListener("click", () => {
//   const p = document.getElementById("para");
//   p.textContent = "new sample paragraph";
// });

// task 10
btn.addEventListener("mouseenter", () => {
  btn.style.border = "1px solid blue";
});
