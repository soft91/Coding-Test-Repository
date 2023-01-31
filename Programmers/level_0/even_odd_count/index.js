function solution(num_list) {
	const even = num_list.filter((item) => item % 2 === 0).length;
	return [even, num_list.length - even];
}

// 처음 짝수의 개수를 구하고 마지막에 num_list의 길이에서 짝수의 길이를 뻄
