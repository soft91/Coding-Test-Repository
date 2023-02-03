function solution(numbers, num1, num2) {
	return numbers.slice(num1, num2 + 1);
}

// 배열 numbers의 num1 부터 num2 까지의 길이. slice의 마지막의 길이는 포함하지 않기 때문에 + 1을 해줌.
