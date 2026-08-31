# Swift clear solution

**Author:** oldinzaghi
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/4314441/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/4314441/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func countBadPairs(_ nums: [Int]) -> Int {
        if nums.isEmpty { return 0 }
        var equalPair = 0
        var counts: [Int: Int] = [:]

        for (i, num) in nums.enumerated() {
            let diff = num - i
            equalPair += counts[diff, default:0]
            counts[diff, default: 0] += 1
        }
        let totalPairs = (nums.count * (nums.count - 1)) / 2
        return totalPairs - equalPair
    }
}
```