# Swift Solution || Beats 100 %

**Author:** santhoshpatkar
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/5965421/](https://leetcode.com/problems/k-diff-pairs-in-an-array/solutions/5965421/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func findPairs(_ nums: [Int], _ k: Int) -> Int {
        var dict: [Int: Int] = [:]
        var c = 0
        for num in nums {
            if k == 0 {
                if let count = dict[num], count > 0 { continue }
                if dict.keys.contains(num) {
                     c += 1
                     dict[num] = 1
                     continue
                }
                dict[num] = 0
                continue
            }
            if dict.keys.contains(num) { continue }
            if dict.keys.contains(num + k) { c += 1 }
            if dict.keys.contains(num - k) { c += 1 }
            dict[num] = 0
        }
        return c
    }
}
```