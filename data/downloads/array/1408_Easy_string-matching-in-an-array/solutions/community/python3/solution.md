# Python3 Simple Code

**Author:** nterpsec
**Votes:** 100
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/577564/](https://leetcode.com/problems/string-matching-in-an-array/solutions/577564/)

---

```
arr = ' '.join(words)
subStr = [i for i in words if arr.count(i) >= 2]
        
return subStr
		