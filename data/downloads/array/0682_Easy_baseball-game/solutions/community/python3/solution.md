# Easy to Understand | Faster | Simple | Stack based | Python Solution

**Author:** Mrmagician
**Votes:** 19
**Link:** [https://leetcode.com/problems/baseball-game/solutions/607494/](https://leetcode.com/problems/baseball-game/solutions/607494/)

---

```
    def calPoints(self, ops: List[str]) -> int:
        stack = []
        s = 0
        for op in ops:
            if op == "C":
                s -= stack.pop()
            elif op == 'D':
                stack.append(2*stack[-1])
                s += stack[-1]
            elif op == "+":
                stack.append(stack[-1] + stack[-2])
                s += stack[-1]
            else:
                stack.append(int(op))
                s += stack[-1]
        return s
```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38