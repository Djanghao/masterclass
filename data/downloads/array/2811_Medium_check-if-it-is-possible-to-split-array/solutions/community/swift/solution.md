# Time O(n) Space O(1) Explained

**Author:** LightMancito
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3881352/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3881352/)

---

# Intuition
The first approach if to create a dfs with a binary checking to at every step that the two conditions are true: length == 1 and sum of the sub array >= m.

# Approach
Write down an array with only one pair that the sum >= m. Once you have spawned the tree with the solution, from that pair you can see that is always possible to go up adding left and right numbers until the top.

So basically we need to look for a pair that it sum is => m. Also, the initial array is length = 2.

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
class Solution {
  func canSplitArray(_ nums: [Int], _ m: Int) -> Bool {
    if nums.count <= 2 {
      return true
    }

    for (index, num) in nums[0..<nums.count-1].enumerated() {
      if num + nums[index + 1] >= m {
        return true
      }
    }
    return false
  }
}
```