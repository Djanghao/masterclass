# JavaScript, Python, Kotlin DP (mostly math)

**Author:** ektegjetost
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-destination-in-the-grid/solutions/4209134/](https://leetcode.com/problems/number-of-ways-to-reach-destination-in-the-grid/solutions/4209134/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- in one move, you can move ANYWHERE along the same row or col
- so check this out:

```
n = 3
m = 4
k = 3
source = [2,3]
dest = // doesn't matter

moves: 0
    [ 0,  0,  0]
    [ 0,  0,  0]
    [ 0,  1,  0]
    [ 0,  0,  0]

moves: 1
    [ 0,  1,  0]
    [ 0,  1,  0]
    [ 1,  0,  1]
    [ 0,  1,  0]

moves: 2
    [ 2,  2,  2]
    [ 2,  2,  2]
    [ 0,  5,  0]
    [ 2,  2,  2]

moves: 3
    [ 8, 13,  8]
    [ 8, 13,  8]
    [11,  6, 11]
    [ 8, 13,  8]
```

There are 4 different types of cells you can be standing on after any number of moves
- along the same row as the start
- along the same col as the start
- at the start
- any other cell

each turn:
- the cells along the same row as the start will be the sum of the other cells along the same row + the start, and the outside cells along the same col from the previous move
- the cells along the same cola s teh start will be the sum fo the other cells along the same col + the start, and the outside cells along the same row from the previous move
- the start will be the sume of the other cells along its row and col from the previous move
- the outside cells will be the sum of the other outside cells along the same row / col + one cell from the same row as the start and one cell from the same col as the start from the previous move

The destination will be one of those 4 types of cells


# Approach
<!-- Describe your approach to solving the problem. -->
- Just create some variables ```cell```, ```row```, ```col```, ```start``` representing the number of ways you can reach an outside cell, cell along the same row as the start, cell along the same col as the start, and the start at any number of moves
- iterate from 1 to ```k``` or whatever, do the summing i described in the intuition section for each variable
- figure out which type of cell the ```dest``` is, and return that variable


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(k)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code

JavaScript
```
var numberOfWays = function(n, m, k, source, dest) {
  const MOD = 10n ** 9n + 7n
  let [cell, row, col, start] = [0n, 0n, 0n, 1n]

  const cellsInRow = BigInt(n - 1)
  const cellsInCol = BigInt(m - 1)
  const othersInRow = BigInt(Math.max(0, n - 2))
  const othersInCol = BigInt(Math.max(0, m - 2))

  for (let move = 1; move <= k; move += 1) {
    const nextCell = (othersInRow * cell + othersInCol * cell + row + col) % MOD
    const nextRow = (cellsInCol * cell + othersInRow * row + start) % MOD
    const nextCol = (cellsInRow * cell + othersInCol * col + start) % MOD
    const nextStart = (cellsInRow * row + cellsInCol * col) % MOD
    cell = nextCell
    row = nextRow
    col = nextCol
    start = nextStart
  }

  const [col1, row1] = source;
  const [col2, row2] = dest;
  if (col2 === col1 && row2 === row1) return start
  if (col2 === col1) return col
  if (row2 === row1) return row
  return cell
};
```

Python
```
class Solution:
    def numberOfWays(self, n: int, m: int, k: int, source: List[int], dest: List[int]) -> int:
        MOD = 10 ** 9 + 7
        cell, row, col, start = 0, 0, 0, 1

        cells_in_row = n - 1
        cells_in_col = m - 1
        others_in_row = max(0, n - 2)
        others_in_col = max(0, m - 2)

        for _ in range(k):
            next_cell = ((others_in_row + others_in_col) * cell + row + col) % MOD
            next_row = (cells_in_col * cell + others_in_row * row + start) % MOD
            next_col = (cells_in_row * cell + others_in_col * col + start) % MOD
            next_start = (cells_in_row * row + cells_in_col * col) % MOD
            cell, row, col, start = next_cell, next_row, next_col, next_start

        col1, row1 = source
        col2, row2 = dest

        if col1 == col2 and row1 == row2: return start
        if col1 == col2: return col
        if row1 == row2: return row
        return cell
```

Kotlin
```
class Solution {
    fun numberOfWays(n: Int, m: Int, k: Int, source: IntArray, dest: IntArray): Int {
        val MOD = 10.toDouble().pow(9).toLong() + 7L
        val cellsInRow = (n - 1).toLong()
        val cellsInCol = (m - 1).toLong()
        val othersInRow = (max(0, n - 2)).toLong()
        val othersInCol = (max(0, m - 2)).toLong()

        var (cell, row, col, start) = listOf(0L, 0L, 0L, 1L)

        for (i in 1..k) {
          val nextCell = ((othersInRow * cell % MOD) + (othersInCol * cell % MOD) + row + col) % MOD
          val nextRow = ((cellsInCol * cell % MOD) + (othersInRow * row % MOD) + start) % MOD
          val nextCol = ((cellsInRow * cell % MOD) + (othersInCol * col % MOD) + start) % MOD
          val nextStart = ((cellsInRow * row % MOD) + (cellsInCol * col % MOD)) % MOD
          cell = nextCell
          row = nextRow
          col = nextCol
          start = nextStart
        }

        val (col1, row1) = source
        val (col2, row2) = dest

        if (col1 == col2 && row1 == row2) return start.toInt()
        if (col1 == col2) return col.toInt()
        if (row1 == row2) return row.toInt()
        return cell.toInt()
    }
}
```