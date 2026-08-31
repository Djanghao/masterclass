# 100% and TLE solution, need cleaning | Typescript/js

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/3094479/](https://leetcode.com/problems/ugly-number-iii/solutions/3094479/)

---



# Code
```
function nthUglyNumber(n: number, a: number, b: number, c: number): number {
    // binary search
    const ab: number = Math.floor(a * b / gcd_two_num(a,b));
    const ac: number = Math.floor(a * c / gcd_two_num(a,c));
    const bc: number = Math.floor(b * c / gcd_two_num(b,c));
    const abc: number = Math.floor(a * bc / gcd_two_num(a,bc));
    const is_enough = (mid: number): boolean=>{
        const total: number = floor_div(mid,a) + floor_div(mid,b) + floor_div(mid,c) - floor_div(mid,ab) - floor_div(mid,bc) - floor_div(mid,ac) + floor_div(mid,abc);
        return total >= n;
    }
    let start: number = Math.min(a,b,c);
    // let start: number = 1;
    let end: number = 10 ** 10;
    while (start < end){
        const mid = Math.floor((start+end)/2);
        // const mid = start +  Math.floor((end-start)/2);
        if (is_enough(mid)){
            end = mid;
            continue;
        }
        start = mid + 1;
    }
    return start;


    // linear solution : TLE solution
    let count: number = 0;
    let num: number = Math.min(a,b,c);
    while (count < n){
        if (is_ugly(num, a, b, c)) count += 1;
        num += 1;
    }
    return num - 1;

};
// utils
const floor_div = (num1: number, num2: number): number => Math.floor(num1/num2);

// euclid algo, source wikipedia
// function gcd(a, b)
//     while b \u2260 0
//         t := b
//         b := a mod b
//         a := t
//     return a
const gcd_two_num = (num1: number, num2: number): number => {
    let n1: number = num1;
    let n2: number = num2;
    while (n2 !== 0){
        const temp: number = n2;
        n2 = n1 % n2;
        n1 = temp;
    }
    return n1;
}

// scuk algorthm
const greatest_div = (...args: number[]): number =>{
    if (!args) return -1;
    const min_num: number = Math.min(...args);
    for (let div = min_num; div >= 1; div -= 1){
        let count: number = args.reduce((prev_count, curr_num)=>{
            if (curr_num % div === 0){
                return prev_count+1;
            }
        }, 0)
        if (count === args.length) return div;
    }
}

const is_ugly = (num: number, a: number, b: number, c: number): boolean =>{
    return num % a === 0 || num % b === 0 || num % c === 0;
}

const ugly_before = (num: number, a: number, b: number, c: number, start_num: number): number=>{
    let count: number = 1;
    for (let i = start_num; i < num; i += 1){
        if (is_ugly(i, a, b, c)) count += 1;
    }
    return count;
}

// const all_ugly_below = (num: number, a: number, b: number, c: number): {nth: number, nth_num: number} => {
//    // return an array or nah think 
// }
```