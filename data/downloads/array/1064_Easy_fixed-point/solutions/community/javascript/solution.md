# [Binary Search] O(log(n)) JS Solution

**Author:** hbjORbj
**Votes:** 1
**Link:** [https://leetcode.com/problems/fixed-point/solutions/935311/](https://leetcode.com/problems/fixed-point/solutions/935311/)

---

```
var fixedPoint = function(A) {
    let low = 0, high = A.length - 1, mid;
    let res = -1;
    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        if (A[mid] === mid) {
            res = mid;
            high = mid - 1; // check if there is a smaller fixed point
        } else if (A[mid] < mid) { // value smaller than index meaning that A[0..mid-1] are also smaller than their indices so search the right half
            low = mid + 1;
        } else { // value greater than index meaning that A[mid+1] are also greater than their indices so search the left half
            high = mid - 1;
        }
    }
    return res;
    // Time Complexity: O(log(n))
    // Space Complexity: O(1)
};
```