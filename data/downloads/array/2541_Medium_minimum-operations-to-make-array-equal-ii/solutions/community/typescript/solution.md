# [TypeScript] Clean and fast code (66ms, beats 100%). O(n) | O(1)

**Author:** badnewz
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/4310238/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/4310238/)

---

# Complexity
- Time complexity: $\\mathcal{O}(n)$
- Space complexity: $\\mathcal{O}(1)$

# Code
```
function minOperations(nums1: number[], nums2: number[], k: number): number {
    let s = 0, r = 0;
    for (let i = 0, n = nums1.length; i < n; i++) {
        let delta = nums1[i] - nums2[i];
        if (delta !== 0) {
            if (delta % k !== 0) return -1;
            s += delta /= k;
            if (delta > 0) r += delta;
        }
    }
    return s === 0 ? r : -1;
};
```