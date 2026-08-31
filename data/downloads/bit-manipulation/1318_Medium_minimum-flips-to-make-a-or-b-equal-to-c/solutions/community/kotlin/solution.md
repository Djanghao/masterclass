# Kotlin basic digital circuit design using truth tables

**Author:** Karim_Ibrahim
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/4245381/](https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/solutions/4245381/)

---

# Intuition
The truth table for the input/output can give us the formulaes and the relationships we need:

Notice that our output value can be:
1. 0: Both bits in `a` and `b` are matching `c`.
2. 1: One of the bits in either `a` or `b` needs to change to match `c`.
3. 2: Both bits in `a` and `b` need to change to match `c`.
For that reason, our output needs to be 2 bits to cover the range from 0 to 2.

| # | a | b | c | a + b | output bit A | output bit B |
|---|---|---|---|-------|--------------|--------------|
| 1 | 0 | 0 | 0 |   0   |      0       |     0        |
| 2 | 0 | 1 | 0 |   1   |      0       |     1        |
| 3 | 1 | 0 | 0 |   1   |      0       |     1        |
| 4 | 1 | 1 | 0 |   1   |      1       |     1        |
| 5 | 0 | 0 | 1 |   0   |      0       |     1        |
| 6 | 0 | 1 | 1 |   1   |      0       |     0        |
| 7 | 1 | 0 | 1 |   1   |      0       |     0        |
| 8 | 1 | 1 | 1 |   1   |      0       |     0        |

### Output Bit A
Notice that the output bit A is fired only once, on row #4. Row #4 happens iff `a = 1` and `b = 1` and `c = 0`. This simplifies our formula:
`oba = a . b . !c`

### Output Bit B
The output bit B is fired in 3 cases only: row #2, row #3, row #4, and row #5. By observing the result of `a + b` we can conclude the formula for this output bit:
`obb = (a + b) xor c`

# Approach
Simpliy calculate both numbers for `oba` and `obb` and count the number of ones in each number. Each bit that is set to 1 represents a 1 bit change.
The final result = `#ones(oba) + #ones(obb)`

# Complexity
- Time complexity:
$$O(1)$$
  - Calculating the formulaes is constant time
  - Counting the ones in each number is constant as well (32 or 64 iterations based on the platform)

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    fun minFlips(a: Int, b: Int, c: Int): Int {
        val ab = a and b
        val aOrB = a or b
        val notC = c.inv()

        val oba = ab and notC
        val obb = aOrB xor c

        return oba.ones() + obb.ones()
    }

    fun Int.ones(): Int {
        var ones = 0
        var curr = this
        while(curr != 0) {
            curr = curr and (curr - 1)
            ++ones
        }
        return ones
    } 
}
```