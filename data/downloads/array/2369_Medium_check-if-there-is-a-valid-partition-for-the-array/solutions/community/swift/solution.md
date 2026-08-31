# Swift | Space optimized DP Solution

**Author:** VladimirTheLeet
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3905077/](https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/solutions/3905077/)

---

# Approach
For each index $i$ in `nums` determine whether `nums[i]` can be the final element of a subarray by checking if any of the conditions holds:
1. `nums[i-2]` can be the subarray end, and `nums[i-1]` equals `nums[i]`
2. `nums[i-3]` can be the subarray end, and `nums[i-2], nums[i-1], nums[i]` are equal or increasing by 1

If there happens to be 3 or more consecutive indexes that cannot be subarray end, the partition in that place is impossible, so  return `false`.

Otherwise, return found value for last index in `nums`.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $\\Theta(1)$

# Code
```
class Solution {
    func validPartition(_ nums: [Int]) -> Bool
    {
        var canBeSubarrayEnd = [false, false, true]
        for (i, num) in nums.enumerated()
        {
            canBeSubarrayEnd[i % 3] = (canBeSubarrayEnd[(i+1) % 3] && nums[i-1] == num) ||
                ( canBeSubarrayEnd[i % 3] &&
                  ((nums[i-2] == nums[i-1] && nums[i-1] == num) ||
                  (nums[i-2] + 1 == nums[i-1] && nums[i-1] + 1 == num)) )
            if canBeSubarrayEnd == [false, false, false] { return false }
        }
        return canBeSubarrayEnd[(nums.count-1) % 3]
    }
}
```