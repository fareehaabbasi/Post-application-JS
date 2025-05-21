// function greet(element) {
//     element.src = "images/img2.jpg";
// }

// function greet1(e) {
//     e.src = "images/sumup-8DmMxd5_1nE-unsplash.jpg"
// }

// document.getElementById("myInput").onfocus = function () {
//     console.log("Input field is focused!");
// };

// function checkAddress(fieldId) {
//     if (document.getElementById(fieldId).value === "") {
//         alert("Email address required.");
//     }
// }

let content = document.getElementById("content");
let post = document.getElementById("post");
let con = document.getElementById("create-post")

post.addEventListener("click", function(){
    console.log(content.value);
    con.innerHTML = `<div><p>${content.value}</p>
    <button id="removePost">Delete</button>
    <button>Edit</button>
    </div>`
})

let remPost = document.getElementById("removePost");

remPost.addEventListener("click", function(){
    con.innerHTML = `${""}`;
})
