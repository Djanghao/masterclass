# [Python3] 1-line

**Author:** ye15
**Votes:** 17
**Link:** [https://leetcode.com/problems/three-divisors/solutions/1375468/](https://leetcode.com/problems/three-divisors/solutions/1375468/)

---


```
class Solution:
    def isThree(self, n: int) -> bool:
        return sum(n%i == 0 for i in range(1, n+1)) == 3
```

Adding `O(N^1/4)` solution 
```
class Solution:
    def isThree(self, n: int) -> bool:
        if n == 1: return False # edge case 
        
        x = int(sqrt(n))
        if x*x != n: return False 
        
        for i in range(2, int(sqrt(x))+1): 
            if x % i == 0: return False 
        return True
```