# Easy JS Solution

**Author:** hbjORbj
**Votes:** 11
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/548969/](https://leetcode.com/problems/contains-duplicate-iii/solutions/548969/)

---

```
/*
k = max size of window 
t = max diff between nums[startOfWindow] and nums[endOfWindow]

We need to find if there are i and j such that (1) their size of window is <= k and (2) their diff is <= t.
*/
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j <= i+k; j++) { // satisfies (1)
            let diff = Math.abs(nums[i] - nums[j]);
            if (diff <= t) { // satisfies (2)
                return true; 
            }
        }
    }
    return false;
    // T.C: O(N*K)
    // S.C: O(1)
};
```