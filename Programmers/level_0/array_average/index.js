function solution(numbers) {
	var answer =
		numbers.reduce((acc, cur, idx) => {
			return (acc += cur);
		}, 0) / numbers.length;
	return answer;
}

// reduce는 배열의 합을 구함.
