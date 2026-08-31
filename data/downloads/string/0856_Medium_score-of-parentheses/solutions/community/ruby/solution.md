# [Ruby] O(n)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/score-of-parentheses/solutions/1081307/](https://leetcode.com/problems/score-of-parentheses/solutions/1081307/)

---

```
# @param {String} s
# @return {Integer}
def score_of_parentheses(s)
  stack = []
  current = 0
  
  s.each_char do |char|
    if char == '('
      stack << current
      current = 0
    else
      current += stack.pop + [current, 1].max
    end
  end
  
  current
end
```