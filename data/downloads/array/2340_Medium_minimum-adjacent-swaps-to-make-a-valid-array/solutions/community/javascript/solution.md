# Minimizing Swaps for Array Sorting (JavaScript)

**Author:** jjcazel
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/4907399/](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/4907399/)

---

# Intuition
The key insight is that to form a valid array, the smallest and largest elements need to be at the leftmost and rightmost positions, respectively. Instead of performing swaps, we calculate the distances these elements need to move, considering their initial positions.

# Approach
- Identify the smallest and largest elements in the array.
- Calculate the positions of the smallest (first occurrence) and largest elements (last occurrence).
- Determine the total swaps needed for both elements to reach their target positions, adjusting the count if the smallest element's initial position overlaps with the path of the largest element.

# Complexity
- Time complexity:
O(n): The time complexity is linear with respect to the array's length. This efficiency arises from the solution directly calculating the number of swaps without actually performing them. The methods Math.max(), Math.min(), indexOf(), and lastIndexOf() each traverse the array once, contributing to a linear time complexity.
- Space complexity:
O(1): The space complexity is constant, as the solution uses a fixed amount of extra space regardless of the input size. The variables maxNum, minNum, minIdx, maxIdx, and swaps do not depend on the size of the input array, making this solution extremely space-efficient.

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) time and O(1) space
function minimumSwaps(nums) {
  if (nums.length < 2) return 0; // this is not really needed but speeds up the execution time for some reason...
  const maxNum = Math.max(...nums);
  const minNum = Math.min(...nums);

  const minIdx = nums.indexOf(minNum);
  const maxIdx = nums.lastIndexOf(maxNum);


  let swaps = 0;

  swaps += nums.length - maxIdx - 1;
  swaps += minIdx;

  if (minIdx > maxIdx) {
    swaps--;
  }

  return swaps;
};
```