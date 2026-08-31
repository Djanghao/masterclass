# [JavaScript] Sliding Window Solution - faster than 79.55%

**Author:** mafi020
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/1354915/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/1354915/)

---

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = (nums, k, threshold) => {
    let count = 0, windowSize = 0, windowSum = 0;
    for(let i = 0; i < nums.length + 1; i++){
        if(windowSize === k){
            if(windowSum / k >= threshold) count++;
            windowSum -= nums[i - k];
            windowSize--;
        }
        windowSum += nums[i];
        windowSize++;
    }
    return count;
};
```