//----------------------------------Document object--------------------------------------------
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent="Hello"
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

//------------------------------------getElementbyID-------------------------------------------
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')
// console.log(headerTitle)
// console.log(headerTitle.textContent="Hello")
// headerTitle.innerText="Bye"
// headerTitle.innerHTML='<h3> Hello what</h3>'
// headerTitle.style.borderBottom='solid 3px #000'
// header.style.borderBottom='solid 3px #000'

//--------------------------------getElementByCLassName=----------------------------------
var items = document.getElementsByClassName('list-group-item')
console.log(items)
console.log(items[1])
items[1].textContent="Hello 3"
items[1].style.fontWeight='bold'
items[0].style.backgroundColor="red"
for(var i=0; i<items.length;i++)
{
    items[i].style.backgroundColor="grey"
}