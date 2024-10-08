// // 자바스크립트는 위에서부터 시작함.
// /*세미콜론 안 붙여도 올라감.
// 여러 줄 주석*/
// //ES6, ECMA 2015 : 모던 자바스크립트(현재 사용하고 있는 문법)
// //예전 버전 자바스크립트에서는 변수를 let로 선언했었음. (let, const와 혼용하지 않는 것이 좋음)
// console.log('start java script');
// document.write('안녕!');

// // 변수란 자료, 데이터, 값을 담는 그릇. 변수 별 이름을 지을 수 있음.
// // let 변수 이름 =  정의할 값;
// let a = 100;
// // 변수를 한 번 정하면 그 변수에 다른 값을 넣어줄 수 있다. 마지막으로 넣은 값이 출력됨.
// a = 200;
// /*상수 : 변하지 않는 값, 변하면 안 되는 값, 새로 값을 넣을 수 없음. 
// 변할 필요가 없는 값은 const를 사용하는 게 좋음.
//  기본적으로 const를 사용하고, 변할 가능성이 있는 경우에만 let을 쓰는 것이 좋음*/

// const b = 300; 
// const c = '안녕';
// console.log(typeof c); //속성의 타입을 알아내는 법
// console.log(true); //boolean
// console.log(false);
// console.log(10 < 1); //false
// // undefined(정의되지 않음), null(값이 없음), NaN(숫자가 아닐 때) --> false(boolean)

// // 배열: 연관있는 것들의 그룹
// const d = []; //빈 배열, 요소들을 포함할 수 있음
// d[1] = 10; //index, 0부터 시작 //요소
// d[2] = 20;
// d[3] = 30;

// //객체는 .으로 접근할 수 있음
// console.log(d.length); //요소의 길이 출력

// const e = ['a','b',100, 300]; //배열을 만들면서 값도 채워 넣기, 다른 데이터 형식을 넣을 수 있음
// console.log(e);
// console.log(e[0]); //배열의 특정 원소에 접근하기
// console.log(e[e.length-1]); //배열의 마지막 원소에 접근하기

// const f = ['a','b',[1,2,3]]//배열 안에 배열 넣기
// console.log(f);

// // 배열을 조작하기
// const g = [1,2,3,4,5];
// // g.push('육'); //원소 채워넣기
// const p1 = g.push('육'); //채워넣은 원소까지 합쳐서 배열의 길이 출력하기
// console.log(g);

// g.pop(); //원소 빼기
// console.log(g); 

// const p2 = g.pop(); //빠진 값(실행 결과) 출력하기
// console.log(p2);
 
// // 첫번째 값 추가 unshif();
// g.unshift('영');
// console.log(g);

// // 첫번째 값 삭제  shift();
// g.shift();
// console.log(g);

// //연산자
// const aa = 100;
// const bb = 200;
// const cc = aa + bb;
// console.log(cc);

// console.log(aa + bb);
// console.log(aa - bb);
// console.log(aa * bb);
// console.log(aa / bb);

// // 연산자 축약형
// let aaa = 10;
// aaa++; //aaa = aaa + 1
// console.log(aaa);

// aaa--; //aaa = aaa - 1
// console.log(aaa);

// aaa += 10; //aaa = aaa + 1
// console.log(aaa);

// const o = true;
// console.log(!o); //부정 연산자 !

// console.log(aa > 20 && bb > 100); //그리고 &&
// console.log(aa > 200 || bb > 100); // 또는 ||

// const q = 1;
// const w ='1';
// console.log(q == w); // 같다 ==
// console.log(q != w); // 같지 않다 !=

// console.log(q === w); // 더 엄격하게 비교, 같다 ===
// console.log(q !== w); // 더 엄격하게 비교, 같지 않다 !==

// 템플릿 문자열

// const age = 23;
// const myname = 'riwon';
// const h1 = 'hi my name is ' + myname + '. and I am ' + age + 'years old.'
// console.log(h1);

// const age = 23;
// const myname = 'riwon';
// const h1 = `hi my name is ${myname}. and I'm ${age} years old.`
// console.log(h1);

// 조건문

