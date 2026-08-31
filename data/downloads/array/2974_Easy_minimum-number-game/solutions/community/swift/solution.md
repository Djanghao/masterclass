# Easy swift solution

**Author:** user5275xT
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-game/solutions/4626038/](https://leetcode.com/problems/minimum-number-game/solutions/4626038/)

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
    func numberGame(_ nums: [Int]) -> [Int] {
        var sorted = nums.sorted()
        var result: [Int] = []

        while !sorted.isEmpty {
            let alice = sorted.removeFirst()
            let bob = sorted.removeFirst()

            result.append(bob)
            result.append(alice)
        }

        return result
    }
}
```