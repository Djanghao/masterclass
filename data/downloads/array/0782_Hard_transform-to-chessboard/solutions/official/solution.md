# Official Solution

**Link:** [https://leetcode.com/problems/transform-to-chessboard/solution/](https://leetcode.com/problems/transform-to-chessboard/solution/)

---

[TOC]

---
### Approach #1: Dimension Independence [Accepted]

**Intuition**

After a swap of columns, two rows that were the same stay the same, and two rows that were different stay different.  Since the final state of a chessboard has only two different kinds of rows, there must have originally been only two different kinds of rows.

Furthermore, these rows must have had half zeros and half ones, (except when the length is odd, where there could be an extra zero or one), and one row must be the opposite (`0` changed to `1` and vice versa) of the other row.  This is because moves do not change these properties either.

Similarly, the above is true for columns.

Now, because a row move followed by a column move is the same as a column move followed by a row move, we can assume all the row moves happen first, then all the column moves.  (Note: it is *not* true that a row move followed by another row move is the same as those moves backwards.)

Since there are only two kinds of rows, we want the minimum number of moves to make them alternating; and similarly for columns.  This reduces to a one dimensional problem, where we have an array like `[0, 1, 1, 1, 0, 0]` and we want to know the least cost to make it `[0, 1, 0, 1, 0, 1]` or `[1, 0, 1, 0, 1, 0]`.

**Algorithm**

For each set of rows (and columns respectively), make sure there are only 2 kinds of lines in the right quantities that are opposites of each other.

Then, for each possible ideal transformation of that line, find the minimum number of swaps to convert that line to it's ideal and add it to the answer.  For example, `[0, 1, 1, 1, 0, 0]` has two ideals `[0, 1, 0, 1, 0, 1]` or `[1, 0, 1, 0, 1, 0]`; but `[0, 1, 1, 1, 0]` only has one ideal `[1, 0, 1, 0, 1]`.

In Java, we use integers to represent the rows as binary numbers.  We check the number of differences with `[1, 0, 1, 0, 1, 0, ...]` by xoring with `0b010101010101.....01 = 0x55555555`.  To make sure we don't add extra large powers of 2, we also bitwise-AND by `0b00...0011...11` where there are `N` ones in this mask.

<iframe src="https://leetcode.com/playground/Efit2B6g/shared" frameBorder="0" width="100%" height="500" name="Efit2B6g"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N^2)$$, where $$N$$ is the number of rows (and columns) in `board`.

* Space Complexity:  $$O(N)$$, the space used by `count`.