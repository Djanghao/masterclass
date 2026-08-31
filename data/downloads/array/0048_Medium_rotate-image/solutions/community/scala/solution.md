# easy solution using scala

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotate-image/solutions/5815289/](https://leetcode.com/problems/rotate-image/solutions/5815289/)

---

# Intuition
i keep thinking what is the easy way ,is just to get the column and reverse and put it in new matrix and so on ,after that we copy new matrix to older matrix 

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
    def column(matrix: Array[Array[Int]],i:Int):Array[Int] = {
       matrix.map(row => row(i)).reverse
    }
    def rotate(matrix: Array[Array[Int]]): Unit = {
       val m: Array[Array[Int]] = Array.fill(matrix.length, matrix.length)(0)
       for(i <- matrix.indices){
        m(i)= column(matrix,i)
       }
       Array.copy(m,0,matrix,0,m.length)
        
    }
}
```