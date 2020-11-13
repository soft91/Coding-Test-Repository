// 프로그래머스 해쉬 함수 1번 문제.
// https://programmers.co.kr/learn/courses/30/parts/12077

// participant	                            completion	                    return
// [leo, kiki, eden]	                    [eden, kiki]                     leo
// [marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola] vinko
// [mislav, stanko, mislav, ana]	        [stanko, ana, mislav]            mislav

function solution() {
    let participant = ['leo', 'kiki', 'eden'];
    let completion  = ['eden', 'kiki'];

    participant.sort();
    completion.sort();
    
    let answer = participant.find((e, i) => e != completion[i]);
    console.log(answer);
    return answer;
}

solution();