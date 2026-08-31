# Using built in functions, beats 97.13% runtimes

**Author:** AthenaCode
**Votes:** 4
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/2893999/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/2893999/)

---



# Code
```
function average(salary: number[]): number {
  
    let x: number[] = salary.sort((a, b) => a - b).slice(1, -1);
    return x.reduce((a, b) => a + b)/x.length;

};
```