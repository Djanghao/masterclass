# [Javascript] Whatever another array has, just DELETE them!

**Author:** Lynn19950915
**Votes:** 40
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/1901024/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/1901024/)

---

Let's create a set of`nums1`, then **DELETE all values in**`nums2`.

> Note: No need to check if`nums1`has it, just delete them all away!

```
let ans1=new Set(nums1)
nums2.forEach(v=>{ans1.delete(v)});
let ans2=new Set(nums2);
nums1.forEach(v=>{ans2.delete(v)});    

return [[...ans1],[...ans2]];
```

Thanks for your reading and **up-voting** :)

**\u2B50 Check [HERE](https://github.com/Lynn19950915/LeetCode_King) for my full Leetcode Notes ~**
