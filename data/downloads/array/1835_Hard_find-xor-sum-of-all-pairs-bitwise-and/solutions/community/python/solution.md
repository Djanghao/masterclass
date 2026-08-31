# Simple python code with explanation

**Author:** thomanani
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/2724403/](https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/solutions/2724403/)

---

```
class Solution:
    #example 1 
    #result =[(1&6)^(1&5)^(2&6)^(2&5)^(3&6)^(3&5)]
                \\     /     \\    /      \\     /
    #           (1&(6^5)) ^ (2&(6^5)) ^ (3&(6^5))   
                   \\            |           /
                    \\           |          /
                     \\          |         /
                      \\         |        /
    #                  ((1^2^3) & (6^5))
    def getXORSum(self, a, b):
        x = 0 
        for i in range(len(a)):
            x = x ^ a[i]
        y = 0 
        for j in range(len(b)):
            y = y ^ b[j]
        return x & y
```