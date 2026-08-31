# Count Elements Excluding Min and Max Values

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5327327/](https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements/solutions/5327327/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
First, I sorted the array in ascending order. Then, I identified the minimum and maximum values. Finally, I filtered out these extreme values and returned the count of the remaining elements.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function countElements(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let extr = [nums[0],nums[nums.length - 1]];

    let nums3 = nums.filter((nu) => extr.indexOf(nu) === -1)
    return nums3.length;
};
```