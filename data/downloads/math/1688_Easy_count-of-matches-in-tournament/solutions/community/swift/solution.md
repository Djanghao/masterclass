# [Accepted] Run time: 0ms

**Author:** natanailmanik
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-matches-in-tournament/solutions/4363887/](https://leetcode.com/problems/count-of-matches-in-tournament/solutions/4363887/)

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
    func numberOfMatches(_ n: Int) -> Int {
        var advance = n
        var totalNumber = 0
        while advance > 1 {
            totalNumber += advance / 2
            advance = advance / 2 + advance % 2
        }
         return totalNumber
    }
}
```