# Typescript && Javascript solution

**Author:** pradhansatish53
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/3383733/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/3383733/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- Approach is similar to water level in jar. For example for i index min height will be water level / index, next index i will increase one and height value will be accumulative sum / index.
- max height will be ans for each increament value

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N) = N length of nums

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1) constast space

# Code
```
function minimizeArrayValue(nums: number[]): number {
    let ans = 0;
    let preSum = 0;

    for (let i=0; i<nums.length; i++) {
        preSum += nums[i];
        ans = Math.max(ans, Math.ceil(preSum/(i+1)))
    }

    return ans
};
```