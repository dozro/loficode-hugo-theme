// citation.js
// Copyright 2026 Rye (itsrye.dev)
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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