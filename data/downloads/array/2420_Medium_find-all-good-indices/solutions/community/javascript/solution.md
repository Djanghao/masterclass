# Javascript | Prefix Sum Array

**Author:** HsnImam
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/2622866/](https://leetcode.com/problems/find-all-good-indices/solutions/2622866/)

---

```
var goodIndices = function(nums, k) {
    const N = nums.length;
    const nonIncreasing = Array(N).fill(1);
    for(let i = 1; i < N; i++) {
        if(nums[i] <= nums[i-1]) {
            nonIncreasing[i] = 1 + nonIncreasing[i-1];
        }
    }
    
    const nonDecreasing = Array(N).fill(1);
    for(let i = N-2; i >= 0; i--) {
        if(nums[i] <= nums[i+1]) {
            nonDecreasing[i] = 1 + nonDecreasing[i+1];
        }
    }

    const result = [];
    for(let i = k; i <= N - k; i++) {
        if(nonIncreasing[i-1] >= k && nonDecreasing[i+1] >= k) {
            result.push(i);
        }
    }
    return result;
};
```