# [Python3] greedy

**Author:** ye15
**Votes:** 33
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2422249/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2422249/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/abc9891d642b2454c148af46a140ff3497f7ce3c) for solutions of weekly 306. 

```
class Solution:
    def smallestNumber(self, pattern: str) -> str:
        ans = [1]
        for ch in pattern: 
            if ch == 'I': 
                m = ans[-1]+1
                while m in ans: m += 1
                ans.append(m)
            else: 
                ans.append(ans[-1])
                for i in range(len(ans)-1, 0, -1): 
                    if ans[i-1] == ans[i]: ans[i-1] += 1
        return ''.join(map(str, ans))
```

Following @lee215's solution
```
class Solution:
    def smallestNumber(self, pattern: str) -> str:
        ans = []
        stack = []
        for i in range(len(pattern)+1): 
            stack.append(str(i+1))
            if i == len(pattern) or pattern[i] == 'I': 
                while stack: ans.append(stack.pop())
        return ''.join(ans) 
```