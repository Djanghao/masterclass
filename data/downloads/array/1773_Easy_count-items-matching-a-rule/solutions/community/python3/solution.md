# Python 3 | 2-liner | Explanation

**Author:** idontknoooo
**Votes:** 72
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/1085906/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/1085906/)

---

### Explanation
- Create a dict `{ruleKey: index_of_rulekey}`
- Filter out items that satisfy the condition

### Implementation
```
class Solution:
    def countMatches(self, items: List[List[str]], ruleKey: str, ruleValue: str) -> int:
        d = {'type': 0, 'color': 1, 'name': 2}
        return sum(1 for item in items if item[d[ruleKey]] == ruleValue)
```