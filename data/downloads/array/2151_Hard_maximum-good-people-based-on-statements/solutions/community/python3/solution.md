# Bitmasking Video Solution

**Author:** cheatcode-ninja
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/2715394/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/2715394/)

---

For the full video, you can check out this [Youtube video]( https://youtu.be/v7sr-1Zbh6k) 

Since `n<=15` we can brute force our solution and generate all possibilities of good / bad people of our group.
Then for each of those arrangement we will verify if there are no contradictions. 
If there are no contradictions then we will count the `1` bit. 
That is the number of good people. 

```
class Solution:        
    def maximumGood(self, statements: List[List[int]]) -> int:
        
        n = len(statements)
        res = 0
        
        def checkGood(person, mask):
            if (mask>>person) & 1:
                return True
            return False
        
        def validateStatement(mask):
            for i in range(n):
                if checkGood(i, mask):
                    for j in range(n):
                        statement = statements[i][j]
                        
                        if (statement==0 and checkGood(j, mask)) or (statement==1 and not checkGood(j, mask)):
                            return False
            return True
        
        for i in range(1,1<<n): 
            if validateStatement(i):
                res = max(res, bin(i).count('1'))
        return res
```