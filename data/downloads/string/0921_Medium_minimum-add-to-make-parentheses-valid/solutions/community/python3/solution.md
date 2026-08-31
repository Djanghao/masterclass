# 2 solutions | Easy to Understand | Faster | Simple | Python Solution

**Author:** Mrmagician
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/571742/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/571742/)

---

```
    def without_stack(self, S):
        opening = count = 0
        for i in S:
            if i == '(': 
                opening += 1
            else:
                if opening: opening -= 1
                else: count += 1
        return count + opening
        
    def using_stack(self, S):
        stack = []
        for ch in S:
            if ch == '(': stack.append(ch)
            else:
                if len(stack) and stack[-1] == '(': stack.pop()
                else: stack.append(ch)
        return len(stack)
```

**I hope that you've found the solution useful.**
*In that case, please do upvote and encourage me to on my quest to document all leetcode problems\uD83D\uDE03*
PS: Search for **mrmagician** tag in the discussion, if I have solved it, You will find it there\uD83D\uDE38