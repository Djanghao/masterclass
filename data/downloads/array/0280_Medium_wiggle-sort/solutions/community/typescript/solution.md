# Intuitive swapping with flag

**Author:** doanhaiyu
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/5047555/](https://leetcode.com/problems/wiggle-sort/solutions/5047555/)

---

# Intuition
Swap if needed as we go

# Approach
Swap if needed as we go

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 Do not return anything, modify nums in-place instead.
 */
function wiggleSort(nums: number[]): void {
    let i = 0;
    let j = 1;
    let flag = false;
    while (j < nums.length) {
        if (nums[i] >= nums[j] && !flag) {
            swap(i, j, nums);
        } else if (nums[i] <= nums[j] && flag) {
            swap(i, j, nums);
        }
        flag = !flag;
        i++;
        j++;
    }
 };

 function swap(i: number, j: number, nums: number[]) {
    let tmp = 0;
    tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
 }
```