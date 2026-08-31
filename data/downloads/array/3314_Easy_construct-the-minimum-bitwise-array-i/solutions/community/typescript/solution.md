# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5932075/](https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/5932075/)

---

Create an array ans of the same length as nums, initialized with -1 (default value if no valid ans[i] is found).

Main Loop:

For each element in nums, we try to find the smallest x such that x | (x + 1) == nums[i].
If we find such a value, we update ans[i] and break out of the loop to move to the next index.

The condition 

x | (x + 1) == nums[i] checks if the bitwise OR of x and x + 1 equals the current number in nums.

# Complexity
- Time complexity: 6ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 52.76MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function minBitwiseArray(nums: number[]): number[] {
    let ans = new Array(nums.length).fill(-1)
    
    for (let i = 0; i < nums.length; i++) {
      for (let x = 0; x < nums[i]; x++) {
        if ((x | (x + 1)) == nums[i]) {
          ans[i] = x
          break
        }
      }
    }
  return ans
};

```