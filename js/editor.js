
function runHTML(id, data) {
    let output = document.getElementById("BOOKMARKLET_OUTPUT");
    
    output.contentDocument.body.innerHTML = data;


}

function loadHTML(id) {
    let default_html = document.getElementById(id);
    default_html = default_html.value;

    let output = document.getElementById("BOOKMARKLET_OUTPUT");
    output.contentDocument.body.innerHTML = default_html;
}