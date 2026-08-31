# Straightforward Python Dictionary solution

**Author:** Black_Pegasus
**Votes:** 3
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1130707/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/1130707/)

---

```
class Solution:
    def evaluate(self, s: str, knowledge: List[List[str]]) -> str:
        K = { k[0] : k[1] for k in knowledge}
        stack = []
        for ch in s:
            if ch != ')':
                stack.append(ch)
            else:
                word = []
                while stack[-1] != '(':
                    word.append(stack.pop())
                stack.pop()
                stack.append(K.get(''.join(word[::-1]), '?'))
                
        return ''.join(stack)
```