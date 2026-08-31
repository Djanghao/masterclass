# Swift solution

**Author:** azm819
**Votes:** 1
**Link:** [https://leetcode.com/problems/bag-of-tokens/solutions/4820606/](https://leetcode.com/problems/bag-of-tokens/solutions/4820606/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func bagOfTokensScore(_ tokens: [Int], _ power: Int) -> Int {
        guard !tokens.isEmpty else { return .zero }

        let tokens = tokens.sorted()
        var power = power
        var l = 0
        var r = tokens.count
        var points = 0
        var maxPoints = 0
        while l < r {
            var wasSelected = false
            while l < r && tokens[l] <= power {
                wasSelected = true
                points += 1
                maxPoints = max(maxPoints, points)
                power -= tokens[l]
                l += 1
            }

            if points > .zero {
                r -= 1
                power += tokens[r]
                points -= 1
            } else if !wasSelected {
                break
            }
        }
        return maxPoints
    }
}
```