# Maximum Square in Matrix

**Author:** GabyMorgi
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-square/solutions/5069162/](https://leetcode.com/problems/maximal-square/solutions/5069162/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve this problem, we could iterate over one dimention, and save the aggregated data needed to compute the next row or column.

Let's take some example:

```
[[0, 1, 1, 1],
 [1, 1, 0, 0],
 [0, 1, 1, 1],
 [0, 1, 1, 0]]
```
In this case, we should start with an array of n, that count the aount of "1" to the left. At first, all zeros.

We can update the array in the following way:
if found "0", reset the counter
it found "1", increment the counter

`onesToLeft = [0, 1, 0, 0]`

Now we can start finding our squares in the submatrix
As we are now looking only at the first column, that means, a matrix 1 x n, the maximum square size is 1. So we must find 1 consecutive rows with 1 "1"s to the left. And there is!

Then we can check the second column, so the maximum size of the square also increments by one. As we have already found a square of size 1, we can focus only on finding one of size 2.

updating the array we have.

`onesToLeft = [1, 2, 1, 1]`

There are no two consecutive rows of 2 "1"s, so the maximum square size is still 1.

We continue with the 3rd column, so the maximum size of the square also increments by one. But as we didn't found a 2x2 square yet, theres no way to find a 3x3 square. So again, we can focus only on finding a 2x2 square.

`onesToLeft = [2, 0, 2, 2]`

We found the 2x2 square! Now we can increment one column and one square size step, and continue with the same policy until the end.

`onesToLeft = [3, 0, 3, 0]`

So the maximum square size is 3, and it's area 9

# Complexity
- Time complexity: $$O(m * n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
function maximalSquare(matrix: string[][]): number {
    if (matrix.length === 1) return matrix[0].some((val) => val === "1") ? 1 : 0
    if (matrix[0].length === 1) return matrix.some((val) => val[0] === "1") ? 1 : 0

    let onesToTheLeft = Array(matrix.length).fill(0)
    let findingSquare = 1
    let consecutiveRows
    for (let c = 0; c < matrix[0].length; c++) {
        consecutiveRows = 0
        for (let r = 0; r < matrix.length; r++) {
            if (matrix[r][c] === "1") {
                onesToTheLeft[r]++
                if (onesToTheLeft[r] >= findingSquare) {
                    consecutiveRows++
                    if (consecutiveRows >= findingSquare) {
                        findingSquare++
                        consecutiveRows = 0
                    }
                } else {
                    consecutiveRows = 0
                }
            } else {
                onesToTheLeft[r] = 0
                consecutiveRows = 0
            }
        }
    }
    return Math.pow(findingSquare - 1, 2)
};
```