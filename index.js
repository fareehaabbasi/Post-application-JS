let content = document.getElementById("content");
let post = document.getElementById("post");
let con = document.getElementById("create-post");

post.addEventListener("click", function () {
    if (content.value.trim() === "") return; // prevent empty post

    con.innerHTML += `<div>
        <p>${content.value}</p>
        <button onclick="removePost(event)">Delete</button>
        <button onclick="editPost(event)">Edit</button>
    </div>`;
    content.value = "";
});

function removePost(event) {
    event.target.parentNode.remove();
}

function editPost(event) {
    let parentDiv = event.target.parentNode;
    let paragraph = parentDiv.querySelector("p");
    let currentText = paragraph.textContent;

    // Replace paragraph with textarea
    paragraph.outerHTML = `<textarea class="edit-area">${currentText}</textarea>`;

    // Change "Edit" button to "Update"
    event.target.textContent = "Update";
    event.target.setAttribute("onclick", "updatePost(event)");
}

function updatePost(event) {
    let parentDiv = event.target.parentNode;
    let textarea = parentDiv.querySelector(".edit-area");
    let newText = textarea.value;

    // Replace textarea back to paragraph
    textarea.outerHTML = `<p>${newText}</p>`;

    // Change "Update" button back to "Edit"
    event.target.textContent = "Edit";
    event.target.setAttribute("onclick", "editPost(event)");
}
