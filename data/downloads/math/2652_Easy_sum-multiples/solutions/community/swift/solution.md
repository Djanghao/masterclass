# ✅ O(1) | Set Overlapping Principle

**Author:** eleev
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/3817145/](https://leetcode.com/problems/sum-multiples/solutions/3817145/)

---

# Approach
**TODO**

# Time Complexity
**TODO**

# Space complexity
**TODO**

# Solution
``` swift
class Solution {
    func sumOfMultiples(_ n: Int) -> Int {
        func sum(_ x: Int) -> Int { (n / x) * (n / x + 1) / 2 * x }
        return sum(3) + sum(5) + sum(7) - sum(15) - sum(21) - sum(35) + sum(105)
    }
}

```