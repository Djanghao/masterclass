# [Python] Sum of Arithmetic Progression with explanation **100.00% Faster**

**Author:** Jasper-W
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/731754/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/731754/)

---

There is a ***pattern***, you will find that the ***result is the sum of arithmetic progression***.
Arithmetic progression: **t(n) = a + d(n-1)**
Sum of arithmetic progression: **s(n) = (n / 2) * (2a + d(n-1))**

In this problem, the first term(a) will be the the length of "1" and the number of terms will also be the length of "1".

The common difference(d) is **-1**.

**E.g. input is "111111"**
Then, 
**n = 6
a = 6
d = -1**
Afterthat, calculate the sum of arithmetic progression with the formula of **s(n) = (n / 2) * (2a + d(n-1))**,
Calculate step by step:  **(6-0) + (6-1) + (6-2) + (6-3) + (6-4) + (6-5) = 21**,
which is the result of this problem.

***Solution***
*100% Faster, Memory Usage less than 100.00% of Python3 online submissions.*
```
class Solution:
    def numSub(self, s: str) -> int: 
            res = 0
            s = s.split("0")

            for one in s:
                if one == "":
                    continue
                    
                n = len(one)
                temp = (n / 2)*(2*n + (n-1)*-1)
                    
                if temp >= 1000000007:
                    res += temp % 1000000007
                else:
                    res += temp
            return int(res)
```