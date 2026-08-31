# [Python3] enumerate k-symmetric numbers

**Author:** ye15
**Votes:** 49
**Link:** [https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/1589048/](https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/1589048/)

---

Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/b5ca73e6f7d317e9f30f7e67a499b0bf489ec019) for the solutions of weekly 268. 

```
class Solution:
    def kMirror(self, k: int, n: int) -> int:
        
        def fn(x):
            """Return next k-symmetric number."""
            n = len(x)//2
            for i in range(n, len(x)): 
                if int(x[i])+1 < k: 
                    x[i] = x[~i] = str(int(x[i])+1)
                    for ii in range(n, i): x[ii] = x[~ii] = '0'
                    return x
            return ["1"] + ["0"]*(len(x)-1) + ["1"]
                
        x = ["0"]
        ans = 0
        for _ in range(n): 
            while True: 
                x = fn(x)
                val = int("".join(x), k)
                if str(val)[::-1] == str(val): break
            ans += val
        return ans 
```