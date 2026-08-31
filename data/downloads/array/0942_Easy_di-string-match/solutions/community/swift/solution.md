# Runtime  0 ms Beats 100.00%

**Author:** miomir84
**Votes:** 0
**Link:** [https://leetcode.com/problems/di-string-match/solutions/6040050/](https://leetcode.com/problems/di-string-match/solutions/6040050/)

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
    func diStringMatch(_ s: String) -> [Int] {
         var perm: [Int] = []
        var min = 0, max = s.count
        
        for char in s {
            if char == Character("I") {
                perm.append(min)
                min += 1
            } else {
                perm.append(max)
                max -= 1
            }
        }
        s.last == Character("I") ? perm.append(min) : perm.append(max)

        return perm
    }
}
```