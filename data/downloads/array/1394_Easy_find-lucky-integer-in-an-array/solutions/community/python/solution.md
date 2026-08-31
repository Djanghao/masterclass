# Python | Easy Solution✅

**Author:** gmanayath
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/2601421/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/2601421/)

---

```
def findLucky(self, arr: List[int]) -> int:
        large = -1
        unique = set(arr)
        for item in unique:
            count = arr.count(item)
            if item == count:
                large = max(large, item)              
        return large
```