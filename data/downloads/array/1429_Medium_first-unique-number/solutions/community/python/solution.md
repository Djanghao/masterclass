# Python 3 two dicts, dicts are ordered after version 3.6

**Author:** mxmb
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/1296866/](https://leetcode.com/problems/first-unique-number/solutions/1296866/)

---

Python sets don't preserve order, but dictionaries do (after Python 3.6). We use two dicts to keep track of the unique and non-unique numbers.

```python
class FirstUnique:

    def __init__(self, nums: List[int]):
        self.unique, self.not_unique = dict(), dict()
        for value in nums: self.add(value)
                
    def showFirstUnique(self) -> int:
        return next(iter(self.unique), default=-1)
        
    def add(self, value: int) -> None:
        if not(value in self.unique or value in self.not_unique):
            self.unique[value] = None
        elif value in self.unique:
            del self.unique[value]
            self.not_unique[value] = None
```