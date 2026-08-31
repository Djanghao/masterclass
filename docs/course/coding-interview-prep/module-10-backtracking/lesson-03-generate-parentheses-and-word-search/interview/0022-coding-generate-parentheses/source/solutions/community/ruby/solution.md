# Simple ruby solution using backtracking

**Author:** divyad25
**Votes:** 7
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/413718/](https://leetcode.com/problems/generate-parentheses/solutions/413718/)

---

```
def generate_parenthesis(n)
  @res = []
  backtrack("", 0, 0, n)
  @res
end

def backtrack(curr, open, close, n)
  @res << curr and return if curr.length == n*2
  backtrack(curr+'(', open+1, close, n) if open < n
  backtrack(curr+')', open, close+1, n) if close < open
end
```