# 5 lines python, eeasyy

**Author:** aganovaea
**Votes:** 46
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/427243/](https://leetcode.com/problems/relative-sort-array/solutions/427243/)

---

```
class Solution(object):
    def relativeSortArray(self, arr1, arr2):
        c = collections.Counter(arr1)
        res = []       
        for i in arr2:
            res += [i]*c.pop(i)  
        return res + sorted(c.elements())
```