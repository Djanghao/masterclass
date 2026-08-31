# JavaScript Clean Sliding Window

**Author:** control_the_narrative
**Votes:** 23
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/668961/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/668961/)

---

```javascript
var longestOnes = function(A, K) {
    let left = 0, right = 0;
    
    while(right < A.length) {
        if(A[right] === 0) K--;
        if(K < 0) {
            if(A[left] === 0) K++;
            left++;
        }
        right++;
    }
    return right-left;
};
```