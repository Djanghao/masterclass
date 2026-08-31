# JavaScript O(n) time and space solution - quick map build trick

**Author:** user4125ZI
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/1300159/](https://leetcode.com/problems/find-anagram-mappings/solutions/1300159/)

---

With the built-in Map constructor we can easily build mapping by doing `const numToIdx = new Map(nums2.map((v, i) => [v, i]));`;

Here is the full code:

```
var anagramMappings = function(nums1, nums2) {
    const numToIdx = new Map(nums2.map((v, i) => [v, i]));
    return nums1.map(v => numToIdx.get(v));
};
```