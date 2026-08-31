# Python - Clean and Simple!

**Author:** domthedeveloper
**Votes:** 4
**Link:** [https://leetcode.com/problems/hexspeak/solutions/1890853/](https://leetcode.com/problems/hexspeak/solutions/1890853/)

---

**Solution**:
```
class Solution:
    def toHexspeak(self, num):
        num, ans = int(num), ""
        alpha = "OIXXXXXXXXABCDEF"
        
        while num:
            char = alpha[num%16]
            if char == "X": return "ERROR"
            ans = char + ans
            num //= 16
        
        return ans
```

**Bbuilt-in hex function**:
```
class Solution:
    def toHexspeak(self, num):
        num, ans = hex(int(num)).lstrip("0x").upper(), ""
        alpha = {'A':'A','B':'B','C':'C','D':'D','E':'E','F':'F','1':'I','0':'O'}
        
        for n in num:
            if n in alpha: ans += alpha[n]
            else: return "ERROR"
        
        return ans
```

**Check if converted text is numeric**:
```
class Solution:
    def toHexspeak(self, num):
        h = hex(int(num))[2:].upper().replace('0','O').replace('1','I')
        return h if not any(x.isnumeric() for x in h) else "ERROR"
```

**Translate**:
```
class Solution:
    def toHexspeak(self, num):
        h = hex(int(num))[2:].upper().translate(str.maketrans("01","OI"))
        return h if not any(x.isnumeric() for x in h) else "ERROR"
```

**One-Liner**:
```
class Solution:
    def toHexspeak(self, num):
        return (lambda h : h if not any(x.isnumeric() for x in h) else "ERROR")(hex(int(num))[2:].upper().translate(str.maketrans("01","OI")))
```