const ls= localStorage;
var mydb=[];

 function show(){
const base =document.getElementById("base").value;
const con= document.getElementById("con").value;
mydb.push(con);
ls.setItem('list',JSON.stringify(mydb))
const show=JSON.parse(ls.getItem('list'))
document.getElementById("con").innerHTML=show;
console.log(show);
const amount= document.getElementById("amount").value;

fetch("https://api.fixer.io/latest?base="+base+"&symbols="+con)
  .then((res) => res.json())
  .then((data) =>{console.log(data.rates[con])
	  var ans=amount*data.rates[con]+" "+ con 
	  document.getElementById("display").innerHTML="The value is: "+ ans;
 
  })
  .catch((e) => alert(`${e} There is some problem with your value`))
  
  }

const btn = document.getElementById('click')
btn.addEventListener('click', (e) => {
	e.preventDefault()
	show()
})// JavaScript Document
