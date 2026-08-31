# Simple python solution

**Author:** rushirg
**Votes:** 91
**Link:** [https://leetcode.com/problems/add-strings/solutions/734968/](https://leetcode.com/problems/add-strings/solutions/734968/)

---

**Method 1:**
Use of dictionary
```
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        
        def str2int(num):
            numDict = {'0' : 0, '1' : 1, '2' : 2, '3' : 3, '4' : 4, '5' : 5,
                  '6' : 6, '7' : 7, '8' : 8, '9' : 9}
            output = 0
            for d in num:
                output = output * 10 + numDict[d]
            return output
        
        return str(str2int(num1) + str2int(num2)) 
```

**Method 2**
Use of unicode
```
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        def str2int(num):
            result  = 0
            for n in num:
                result = result * 10 + ord(n) - ord('0')
            return result
        return str(str2int(num1) + str2int(num2))
```