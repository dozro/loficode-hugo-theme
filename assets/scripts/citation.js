function showCitation(){
    var citationElement = document.getElementById("rye-citation");
    if (citationElement.classList.contains("citation-hidden")){
        citationElement.classList.remove("citation-hidden");
    } else {
        citationElement.classList.add("citation-hidden");
    }

}
function hideCitation(){
    var citationElement = document.getElementById("rye-citation");
    if (!citationElement.classList.contains("citation-hidden")){
        citationElement.classList.add("citation-hidden");
    }
}

function copyBibTex(){
    var bibtexData = document.getElementById("bibtex-data").innerText;
    navigator.clipboard.writeText(bibtexData).then(function() {
        console.log("BibTeX copied to clipboard");
    }, function(err) {
        alert("Could not copy BibTeX: ", err);
    });
}