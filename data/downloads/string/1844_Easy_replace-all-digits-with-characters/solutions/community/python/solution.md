# Easy read Python

**Author:** goodfine1210
**Votes:** 9
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1244250/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/1244250/)

---

```
class Solution(object):
    def replaceDigits(self, s):
        """
        :type s: str
        :rtype: str
        """
        res = []
        
        for i in range(len(s)):
            if i % 2 == 0:
                res.append(s[i])
            if i % 2 == 1:
                res.append( chr(ord(s[i-1]) + int(s[i])) )
                
        return ''.join(res) 
```