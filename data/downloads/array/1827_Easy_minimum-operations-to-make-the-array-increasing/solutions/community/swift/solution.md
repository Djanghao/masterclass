# Easy to beginners (  Runtime 27 ms Beats 100.00%  Memory 15.63 MB Beats 66.67%)

**Author:** miomir84
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/5934938/](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/solutions/5934938/)

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
```swift []
class Solution {
    func minOperations(_ nums: [Int]) -> Int {
        if nums.count < 2 { return 0 }
    
    var count = 0
    var array = nums
    
    for i in 1 ..< nums.count{
        if nums[i] <= array[i - 1] {
            count += array[i - 1] + 1 - nums[i]
            array[i] = nums[i] + array[i - 1] + 1 - nums[i]}
    }
    return count
    }
}
```