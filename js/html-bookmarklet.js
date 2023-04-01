
function runHTML(id, data) {
    let output = document.getElementById("BOOKMARKLET_OUTPUT");
    output.contentDocument.body.innerHTML = data;

    let title = data.match(/<title.*?>(.*)<\/title>/g)[0].replace(/<title.*?>|<\/title>/g,"");

    let installer = document.getElementById("installer");
    installer.innerText = title;
    installer.href = createBookmarklet(data);
}

function loadHTML(id) {
    let default_html = document.getElementById(id);
    default_html = default_html.value;

    let title = default_html.match(/<title.*?>(.*)<\/title>/g)[0].replace(/<title.*?>|<\/title>/g,"");

    let output = document.getElementById("BOOKMARKLET_OUTPUT");
    output.contentDocument.body.innerHTML = default_html;

    let installer = document.getElementById("installer");
    installer.innerText = title;
    installer.href = createBookmarklet(default_html);
}

function custom_ittybitty(data) {
    let byteArr = LZMA.decompress(atob(data).split(',').map((byte) => parseInt(byte, 10)));
    
}

function createBookmarklet(html) {
    html = removeLines(removeComments(html));
    // console.log(html);

    // ittybitty_url = 'https://itty.bitty.site/#BOOKMARKLET/' + btoa(LZMA.compress(html));

    let create_iframe = `let BML=document.createElement('iframe');BML.id='_BOOKMARKLET_';BML.style.cssText='position:fixed;z-index:2147483647;top:10px;right:10px;width:300px;height:350px;background:rgb(255, 255, 255);border:1px solid rgb(241, 241, 241);border-radius:10px;box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;';document.body.append(BML);BML.contentDocument.body.innerHTML=decodeURIComponent(atob('${btoa(encodeURIComponent(html))}'));`

    let full_bookmarklet=`let BM=document.getElementById('_BOOKMARKLET_');if(BM){BM.remove();}else{${create_iframe}};`;

    return JSBookmarkNoEncode(full_bookmarklet);
}