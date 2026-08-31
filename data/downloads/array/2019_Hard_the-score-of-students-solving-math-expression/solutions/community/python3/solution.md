# [Python3] somewhat dp

**Author:** ye15
**Votes:** 6
**Link:** [https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1487285/](https://leetcode.com/problems/the-score-of-students-solving-math-expression/solutions/1487285/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/fa0bb65b4cb428452e2b4192ad53e56393b8fb8d) for solutions of weekly 260. 
```
class Solution:
    def scoreOfStudents(self, s: str, answers: List[int]) -> int:
        
        @cache
        def fn(lo, hi): 
            """Return possible answers of s[lo:hi]."""
            if lo+1 == hi: return {int(s[lo])}
            ans = set()
            for mid in range(lo+1, hi, 2): 
                for x in fn(lo, mid): 
                    for y in fn(mid+1, hi): 
                        if s[mid] == "+" and x + y <= 1000: ans.add(x + y)
                        elif s[mid] == "*" and x * y <= 1000: ans.add(x * y)
            return ans 
                
        target = eval(s)
        cand = fn(0, len(s))
        ans = 0 
        for x in answers: 
            if x == target: ans += 5
            elif x in cand: ans += 2
        return ans 
```