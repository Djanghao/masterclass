# Typescript solution: easy map

**Author:** alexgavrilov
**Votes:** 38
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/2954633/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/2954633/)

---

# Code
```
function runningSum(nums: number[]): number[] {
     let result: number = 0;
     return nums.map(item => result += item);
};
```