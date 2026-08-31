# Easy to understand javascript solution - O(n log n)

**Author:** jon_zawada
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1432600/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1432600/)

---

The idea here is to match the highest values of one array to the corresponding lowest values of the other. This ensures the lowest products of both arrays individual items and when added gives the smallest sum.
```
var minProductSum = function(nums1, nums2) {
    let sum = 0;
    nums1.sort((a,b) => a-b);
    nums2.sort((a,b) => b-a);
    for(let i = 0; i < nums1.length; i++) {
        sum += nums1[i] * nums2[i];
    }
    return sum;
};
```