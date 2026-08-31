# Swift solution

**Author:** azm819
**Votes:** 2
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/5116429/](https://leetcode.com/problems/score-of-a-string/solutions/5116429/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func scoreOfString(_ s: String) -> Int {
        var result = 0
        var firstInd = s.startIndex
        var secondInd = s.index(after: firstInd)
        while secondInd != s.endIndex {
            result += abs(Int(s[firstInd].asciiValue!) - Int(s[secondInd].asciiValue!))
            firstInd = s.index(after: firstInd)
            secondInd = s.index(after: secondInd)
        }
        return result
    }
}

```