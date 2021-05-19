function convertFahrToCelsius(farhData) {
	if (isNaN(farhData)) {
		
		if (Array.isArray(farhData)) {
			return  JSON.stringify(`${farhData}  is not a valid number but an array`);
		}else{
			let dataType = typeof(farhData)
			farhData = JSON.stringify(farhData)
			return  JSON.stringify(`${farhData}  is not a valid number but an ${dataType}`);
		}
		
	}else{
		let c = (parseInt(farhData) - 32) * (5/9)
		c  = c.toFixed(4)
		return c
	}
}


function checkYuGiOh(n) {
	let myArray = [];
	if (isNaN(n)) {
		return `invalid parameter: ${n}`
	}else{
		for (let count = 1; count <=n; count++) {
			if (count%2 == 0 && (count%3 != 0) && (count%5 != 0)) {
				myArray.push("yu");
			}else if(count%3 == 0 && (count%2 != 0) && (count%5 != 0)){
				myArray.push("gi")
			}else if(count%5 == 0 && (count%3 != 0) && (count%2 != 0)){
				myArray.push("oh")
			}else if (count%2 == 0 && count%3 == 0 && count%5 != 0) {
				myArray.push("yu-gi");
			}
			else if (count%2 == 0 && count%5 == 0 && count%3 != 0) {
				myArray.push("yu-oh");
			}
			else if (count%3 == 0 && count%5 == 0 && count%2 != 0) {
				myArray.push("gi-oh");
			}
			else if (count%2 == 0 && count%3 == 0 && count%5 == 0) {
				myArray.push("yu-gi-oh");
			}
			else{
				myArray.push(count);
			}
		}
	}
	console.log(myArray)
	return myArray
}

console.log(checkYuGiOh(10))

console.log(convertFahrToCelsius("1234"))