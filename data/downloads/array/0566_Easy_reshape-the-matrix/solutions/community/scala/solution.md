# ✅ Scala: straightforward solution

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/3464687/](https://leetcode.com/problems/reshape-the-matrix/solutions/3464687/)

---

# Complexity
- Time complexity: $$O(r * c)$$
- Space complexity: $$O(r * c)$$

# Code
```scala
object Solution {

  def matrixReshape(original: Array[Array[Int]], r: Int, c: Int): Array[Array[Int]] =
    if (original.map(_.length).sum != r * c){
      original
    } else {
      val source = original.flatten
      
      val result = Array.fill(r)(Array.ofDim[Int](c))
      
      var idx = 0
      for (i <- 0 until r){
        for (j <- 0 until c) {
          result(i)(j) = source(idx) 
          idx += 1
        }
      }
      
      result
    }

}
```