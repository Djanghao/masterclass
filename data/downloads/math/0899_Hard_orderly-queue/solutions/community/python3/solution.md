# ✔️ Python Simple and Easy Way to Solve with Explanation | 99% Faster 🔥

**Author:** pniraj657
**Votes:** 13
**Link:** [https://leetcode.com/problems/orderly-queue/solutions/2783233/](https://leetcode.com/problems/orderly-queue/solutions/2783233/)

---

**\uD83D\uDD3C IF YOU FIND THIS POST HELPFUL PLEASE UPVOTE \uD83D\uDC4D**
```
class Solution:
    def orderlyQueue(self, s: str, k: int) -> str:
        if k > 1:
            return "".join(sorted(s))
        
        res = s
        for i in range(0,len(s)):
            s = s[1:] + s[0]
            res = min(res,s)
                
        return res
```

**For Detail Explaination Refer this Blog:
https://www.python-techs.com/2022/11/orderly-queue.html**

Thank you for reading! \uD83D\uDE04 Comment if you have any questions or feedback.