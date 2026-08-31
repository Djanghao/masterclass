# Two Liner solution | JS

**Author:** Mohd-Tazammul
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2202047/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2202047/)

---

```
var kthLargestNumber = function(nums, k) {
     nums.sort((a,b)=> BigInt(a)<BigInt(b) ? 1 :  BigInt(a)>BigInt(b) ? -1 : 0 );
    return nums[k-1]
};
```