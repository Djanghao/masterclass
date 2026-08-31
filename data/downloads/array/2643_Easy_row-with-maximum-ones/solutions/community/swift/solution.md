# [Swift] Step by step breakdown

**Author:** stephierjoy
**Votes:** 0
**Link:** [https://leetcode.com/problems/row-with-maximum-ones/solutions/5324841/](https://leetcode.com/problems/row-with-maximum-ones/solutions/5324841/)

---

# Intuition
The objective here is to figure out which row in a matrix has the highest amount of ones. Once found its index will be returned along with its sum. The simplest approach is to iterate through each row of the matrix, sum the number of ones, and keep track of the row with the highest sum.

# Approach
### Setup:
Initialize `numRows` and `numCols` to store the number of rows and columns in the matrix. Along with this create a variable `max` to store the index of the `row` with the maximum number of ones, and the `sum` of ones.

### Calculate Number of Ones:
Iterate through each `row` in the matrix. For each `row`, initialize a  `sum` variable. This will keep track of the number of ones in the current `row`. Use a nested loop to iterate through each element in the current `row` and add its value to `sum`.

### Update Maximum Ones:
After calculating the `sum` for the current `row`, compare it with the current maximum `sum` stored in `max[1]`. If the current `sum` is greater than the stored maximum `sum`, update `max` to the current `row` index and the current `sum`.

### Return Result:
Once all loops are done, `max` will contain the index of the `row` with the maximum number of ones, and it's `sum`. Return `max` as the result.

# Complexity
- Time complexity:
The overall time complexity is O(m\xD7n), where m is the number of rows and n is the number of columns. This is due to the nested loops that iterate through each element in the matrix.

- Space complexity:
The overall space complexity is O(1) because only a constant amount of additional space is used for the variables `max` and `sum`.

# Code
```
class Solution {
    func rowAndMaximumOnes(_ mat: [[Int]]) -> [Int] {
        let numRows = mat.count
        let numCols = mat[0].count
        var max = [0,-1]

        for row in 0..<numRows {
            var sum = 0

            for col in 0..<numCols {
                sum += mat[row][col]
            }

            if max[1] < sum {
                max = [row, sum]
            }
        }

        return max
    }
}
```