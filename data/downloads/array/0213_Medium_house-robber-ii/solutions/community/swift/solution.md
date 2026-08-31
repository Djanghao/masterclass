# Using House Robber 1

**Author:** sarathwaits
**Votes:** 1
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/4601139/](https://leetcode.com/problems/house-robber-ii/solutions/4601139/)

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
    func rob(_ nums: [Int]) -> Int {
        if nums.count == 1 { return nums.first! }
        return max(maxRob(Array(nums[0..<nums.count - 1])), maxRob(Array(nums[1...])))
    }
    func maxRob(_ nums: [Int]) -> Int {
        print(nums)
        var firstRob = 0
        var secondRob = 0
        for (index, num) in nums.enumerated() {
            let temp = secondRob
            secondRob = max(firstRob + num, secondRob)
            firstRob = temp
        }
        return secondRob
    }
}
```