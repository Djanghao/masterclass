# O(n) clear solution - pivot point approach | TypeScript

**Author:** PolYarik
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4056199/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/4056199/)

---

# Approach
The approach is just to find the pivot point around which the array is rotated
(and return -1 if it doesn't exist)

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```typescript
function minimumRightShifts(nums: number[]) {
  const numsCount = nums.length;
  let pivot = numsCount;

  for (let i = 1; i < numsCount; i++) {
    if (nums[i] < nums[i - 1]) {
      if (pivot !== numsCount) return -1; // can't be sorted
      pivot = i;
    }
  }

  if (pivot === numsCount) return 0; // already sorted

  return nums.at(-1)! < nums[0] ? numsCount - pivot : -1;
}
```