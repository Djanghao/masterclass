# Easy solution in swift

**Author:** yadavharish247
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/4085637/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/4085637/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minimumDeletions(_ nums: [Int]) -> Int {

    guard nums.count > 2 else {
        return nums.count
    }
    
    let minIndex = nums.firstIndex(of: nums.min()!)!
    let maxIndex = nums.firstIndex(of: nums.max()!)!
    
    // Calculate the number of deletions to remove the minimum and maximum elements.
    // It can be either removing elements before the minimum and after the maximum
    // or removing elements after the minimum and before the maximum, whichever is smaller.
    let l = min(minIndex, maxIndex)
    let r = max(minIndex, maxIndex)
    
    return min(r + 1, nums.count - l, l + 1 + nums.count - r)
        
    }
}
```