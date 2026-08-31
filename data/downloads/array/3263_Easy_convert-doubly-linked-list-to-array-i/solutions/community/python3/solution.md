# Yield

**Author:** votrubac
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5672167/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5672167/)

---

**Python**
```python
class Solution:
    def toArray(self, root: 'Optional[Node]') -> List[int]:
        while root:
            yield root.val
            root = root.next  
```