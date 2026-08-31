# [Python] Easy readable code!

**Author:** akshit0699
**Votes:** 49
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/731558/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/731558/)

---

The example would be self explanatoy:
"0110111" can be evaluated to -->
0120123
Now if we sum up all these digits:
1+2+1+2+3 = 9 is the result!

```
class Solution(object):
    def numSub(self, s):
        res, currsum = 0,0
        for digit in s:
            if digit == '0':
                currsum = 0
            else:
                currsum += 1 
                res+=currsum 
        return res % (10**9+7)
```