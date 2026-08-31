# Python easy to understand solution

**Author:** OldCodingFarmer
**Votes:** 66
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/17746/](https://leetcode.com/problems/multiply-strings/solutions/17746/)

---

```
class Solution(object):
    def multiply(self, num1, num2):
        res = [0] * (len(num1)+len(num2))
        for i in range(len(num1)-1, -1, -1):
            carry = 0
            for j in range(len(num2)-1, -1, -1):
                tmp = (ord(num1[i])-ord('0'))*(ord(num2[j])-ord('0')) + carry
                carry = (res[i+j+1]+tmp) // 10
                res[i+j+1] = (res[i+j+1]+tmp) % 10
            res[i] += carry
        res = ''.join(map(str, res))
        return '0' if not res.lstrip('0') else res.lstrip('0')
```