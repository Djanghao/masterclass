# Python 3 | Easy to Read

**Author:** avhirupc
**Votes:** 5
**Link:** [https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/907465/](https://leetcode.com/problems/range-sum-query-2d-mutable/solutions/907465/)

---

```
class NumMatrix:

    def create_prefix_sum(self,row):
        prefix_sum = []
        sum = 0
        for val in row:
            sum += val
            prefix_sum.append(sum)
        return prefix_sum
        
    def __init__(self, matrix: List[List[int]]):
        #create this 
        self.matrix = matrix
        self.row_prefix_sum = []
        for row in matrix:
            prefix_sum = self.create_prefix_sum(row)
            self.row_prefix_sum.append(prefix_sum)
        

    def update(self, row: int, col: int, val: int) -> None:
        if row < 0 or row>= len(self.matrix):
            return 
        if col < 0 or col>= len(self.matrix[0]):
            return 
        self.matrix[row][col]=val
        #update prefix sum
        self.row_prefix_sum[row] = self.create_prefix_sum(self.matrix[row])
        

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        # iterate throught row1 to row2
        sum = 0 
        for r in range(row1, row2+1):
        # calculate prefix[col2]-prefix[col1] (this sum)

            if col1==0:
                sum += self.row_prefix_sum[r][col2]
            else:
                sum += self.row_prefix_sum[r][col2] - self.row_prefix_sum[r][col1-1]
        
        return sum
        


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# obj.update(row,col,val)
# param_2 = obj.sumRegion(row1,col1,row2,col2)