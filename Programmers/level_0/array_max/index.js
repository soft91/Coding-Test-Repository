// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
// array [1,8,3]

function solution(array) {
	return [Math.max(...array), array.indexOf(Math.max(...array))];
}

// Max.max에 array를 확장해서 최대값을 구하고 indexOf로 최대값의 index를 구함
