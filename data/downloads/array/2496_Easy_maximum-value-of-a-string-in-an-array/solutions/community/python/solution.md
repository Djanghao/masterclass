# Recursive and Iterative | Python

**Author:** krush_r_sonwane
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2898031/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2898031/)

---


# Iterative Code
```
class Solution(object):
    def maximumValue(self, strs):
        max_ = 0
        for ch in strs:
            if ch.isdigit(): max_ = max(max_, int(ch))
            else: max_ = max(max_, len(ch))
        return max_
```
# Recursive Code
```
class Solution(object):
    def maximumValue(self, strs):
        def sol(strs, index, max_):
            if index >= len(strs): return max_
            if strs[index].isdigit():
                return sol(strs, index + 1, max(max_, int(strs[index])))
            return sol(strs, index + 1, max(max_, len(strs[index])))
        return sol(strs, 0, 0)
```
**UpVote**, if you like it **:)**