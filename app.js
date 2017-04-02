const ls= localStorage;
const ls= localStorage;
var mydb=[];

 function show(){
const base =document.getElementById("base").value;
const con= document.getElementById("con").value;
const convert= document.getElementById("convert").value;
mydb.push(con);
mydb.push(convert);
ls.setItem('list',JSON.stringify(mydb))
const show=JSON.parse(ls.getItem('list'))
document.getElementById("con").innerHTML=show;
console.log(show);
const amount= document.getElementById("amount").value;

fetch("https://api.fixer.io/latest?base="+base+"&symbols="+con+convert)
  .then((res) => res.json())
  .then((data) =>{console.log(data.rates[con])
	 
	 
	 
	  var ans=amount*data.rates[con]+" "+ con ; 
	  var ans1=amount*data.rates[convert]+" "+ convert 
	  document.getElementById("display").innerHTML="Currency after conversion is: "+ ans;
	  document.getElementById("display2").innerHTML="Currency after conversion is: "+ ans1;
 
  })
  .catch((e) => alert(`${e} There is some problem with your value`))
  
  }

const btn = document.getElementById('click')
btn.addEventListener('click', (e) => {
	e.preventDefault()
	show()
})// JavaScript Document
