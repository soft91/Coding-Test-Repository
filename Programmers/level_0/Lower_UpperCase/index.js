// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
	return [...my_string]
		.map((item) =>
			item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()
		)
		.join("");
}

// 문자를 하나씩 비교하면서 소문자면 대문자, 대문자면 소문자로 나오도록 값을 구함.
