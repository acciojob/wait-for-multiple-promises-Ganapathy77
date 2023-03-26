//your JS code here. If required.
const promise1 = new Promise((resolve)=>{
	let time =Number( Math.random() * 2000 + 1000 )
	console.log(time)
	setTimeout(()=>{
		resolve(time)
	},time)
})
const promise2 = new Promise((resolve)=>{
	let time = Math.random() * 2000 + 1000
	setTimeout(()=>{
		resolve(time)
	},time)
})
const promise3 = new Promise((resolve,reject)=>{
	let time = Math.random() * 2000 + 1000
	setTimeout(()=>{
		resolve(time)
	},time)
})

Promise.all([promise1,promise2,promise3]).then((results)=>{
	const loading = document.querySelector('#loading');
	loading.innerHTML = "";

	const tableBody = document.querySelector('tbody');
	let totalTime = 0;
	results.forEach((result,index)=>{
		const row = tableBody.insertRow(index);
		const cell = row.insertCell(0)
		cell.textContent = `Promise ${index+1}`;
		const timeTakenCell = row.insertCell(1);
		timeTakenCell.textContent =Math.round(result/1000);
		totalTime += result;
	})

	const totalRow = tableBody.insertRow();
	const totalCell = totalRow.insertCell(0);
	totalCell.textContent = 'Total';
	const totalTimeTakenCell = totalRow.insertCell(1);
	totalTimeTakenCell.textContent += (totalTime/3000).toFixed(3)
})