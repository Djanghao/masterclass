# [TypeScript] Sliding Window

**Author:** yfyau
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4112045/](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4112045/)

---

# Code
```
function minSizeSubarray(nums: number[], target: number): number {
    const n = nums.length;
        
    let total = 0;
    for (const n of nums) {
        total += n;
    }
    
    const repeat = Math.floor(target / total);
    const repeatLen = nums.length * repeat;
    
    target = target % total;
    
    let subLen = Infinity;
    let currentSum = 0;
    // Double the array to simulate the scenario of [...items_end_a1, ...items_start_a2]
    // e.g. nums = [1,2,3] so we may takes [3,1]
    for (let left = 0, right = 0; right < 2 * n; right++) {
        currentSum += nums[right % n];

        while (currentSum > target) {
            currentSum -= nums[left % n];
            left++;
        }
        
        if (currentSum === target) {
            subLen = Math.min(subLen, right - left + 1);
        }
    }

    return subLen !== Infinity ? subLen + repeatLen : -1;
};
```