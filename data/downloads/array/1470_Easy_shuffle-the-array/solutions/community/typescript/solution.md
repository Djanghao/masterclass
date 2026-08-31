# Easy TypeScript || JavaScript solution.

**Author:** HasibulHasanTushar
**Votes:** 2
**Link:** [https://leetcode.com/problems/shuffle-the-array/solutions/3150164/](https://leetcode.com/problems/shuffle-the-array/solutions/3150164/)

---


# Code
```
function shuffle(nums: number[], n: number): number[] {
    let result : number[] = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[n + i]);
    }

    return result;
};
```