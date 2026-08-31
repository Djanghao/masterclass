# Python Easy to understand

**Author:** alexl5311
**Votes:** 10
**Link:** [https://leetcode.com/problems/self-dividing-numbers/solutions/1908687/](https://leetcode.com/problems/self-dividing-numbers/solutions/1908687/)

---

# Algorithm:
We first define a function that checks if the number is a self-dividng number (if it is divisble by each of its digits). If yes, then we add it to a resultant list. 

Time complexity: O(n) where n is the number of numbers between *left* and *right* inclusive (including *left* and *right*)
Space complexity: O(n) where n is the number of numbers between *left* and *right* inclusive (including *left* and *right*)


```
class Solution(object):
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
        def divisible(n):
            for d in str(n):
                if d == '0' or n % int(d) > 0:
                    return False
            return True
        
        res = []
        for n in range(left, right + 1):
            if divisible(n):
                res.append(n)
        return res
```

**If you liked this, please upvote to support me!**