# Sliding window with 1 single loop

**Author:** huancnttuet
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4950349/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/4950349/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sliding window with 1 single loop
<!-- Describe your approach to solving the problem. -->

    count += (Math.min(minPos, maxPos) + 1 - left);

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let count = 0;
    let minPos = -1;
    let maxPos = -1;
    let left = 0;
    for(let right = 0; right < nums.length; right++) {
        const end = nums[right];

        if(end < minK || end > maxK) {
            minPos = -1;
            maxPos = -1;
            left = right + 1;
        }

        if(end === minK) { minPos = right}
        if(end === maxK) { maxPos = right}

        if(minPos !== -1 && maxPos !== -1) {
            count += (Math.min(minPos, maxPos) + 1 - left);
        }
    }

    return count;
};


```