# Solution in TypeScript 💯🏆✔

**Author:** ranganathv415
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-ii/solutions/5381309/](https://leetcode.com/problems/smallest-range-ii/solutions/5381309/)

---

# Intuition

The problem is to minimize the range (difference between the maximum and minimum) of an array after adjusting each element by adding or subtracting *k*. Sorting the array allows us to systematically determine the possible new minimum and maximum values after the allowed adjustments, and then find the smallest possible range.

# Approach

1. **Sort the Array**: This allows us to consider the elements in a sequential manner.
2. **Initial Range**: Calculate the initial range without any adjustments.
3. **Iterate Through the Array**: For each element, consider:
    - The possible new minimum value, which is either the smallest element increased by *k* or the current element decreased by *k*.
    - The possible new maximum value, which is either the previous element increased by *k* or the largest element decreased by *k*.
4. **Update Minimum Range**: At each step, update the minimum range with the smallest difference between the new maximum and new minimum values.
5. **Return the Minimum Range**: After iterating through all elements, return the smallest range found.

# Complexity

- **Time Complexity**: ***O(n log n)***, where *n* is the number of elements in the array, due to the sorting step.
- **Space Complexity**: ***O(1)*** for the space used, excluding the input array.

# Code

```typescript
function smallestRangeII(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    const numsSize: number = nums.length;
  
    let minRange: number = nums[numsSize - 1] - nums[0];
  
    for (let i = 1; i < numsSize; ++i) {
        const newMin: number = Math.min(nums[0] + k, nums[i] - k);
      
        const newMax: number = Math.max(nums[i - 1] + k, nums[numsSize - 1] - k);
      
        minRange = Math.min(minRange, newMax - newMin);
    }
  
    return minRange;
};

```

### Explanation of the Code

1. **Sorting the Array**: This allows us to systematically evaluate possible new ranges.
2. **Initial Range Calculation**: The initial range is simply the difference between the maximum and minimum values of the array.
3. **Iteration and Evaluation**: For each element, we calculate the potential new minimum and maximum values based on the given transformations and update the minimum range if a smaller range is found.
4. **Return the Result**: After evaluating all possible transformations, the smallest range is returned.