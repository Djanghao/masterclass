# [Python3] bfs

**Author:** ye15
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/794275/](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/solutions/794275/)

---

Think of this problem as a tree in which we start from the root `n`. At any node, it connects to up to 3 childrens `n-1`, `n//2` if `n%2 == 0`, `n//3` if `n%3 == 0`. Then we can level order traverse the tree and find the first occurrence of `0` and return its level. 

```
class Solution:
    def minDays(self, n: int) -> int:
        ans = 0
        queue = [n]
        seen = set()
        while queue: #bfs 
            newq = []
            for x in queue: 
                if x == 0: return ans 
                seen.add(x)
                if x-1 not in seen: newq.append(x-1)
                if x % 2 == 0 and x//2 not in seen: newq.append(x//2)
                if x % 3 == 0 and x//3 not in seen: newq.append(x//3)
            ans += 1
            queue = newq 
```
	
Edit: It turns out that dp also works for this problem per this [post](https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/discuss/794162/C%2B%2BJavaPython-5-lines). 
	
```
class Solution:
    def minDays(self, n: int) -> int:
        
        @lru_cache(None)
        def fn(n):
            if n <= 1: return n
            return 1 + min(n%2 + fn(n//2), n%3 + fn(n//3))
        
        return fn(n)
```