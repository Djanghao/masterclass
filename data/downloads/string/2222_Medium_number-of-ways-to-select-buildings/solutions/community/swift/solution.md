# Easy to understand solution.

**Author:** raihan49
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/5855374/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/5855374/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Count only 010 and 101.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```swift []
class Solution {
    func numberOfWays(_ s: String) -> Int {
        var ways = 0
        var zero = 0
        var one = 0
        var zeroOne = 0
        var oneZero = 0

        for c in s {
            if c == Character("0") {
                zero += 1
                oneZero += one // Count in '10'.
                ways += zeroOne // Count in '010'.
            } else {
                one += 1
                zeroOne += zero // Count in '01'.
                ways += oneZero // Count in '101'.
            }
        }
        return ways
    }
}
```