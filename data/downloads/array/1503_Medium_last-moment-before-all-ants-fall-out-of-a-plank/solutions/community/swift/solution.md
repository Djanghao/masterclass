# 1503. Swift Solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/solutions/4247900/](https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/solutions/4247900/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func getLastMoment(_ n: Int, _ left: [Int], _ right: [Int]) -> Int {
        max(
            left.max() ?? .zero,
            right.map { n - $0 }.max() ?? .zero
        )
    }
}
```