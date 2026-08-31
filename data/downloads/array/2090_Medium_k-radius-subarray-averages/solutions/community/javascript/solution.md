# [JavaScript] Sliding Window

**Author:** stevenkinouye
**Votes:** 5
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/1599974/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/1599974/)

---

```javascript
var getAverages = function(nums, k) {
    const twoK = 2 * k;
    const windowSize = twoK + 1;
    
    const result = [...nums].fill(-1);
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i >= twoK) {
            result[i - k] = Math.floor(sum / windowSize)
            sum -= nums[i - twoK];
        }
    }
    return result;
};
```