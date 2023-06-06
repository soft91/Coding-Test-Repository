function solution(name, yearning, photo) {
	var answer = [];
	let obj = [];

	name.forEach((item, index) => {
		obj.push({
			name: item,
			yearning: yearning[index],
		});
	});

	photo.forEach((arr) => {
		let sum = 0;
		arr.forEach((item) => {
			const foundPoint = obj.find((p) => p.name === item);
			if (foundPoint) {
				sum += foundPoint.yearning;
			}
		});

		answer.push(sum);
	});

	return answer;
}
