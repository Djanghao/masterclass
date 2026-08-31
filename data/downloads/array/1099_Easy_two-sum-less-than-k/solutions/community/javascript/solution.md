# Intuitive JavaScript Solution

**Author:** hbjORbj
**Votes:** 4
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/526571/](https://leetcode.com/problems/two-sum-less-than-k/solutions/526571/)

---

```
var twoSumLessThanK = function(A, K) {
    let max = -1;
    for (i = 0; i < A.length-1; i++) {
        for (j = i+1; j < A.length; j++) {
            let sum = A[i] + A[j];
            if (sum > max && sum < K) max = sum;
        }
    }
    return max;
};
```