# O(n) solution simple

**Author:** abhiraj
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/5633523/](https://leetcode.com/problems/minimum-cost-to-make-all-characters-equal/solutions/5633523/)

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
    func minimumCost(_ s: String) -> Int {
        let string = Array(s)
        var prev = string[0]
        if string.count == 1 {
            return 0
        }

        var nextInverted = false
        var result = 0
        for i in 1..<string.count {
            var current = string[i]
            if nextInverted {
                if current == "1" {
                    current = "0"
                }
                else {
                    current = "1"
                }
            }

            if prev != current {
                let left = i
                let right = string.count - i
                if left <= right {
                    result += left
                    prev = current
                }else {
                    result += right
                    nextInverted = !nextInverted
                }
            }
        }
        return result
    }
}


/// 0 1 0 1 0 1
/// 1 1 0 1 0 1  - 1
/// 0 0 0 1 0 1  - 3
/// 0 0 0 0 1 0  - 6
/// 0 0 0 0 0 1 - 8
//  0 0 0 0 0 0 - 9
```