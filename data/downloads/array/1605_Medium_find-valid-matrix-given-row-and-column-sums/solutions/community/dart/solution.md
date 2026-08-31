# BEATS 100% in DART 🎯,  SUPER EASY🔥 ,EK DUM LOLLIPOP 👌 , MUNNA HAI MUNNA 😊

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5510524/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5510524/)

---

![image.png](./images/0.png)


# Intuition
My initial thought for solving this problem is to iteratively adjust the matrix elements based on the row sums and column sums. By progressively distributing values while keeping track of the differences between desired sums and current sums, we can fill the matrix to satisfy the given conditions.

# Approach
1. **Initialization**:
   - Create a matrix (`sol`) with the same number of rows as `rowSum` and columns as `colSum`, initialized with zeros.
   - Fill the first column of each row with the corresponding value from `rowSum`.

2. **Initial Check**:
   - Calculate the sum of the first column. If it matches the first value of `colSum`, return the matrix as it is already valid for this simple case.

3. **Adjusting Values**:
   - Use a loop to iterate over each column, starting from the first and moving rightwards.
   - For each column, calculate the sum of its elements.
   - Compute the difference between this sum and the target value in `colSum` for that column.
   - Adjust the values in the matrix by distributing this difference to the next column while ensuring non-negative values.

4. **Final Return**:
   - Once all columns are adjusted, the matrix will satisfy both `rowSum` and `colSum` constraints.

# Complexity
- **Time complexity**: \\(O(m \	imes n)\\), where \\(m\\) is the number of rows and \\(n\\) is the number of columns. This is because we potentially iterate through each cell multiple times for adjustments.
- **Space complexity**: \\(O(m \	imes n)\\), due to the storage required for the output matrix.

# Code
```dart
class Solution {
  List<List<int>> restoreMatrix(List<int> rowSum, List<int> colSum) {
    List<List<int>> sol = List.generate(rowSum.length, (_) => List.filled(colSum.length, 0));
    // Fill the sum of arrays


// Fill the first col , by satisfying the rowCols sum,
// so make it happy
    for (int i = 0; i < rowSum.length; i++) {
      sol[i][0] = rowSum[i];
    }

   
    int s = 0;
    for (int i = 0; i < rowSum.length; i++) {
      s += sol[i][0];
    }

    if (s == colSum[0]) return sol;
    
    int col = 0;
 // step :2 the loop will run 1 TIME lees of total col - > on each iter column ++
    while (col < colSum.length - 1) {
      // know the current sum
      int sum = 0;
      for (int i = 0; i < rowSum.length; i++) {
        sum += sol[i][col];
      }

      int diff = sum - colSum[col];
      if (sum != colSum[col]) {
        for (int i = 0; i < rowSum.length; i++) {
          if (diff == 0) break;
          if (sol[i][col] > diff) {
            int temp = sol[i][col];
            sol[i][col] = sol[i][col] - diff;
            sol[i][col + 1] = diff;
            diff = 0;
          } else {
            int temp = sol[i][col];
            diff = diff - temp;

            sol[i][col] = 0;
            sol[i][col + 1] = temp;
          }
        }
      }
      col++;
    }

    return sol;
  }
}
```

This approach ensures that the matrix satisfies the given row and column sums while maintaining non-negative integer values. The code iteratively adjusts the matrix by balancing the sums of each column to the target values.
