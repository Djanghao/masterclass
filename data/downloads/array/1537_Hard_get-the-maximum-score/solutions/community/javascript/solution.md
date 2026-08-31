# [Javascript] DP problem O(M+N)

**Author:** alanchanghsnu
**Votes:** 7
**Link:** [https://leetcode.com/problems/get-the-maximum-score/solutions/767913/](https://leetcode.com/problems/get-the-maximum-score/solutions/767913/)

---

```
var maxSum = function(nums1, nums2) {
    let i = 0, j = 0;
    let res1 = 0, res2 = 0;
    const MAX = 10**9 + 7;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            const max = Math.max(res1, res2);
            res1 = max + nums1[i++];
            res2 = max + nums2[j++];
        } else if (nums1[i] < nums2[j]) {
            res1 += nums1[i++];
        } else {
            res2 += nums2[j++];
        }
    }
    
    while (i < nums1.length) {
        res1 += nums1[i++];
    }
    
    while (j < nums2.length) {
        res2 += nums2[j++];
    }
    
    return Math.max(res1, res2) % MAX;
};