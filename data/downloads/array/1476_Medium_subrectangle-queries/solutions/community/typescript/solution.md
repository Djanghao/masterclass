# Java || Python || TS || Simple Matrix solution

**Author:** subscriber6436
**Votes:** 2
**Link:** [https://leetcode.com/problems/subrectangle-queries/solutions/4730766/](https://leetcode.com/problems/subrectangle-queries/solutions/4730766/)

---

# Complexity
- Time complexity: **O(N^2)**

- Space complexity: **O(N^2)**

# Code
```java []
class SubrectangleQueries {
    private int[][] rect;

    public SubrectangleQueries(int[][] rectangle) {
        this.rect = rectangle;
    }
    
    public void updateSubrectangle(int row1, int col1, int row2, int col2, int newValue) {
        for (int i = row1; i < row2 + 1; i++) {
            for (int j = col1; j < col2 + 1; j++) {
                this.rect[i][j] = newValue;
            }
        }
    }
    
    public int getValue(int row, int col) {
        return this.rect[row][col];
    }
}
```
```python []
class SubrectangleQueries:

    def __init__(self, rectangle: List[List[int]]):
        self.rect = rectangle
        
    def updateSubrectangle(self, row1: int, col1: int, row2: int, col2: int, newValue: int) -> None:
        for i in range(row1, row2 + 1):
            for j in range(col1, col2 + 1):
                self.rect[i][j] = newValue

    def getValue(self, row: int, col: int) -> int:
        return self.rect[row][col]
```
```typescript []
class SubrectangleQueries {
    private rect: number[][];

    constructor(rectangle: number[][]) {
        this.rect = rectangle;
    }

    updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
        for (let i = row1; i < row2 + 1; i++) {
            for (let j = col1; j < col2 + 1; j++) {
                this.rect[i][j] = newValue;
            }
        }
    }

    getValue(row: number, col: number): number {
        return this.rect[row][col];
    }
}
```