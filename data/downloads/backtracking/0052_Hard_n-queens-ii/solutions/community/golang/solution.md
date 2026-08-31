# Exhaustive search with bit twiddling hacks, beating 100%

**Author:** smallxy
**Votes:** 2
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/5008595/](https://leetcode.com/problems/n-queens-ii/solutions/5008595/)

---

# Intuition

Scan the board from top to bottom, while maintaining three bit sets which represent the remaining columns to be filled, the filled diagonals, and the filled reverse diagonals, respectively. The bit sets are updated as we move down the board, and the recursion stops when we reach the bottom of the board.

# Approach

Since the maximum value of n is 9, we can use the least significant n bits of a 32/64-bit integer to represent a set. The `columns` variable is used to represent the remaining columns to be filled, and the `diagMask` (`rdiagMask`) variable is used to represent the filled (reverse) diagonal. The diagonal masks are rollingly updated as we move down the board by shifting the bits to the left (right). Once we detect that there are no more valid placements, we return from the recursion. If we reach the bottom of the board, we increment the count by the number of valid placements.

# Complexity
- Time complexity:
$$O(n!)$$

- Space complexity:
$$O(n^2)$$ bits / $$O(n)$$ words

# Code
```
import "math/bits"

func totalNQueens(n int) int {
     columns := uint(1 << n) - 1
     count := 0
     explore(n, columns, 1, 0, 0, &count)
     return count
}

func explore(n int, columns uint, row int, diagMask uint, rdiagMask uint, count *int) {
    diagMask >>= 1
    rdiagMask <<= 1
    remaining := columns & ^diagMask & ^rdiagMask
    if remaining == 0 {
        return
    }
    if row == n {
        *count = *count + bits.OnesCount(remaining)
        return
    }
    i := bits.TrailingZeros(remaining)
    for i != bits.UintSize {
        bit := uint(1 << i)
        explore(n, columns & ^bit, row + 1, diagMask | bit, rdiagMask | bit, count)
        remaining = remaining & ^bit
        i = bits.TrailingZeros(remaining)
    }
}
```