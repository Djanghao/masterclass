# Python - Solution + One-Liner! Clean and Simple

**Author:** domthedeveloper
**Votes:** 2
**Link:** [https://leetcode.com/problems/counting-elements/solutions/1943863/](https://leetcode.com/problems/counting-elements/solutions/1943863/)

---

**Solution**:
```
class Solution:
    def countElements(self, arr):
        counter = Counter(arr)
        return sum(v for k,v in counter.items() if k+1 in counter)
```

**One-Liner**:
```
class Solution:
    def countElements(self, arr):
        return (lambda c : sum(v for k,v in c.items() if k+1 in c))(Counter(arr))
```