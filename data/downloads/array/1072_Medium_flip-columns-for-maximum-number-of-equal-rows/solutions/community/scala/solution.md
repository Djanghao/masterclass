# GroupMapReduce and a hint

**Author:** sierikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6073080/](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6073080/)

---

# Intuition 

To capture this relationship, we transform each row into a pattern based on its first element:

- 'T' (True): Represents that an element is the same as the first element in the row.
- 'F' (False): Represents that an element is different from the first element in the row.

By doing this, rows that are identical or complements of each other will have the same pattern. Instead of letters this solution uses `0` and `1` with `XOR` to reveal the pattern.

# Code
```scala []
object Solution {
    def maxEqualRowsAfterFlips(matrix: Array[Array[Int]]): Int = {
    matrix
        .map { row =>
        row.map(_ ^ row.head).toSeq
        }
        .groupMapReduce(identity)(_ => 1)(_ + _)
        .values
        .max
    }
}
```