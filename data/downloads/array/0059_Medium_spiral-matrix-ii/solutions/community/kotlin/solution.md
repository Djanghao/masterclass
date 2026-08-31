# [Kotlin][2D Array] EASY solution with GREAT explanation!

**Author:** 4wl2d
**Votes:** 4
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/3508134/](https://leetcode.com/problems/spiral-matrix-ii/solutions/3508134/)

---

# Intuition
I solved this task yesterday lol, i just need to advance it :)

# Approach
So, we need to initialize `n * n` matrix/grid with zeroes on each position(which is our result, we need to edit this matrix/grid)

Next we need to declare `direction` variable, which is equal to `'R'`, because start direction is `"Right"`.

After that we can declare our borders on each side:
`borderLeft`, `borderUp` and etc.
Notice, that `borderUp` is equal to 1, because on start we already fill first line, so we need to move border.

I used to `matrix[i][j]`, so i created iterables `i` which is a **Column**, and `j` which is a **Row**!

Now we can start to travel in Matrix from `0` to `n * n` because we need to fill each cell from `1` to `n * n`, so in each step we are going to `matrix[i][j] = k + 1`(we could start from `1` to `n * n + 1`, because `until` works like: `1 <= until < (n * n + 1)`).

I hope you understand =)
Let's continue!

In Kotlin we have `when` statement, it's equals to `switch`, but in my opinion much better :)
We could do `when (direction) { /* TODO */ }`, but if we needed to write some `if` statements in `when` -> we can't use mentioned before expression.

We'll use `when` statement to check `direction` each time we go to somewhere. And so, if `direction == 'R'`, we are going to move to the right with `j`(like `matrix[i][j++]`). And each time we are checking if we contact the `border` with `j`, if we contacted -> we are switching our direction according to statement to `'D'` and decrease possible `border`.

Now we need to do the same with all directions. After `for` just return our edited matrix :)

**If u liked my explanation please vote for this solution, its important to me!**

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun generateMatrix(n: Int): Array<IntArray> {
        var matrix = Array(n) { IntArray(n) }
        var direction = 'R'
        var borderLeft = 0
        var borderRight = n - 1
        var borderUp = 1
        var borderDown = n - 1
        var i = 0
        var j = 0
        for (k in 0 until n * n) {
            matrix[i][j] = k + 1
            when {
                direction == 'R' -> {
                    j++
                    if (j == borderRight) {
                        direction = 'D'
                        borderRight--
                    }
                }
                direction == 'D' -> {
                    i++
                    if (i == borderDown) {
                        direction = 'L'
                        borderDown--
                    }
                }
                direction == 'L' -> {
                    j--
                    if (j == borderLeft) {
                        direction = 'U'
                        borderLeft++
                    }
                }
                direction == 'U' -> {
                    i--
                    if (i == borderUp) {
                        direction = 'R'
                        borderUp++
                    }
                }
            }
        }
        return matrix
    }
}
```