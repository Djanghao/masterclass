# Python easy to understand concise solution with memorization

**Author:** OldCodingFarmer
**Votes:** 309
**Link:** [https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/66419/](https://leetcode.com/problems/different-ways-to-add-parentheses/solutions/66419/)

---

```
class Solution(object):
    def diffWaysToCompute(self, input):
        m = {}
        return self.dfs(input, m)
        
    def dfs(self, input, m):
        if input in m:
            return m[input]
        if input.isdigit():
            m[input] = int(input)
            return [int(input)]
        ret = []
        for i, c in enumerate(input):
            if c in "+-*":
                l = self.diffWaysToCompute(input[:i])
                r = self.diffWaysToCompute(input[i+1:])
                ret.extend(eval(str(x)+c+str(y)) for x in l for y in r)
        m[input] = ret
        return ret
```