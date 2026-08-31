# Python, try all 6 merges

**Author:** SalvadorDali
**Votes:** 17
**Link:** [https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836253/](https://leetcode.com/problems/shortest-string-that-contains-three-strings/solutions/3836253/)

---

# Intuition
How many ways you can have to order 3 strings? 3! = 6:
```
 a, b, c
 a, c, b
 b, a, c
 b, c, a
 c, a, b
 c, b, a
```

So we can try all of them and need to come up with a way to merge 2 strings: `merge(s1, s2)`

If `s2` is a substring in `s1`, the best way to merge them would be just to take `s1`. Examples are: `abcda` and `bc`.

But what if one is not a substring of another? For example `abc` and `bcd`. We need to find overlapping string so we check each position at one string and if `s2` string starts with that suffix (`s1[i:]`), then we can greedily make a match.

Which gives our merge function. And then we just do 6 of variantes of merges where `merge(a, b, c)` is `merge(merge(a, b), c)` and select the best one.

# Complexity
- Time complexity: $O(n^2)$

- Space complexity: $O(n)$

# Code
```
class Solution:

  def merge(self, s1, s2):
    if s2 in s1:
      return s1
    
    for i in range(len(s1)):
      if s2.startswith(s1[i:]):
        return s1[:i] + s2

    return s1 + s2

  def minimumString(self, a: str, b: str, c: str) -> str:
    res, l = '', float('inf')
    for s in [
      self.merge(self.merge(a, b), c),
      self.merge(self.merge(b, a), c),
      self.merge(self.merge(c, b), a),
      self.merge(self.merge(b, c), a),
      self.merge(self.merge(a, c), b),
      self.merge(self.merge(c, a), b),
    ]:
      if len(s) < l:
        res, l = s, len(s)
      elif len(s) == l:
        res = min(res, s)

    return res
```