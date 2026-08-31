# Easy, Intiutive Python, Faster than 99%

**Author:** boris17
**Votes:** 16
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/2264256/](https://leetcode.com/problems/subrectangle-queries/solutions/2264256/)

---

Idea: Updating the rectangle is an expensive write operation. Instead we simply keep a store of all subsequent updates and look through the store to check whether the value has been updated. If not, we return the value from the original rectangle.
```
class SubrectangleQueries:

    def __init__(self, rectangle: List[List[int]]):
        self.rectangle = rectangle
        self.ops = []

    def updateSubrectangle(self, row1: int, col1: int, row2: int, col2: int, newValue: int) -> None:
        self.ops.append((row1, col1, row2, col2, newValue))

    def getValue(self, row: int, col: int) -> int:
        for row1, col1, row2, col2, val in reversed(self.ops):
            if row >= row1 and col >= col1 and row <= row2 and col <= col2:
                return val
        return self.rectangle[row][col]
```