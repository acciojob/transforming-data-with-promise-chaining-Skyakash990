//your JS code here. If required.
let input=document.getElementById("ip");
let  btn=document.getElementById("btn");
let opDiv=document.getElementById("output");

btn.addEventListener("click",function(){
	new Promise((resolve,reject)=>{
		let val=Number(input.value);
		setTimeout(()=>{
			resolve(val);
		},2000)
	}).then((val)=>{
		opDiv.textContent = `Result: ${val}`;
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let resMultiply=val*2;
				opDiv.textContent = `Result: ${resMultiply}`;
				resolve(resMultiply);
			},2000)
		})
	}).then((resMultiply)=>{
		return new Promise((resolve)=>{
			let subtract=resMultiply - 3;
			setTimeout(()=>{
				opDiv.textContent = `Result: ${subtract}`;
				resolve(subtract);
			},1000);
		})
	}).then((subtract)=>{
		return new Promise((resolve)=>{
			let divide=subtract / 2;
			setTimeout(()=>{
				opDiv.textContent = `Result: ${divide}`;
				resolve(divide);
			},1000);
		})
	})
	.then((divide)=>{
		return new Promise((resolve)=>{
			let add=divide + 10;
			setTimeout(()=>{
				opDiv.textContent = `Result: ${add}`;
				resolve(add);
			},1000);
		})
	})
})