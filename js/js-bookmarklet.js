
function run(id, data) {
    let output = document.getElementById("installer");
    
    output.href = JSBookmark(data);
}

function load(id) {
    let default_html = document.getElementById(id);
    let data = default_html.value;

    let output = document.getElementById("installer");
    
    output.href = JSBookmark(data);
}
// https://stackoverflow.com/a/59094308
function removeComments(string){
    string = string.replace(/<\!--.*?-->/g, "").trim();                              // html
    string = string.replace(/\/\*(.*?)\*\//gs, "").trim();                           // css
    return string.replace(/\/\*[\s\S]*?\*\/|(?<=[^:])\/\/.*|^\/\/.*/g, "").trim();   // javascript
}

function removeLines(string){
    string = string.replace(/\s{2,}/g,"")   // newlines and spaces
    return string;
}

function JSBookmark(javascript) {
    javascript = removeLines(removeComments(javascript));
    let full = "javascript:(function(){" + encodeURIComponent(javascript.trim()) + "})();";

    console.log(full);
    return full;
}

function JSBookmarkNoEncode(javascript) {
    javascript = removeLines(removeComments(javascript));
    let full = `javascript:(function(){${javascript}})();`;

    console.log(full);
    return full;
}