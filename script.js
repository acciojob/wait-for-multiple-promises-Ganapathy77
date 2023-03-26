//your JS code here. If required.
const promise1 = new Promise((resolve)=>{
	let time = Math.random*2000+1000 
	setTimeout(()=>{
		resolve(time)
	},time)
})
const promise2 = new Promise((resolve)=>{
	let time = Math.random*2000+1000 
	setTimeout(()=>{
		resolve(time)
	},time)
})
const promise3 = new Promise((resolve,reject)=>{
	let time = Math.random*2000+1000 
	setTimeout(()=>{
		resolve(time)
	},time)
})

Promise.all([promise1,promise2,promise3]).then((results)=>{
	const loading = document.querySelector('#loading');
	loading.innerHTML = "";

	const tableBody = document.querySelector('tbody');
	results.forEach((result,index)=>{
		const row = tableBody.insertRow(index);
		const cell = row.insertRow(0);
		cell.textContent = `Promise ${index+1}`
	})
})