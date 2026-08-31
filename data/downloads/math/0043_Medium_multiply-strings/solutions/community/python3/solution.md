# Easy Python Solution without Using Dictionary

**Author:** doodle12
**Votes:** 51
**Link:** [https://leetcode.com/problems/multiply-strings/solutions/1165584/](https://leetcode.com/problems/multiply-strings/solutions/1165584/)

---

```
class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        if num1 == '0' or num2 == '0':
            return '0'
        
        def decode(num):
            ans = 0
            for i in num:
                ans = ans*10 +(ord(i) - ord('0'))
            return ans

        def encode(s):
            news = ''
            while s:
                a = s % 10
                s = s // 10
                news = chr(ord('0') + a) + news
            return news
        
        return encode(decode(num1)*decode(num2))
```