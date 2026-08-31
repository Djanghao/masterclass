# Python || 98.06% Faster || Greedy Approach || O(N) Solution

**Author:** pulkit_uppal
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/2825324/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/2825324/)

---

```
class Solution:
    def maxDepthAfterSplit(self, seq: str) -> List[int]:
        ans=[]
        prev=1
        for i in seq:
            if i=='(':
                if prev==0:
                    ans.append(1)
                else:
                    ans.append(0)
            else:
                ans.append(prev)
            if prev==0:
                prev=1
            else:
                prev=0
        return ans
```

**Upvote if you like the solution or ask if there is any query**