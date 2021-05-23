//Header
document.getElementById('main-heading').innerHTML="New DOM Layout";
let background=document.getElementById('page-header');
background.classList.remove('bg-dark');
background.classList.add('bg-success');
//paragraphs
document.getElementById('para1').innerHTML="The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."
document.getElementById('para2').innerHTML="The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."
//CardsColor
let red=document.getElementById('red');
red.classList.remove('bg-white');
red.classList.add('bg-danger');
let blue =document.getElementById('blue');
blue.classList.remove('bg-white');
blue.classList.add('bg-primary');
let yellow =document.getElementById('yellow');
yellow.classList.remove('bg-white');
yellow.classList.add('bg-warning');
let green =document.getElementById('green');
green.classList.remove('bg-white');
green.classList.add('bg-success');
let black =document.getElementById('black');
black.classList.remove('bg-white');
black.classList.add('bg-dark');
//btn
let button=document.getElementById('btn');
button.addEventListener('click',onClick);
function onClick() {
    document.getElementById('para4').innerHTML='The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'
}