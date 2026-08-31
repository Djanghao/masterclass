# Javascript easy solution

**Author:** niyetel
**Votes:** 36
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1362485/](https://leetcode.com/problems/build-array-from-permutation/solutions/1362485/)

---

```
var buildArray = function(nums) {
    return nums.map(a=>nums[a]);
};