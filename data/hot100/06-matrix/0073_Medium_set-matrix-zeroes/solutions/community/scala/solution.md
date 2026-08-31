# [scala] Find (r,c) and make rows/cols zero

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/5987885/](https://leetcode.com/problems/set-matrix-zeroes/solutions/5987885/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def setZeroes(matrix: Array[Array[Int]]): Unit = {
        val zeroColIndexes = 
            for {
                r <- matrix.indices
                c <- matrix(r).indices
                if matrix(r)(c) == 0
            } yield {(r, c)}

        zeroColIndexes.foreach((r,c) => {
            for { rr <- matrix.indices} yield { 
                matrix(rr)(c) = 0
            }
            for { cc <- matrix(r).indices} yield { 
                matrix(r)(cc) = 0
            }
        })
    }
}
```