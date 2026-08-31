# Python3 simple 2 lines

**Author:** mxmb
**Votes:** 27
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1679058/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/1679058/)

---

Create a set containing the integers from `1...n` then check that each set of rows and columns is equal to this set.

`zip(*matrix)` is a convenient way of obtaining the columns of a matrix

```python
    def checkValid(self, matrix: List[List[int]]) -> bool:
        set_ = set(range(1,len(matrix)+1))
        return all(set_ == set(x) for x in matrix+list(zip(*matrix)))
```