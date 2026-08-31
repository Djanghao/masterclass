# scala | O(1) for queries

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2108823/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2108823/)

---

## Evaluation 
There are two points about the question. 
- Array does not change
- function **sumRange** can be invoked on the same array multiple times . 

Optimizing sumRange is important. So, here I use `prefixsum` for the 2d array or matrix. *Please go through Prefix Sum of  an array before getting into prefix sum of matrix*.  In case of array or matrix, I prefer using prefixSum array or matrix to have leading zeroes. 

## what does leading zero mean?
 For an array [1, 2, 3], the prefix sum array would be [0, 1, 3, 6]. Notice that the length of array increased by 1 to represent the *prefix* sum at 0th index. This I call as *leading zero*.  
 
For a matrix 2 x 2, the prefix sum matrix would be of dimention 3 x 3. 

*It is possible to solve without leading zero as well; just that I find leading zero based approach intuitive and concise*

## approach

Since the given matrix does not change for every query and there are going to be queries in the order of 10 ^ 4, the given input should be preprocessed before queries.

### preprocess
Preprocess *calculates the prefix sum matrix*.  For the given matrix, the prefix sum matrix is
|   |   |   |   |   |   |
| :------------: | :------------: | :------------: | :------------: | :------------: | :------------: |
|0 | 0 | 0 | 0 | 0 | 0
|0 | 3 | 3 | 4 | 8 | 10
|0 | 8 | 14 | 18 | 24 | 27
|0 | 9 | 17 | 21 | 28 | 36
|0 | 13 | 22 | 26 | 34 | 49
|0 | 14 | 23 | 30 | 38 | 58

### calculate range sum

Formula to evaluate the sum is the cumulative sum at (r2,c2) - (r2, c1 -1) - (r1 -1, c2) + (r1 -1, c1 -1). Sounds weird ! It is simple once accumulation is understood. 

Value at 6,6 = 58 is the cumulative sum of all values in the matrix from (0, 0) to (6,6). 

For sum of a range, **cumulative - (left region) - (top region)**. There is a region that is common between left and top which was deducted twice in the expression. So, it gets added back once finalizing the expression as 

> sum range = (cumulative at bottom range) - (left region) - (top region)  + common region

Now the logic is clear, it should be remembered that prefix sum matrix is larger by 1 x 1 than the input and the input size fits from the bottom left of prefix fix sum. That any query for (r1, c1) to (r1 + 1)(c1 +1). 

So the expression

*sumRange(row1, col1, row2, col2) =  dp(row2)(col2) - dp(row2)(col1 - 1) - dp(row1 - 1)(col2) + dp(row1 - 1)(col1 - 1)*
 
 becomes
 
 *sumRange(row1, col1, row2, col2) = dp(row2 **+ 1**)(col2 **+ 1**) - dp(row2 **+ 1**)(col1 - 1 **+ 1**) - dp(row1 **+ 1** - 1)(col2 **+ 1**) + dp(row1 **+ 1** - 1)(col1 **+ 1** - 1)*

```
  class NumMatrix(_matrix: Array[Array[Int]]) {

    /*
      //input
      10    20    30
       5     10    20
       2     (4     6)

      //prefix sum matrix
      10    30    60
      15    45    95
      17    51   107
     */

    val dp = matrixPrefixSumWithLeadingZeroes()

    def matrixPrefixSumWithLeadingZeroes(): Array[Array[Int]] = {
      // - calculate dp matrix with preceding zeroes which is easier to visulize and cannot be avoided. 
      // - is also in similar lines to 1 d array with dp where preceding 0 is included.
      if (_matrix.size > 0 && _matrix.head.size > 0) {
        val dp = Array.ofDim[Int](_matrix.size + 1, _matrix.head.size + 1)
        for (r <- 1 to _matrix.size; c <- 1 to _matrix.head.size) {
          dp(r)(c) = dp(r)(c - 1) + dp(r - 1)(c) - dp(r - 1)(c - 1) + _matrix(r - 1)(c - 1)
        }
        dp
      } else _matrix
    }

    def sumRegion(row1: Int, col1: Int, row2: Int, col2: Int): Int =
      /*
        a) find cumulative total
        b) subtract bottom left 
        c) subtract top right 
        d) add common between b & c. 
      */

      dp(row2 + 1)(col2 + 1) - dp(row2 + 1)(col1 + 1 - 1) - dp(row1 + 1 - 1)(col2 + 1) + dp(row1 + 1 - 1)(col1 + 1 - 1)

  }
```