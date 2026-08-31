# [Python3] Concise iterative solution using stack

**Author:** yuanzhi247012
**Votes:** 110
**Link:** [https://leetcode.com/problems/brace-expansion-ii/solutions/322002/](https://leetcode.com/problems/brace-expansion-ii/solutions/322002/)

---

Use stack for "{" and "}" just like in calculator.
Maintain two lists:
1. the previous list before ","
2. the current list that is still growing

When seeing an "alphabet", grow the second list by corss multiplying. So that [a]\\*b will become "ab", [a,c]\\*b will become ["ab", "cb"]
When seeing "," it means the second list can't grow anymore. Combine it with the first list and clear the second list.
When seeing "{", push the two lists into stack, 
When seeing "}", pop the previous two lists, cross multiplying the result inside "{ }" into the second list.

If not considering the final sorting before return, the time complexity should be O(n)

```
class Solution:
    def braceExpansionII(self, expression: str) -> List[str]:
        stack,res,cur=[],[],[]
        for i in range(len(expression)):
            v=expression[i]
            if v.isalpha():
                cur=[c+v for c in cur or ['']]
            elif v=='{':
                stack.append(res)
                stack.append(cur)
                res,cur=[],[]
            elif v=='}':
                pre=stack.pop()
                preRes=stack.pop()
                cur=[p+c for c in res+cur for p in pre or ['']]
                res=preRes
            elif v==',':
                res+=cur
                cur=[]
        return sorted(set(res+cur))
```