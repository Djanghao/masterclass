# typescript

**Author:** sameer143
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1345837/](https://leetcode.com/problems/build-array-from-permutation/solutions/1345837/)

---

```
function buildArray(nums: number[]): number[] {
    let ans = [];
    for(let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
};
```