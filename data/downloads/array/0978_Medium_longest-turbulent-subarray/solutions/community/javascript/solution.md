# JavaScript Solution - DP Approach

**Author:** Deadication
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-turbulent-subarray/solutions/787970/](https://leetcode.com/problems/longest-turbulent-subarray/solutions/787970/)

---

The way I approached the problem is to think of it like a variant of Kadane's Algorithm. I reset the `oddTurb`'s and `evenTurb`'s length whenever it didn't meet the definitions described in the question.

```
var maxTurbulenceSize = function(A) {
    let oddTurb = 1;  /* turbulent if A[k] < A[k+1] when k is even, and A[k] < A[k+1] when k is even */
    let evenTurb = 1; /* turbulent if A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd */
    let maxLen = 1;
    
    for (let k = 0; k < A.length - 1; k++) {
        if (k % 2 == 1) { // when k is odd
            oddTurb = (A[k] > A[k + 1]) ? oddTurb + 1 : 1;
            evenTurb = (A[k] < A[k + 1]) ? evenTurb + 1 : 1;
        }
        else { // when k is even
            evenTurb = (A[k] > A[k + 1]) ? evenTurb + 1 : 1;
            oddTurb = (A[k] < A[k + 1]) ? oddTurb + 1 : 1;
        }
        
        maxLen = Math.max(maxLen, oddTurb, evenTurb);
    }
    
    return maxLen;
};
```