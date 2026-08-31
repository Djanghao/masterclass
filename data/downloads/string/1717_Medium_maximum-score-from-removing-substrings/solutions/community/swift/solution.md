# Swift

**Author:** pagafan7as
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463512/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463512/)

---

# Code
```
class Solution {
    func maximumGain(_ s: String, _ x: Int, _ y: Int) -> Int {
        var res = 0
        var s = Array(s)
    
        // Prefer the higher scoring pattern.
        for (pattern, gain) in [("ab", x), ("ba", y)].sorted { $0.1 > $1.1 } {
            var stack = [Character]()

            // Remove all substrings with "pattern".
            for c in s {
                stack.append(c)
                if String(stack.suffix(2)) == pattern {
                    res += gain
                    stack.removeLast(2)
                }
            }

            s = stack
        }

        return res
    }
}
```