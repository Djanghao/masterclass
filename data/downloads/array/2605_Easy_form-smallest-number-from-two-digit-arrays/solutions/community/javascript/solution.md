# Javascript Sets & min

**Author:** mokarma
**Votes:** 2
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4014816/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/4014816/)

---

# Code
```
var minNumber = function(nums1, nums2) {
    const s1 = new Set(nums1);
    const s2 = new Set(nums2);
    for (let i = 0; i < 10; i++) {
        if (s1.has(i) && s2.has(i)) return i;
    }
    const m1 = Math.min(...nums1);
    const m2 = Math.min(...nums2);
    return +`${Math.min(m1, m2)}${Math.max(m1, m2)}`
};
```