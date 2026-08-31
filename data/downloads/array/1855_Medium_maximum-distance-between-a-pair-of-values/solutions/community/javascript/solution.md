# JavaScript O(n) time and O(1) space, 2 pointers solution

**Author:** user4125ZI
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/1198981/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/1198981/)

---

To get the best answer we want to maximize j and minimize i, while maintaining 2 invariants:
* i <= j
* nums1[i] <= nums2[j]

This can be translated almost directly to code:

```javascript
var maxDistance = function(nums1, nums2) {
    let i = 0, j = 0;
    
    let ans = 0;
    while (i < nums1.length && j < nums2.length) {
        // maintain the i <= j invariant
        j = Math.max(j, i);
        
        // we want to maximize j so move it forward whenever possible
        while (nums1[i] <= nums2[j]) {
            ans = Math.max(ans, j - i);
            j++;
        }
        
        // we want to minimize i so move it forward only to maintain invariants
        i++;
    }
    
    return ans;
};
```