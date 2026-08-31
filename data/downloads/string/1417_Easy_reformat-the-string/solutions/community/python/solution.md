# [Python] Clean solutions with explanation. O(N) Time and Space.

**Author:** JummyEgg
**Votes:** 19
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/586917/](https://leetcode.com/problems/reformat-the-string/solutions/586917/)

---

First we get lists of letters and digits seperately. 
Then we append the bigger list first. In this problem, i use flag to keep track of which one to append, this will make the code cleaner.
**1st Solution**
```python
class Solution:
    def reformat(self, s: str) -> str:
        letters = [c for c in s if c.isalpha()]
        digits = [c for c in s if c.isdigit()]
        if abs(len(letters) - len(digits)) > 1: return ""
        
        rv = []
        flag = len(letters) > len(digits)
        while letters or digits:
            rv.append(letters.pop() if flag else digits.pop())
            flag = not flag
        return rv
```

**Another** pythonic solution. Inspired from [post](https://leetcode.com/problems/reformat-the-string/discuss/586674/Python-Simple-solution)
The idea is to swap a and b such that `len(a) > len(b)`
```python
    # Different Pythonic solution
    def reformat(self, s: str) -> str:
        a = [c for c in s if c.isalpha()]
        b = [c for c in s if c.isdigit()]
        if len(a) < len(b): a, b = b, a
        if len(a) - len(b) > 1: return ""
        
        rv = []
        while a:
            rv.append(a.pop())
            if b: rv.append(b.pop())
        return rv
```