# 3 for loop and scala ,solution for dump like me

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/5888168/](https://leetcode.com/problems/modify-the-matrix/solutions/5888168/)

---

# Intuition
u need just to code like crazy 

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
    def modifiedMatrix(matrix: Array[Array[Int]]): Array[Array[Int]] = {
        for(i <- matrix.indices)
        {
            val found1 = matrix(i).indexOf(-1)
            for(found1 <- 0 until  matrix(i).size )
            {

            
            
            if (matrix(i)(found1) == -1){
                val arr = Array.fill(matrix.length)(0)
                for(j <- 0 until  arr.length) {
                    arr(j)=matrix(j)(found1)
                }
                matrix(i)(found1)=arr.max
            }
        }
        }
        return matrix
    }
}
```