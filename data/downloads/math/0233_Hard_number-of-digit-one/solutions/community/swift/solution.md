# Simple Swift without DP solution

**Author:** kushaltyagi
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/5115325/](https://leetcode.com/problems/number-of-digit-one/solutions/5115325/)

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
    func countDigitOne(_ n: Int) -> Int {
        var count = 0
        var digit = 1
        while digit <= n {
            var before = n / digit
            var after = n % digit
            count += (before + 8) / 10 * digit
            if(before % 10 == 1){
                count += after + 1
            }
            digit *= 10
        }
        return count
    }
}
```