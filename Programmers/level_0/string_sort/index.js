//영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string) {
	return Array.from(my_string.toLowerCase()).sort().join("");
}

// Array.from으로 문자열 배열을 만들고 my_string으로 소문자로 만든다음 정렬과 join으로 결과값 도출
