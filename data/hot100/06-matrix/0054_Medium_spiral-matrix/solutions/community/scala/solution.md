# scala recursive oneliner with reverse & transpose

**Author:** vititov
**Votes:** 4
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/3013732/](https://leetcode.com/problems/spiral-matrix/solutions/3013732/)

---

# Approach
**reverse** each row then **transpose** == **rotate** by -90
# Code
```
  def spiralOrder(matrix: Array[Array[Int]], acc: List[Int] = List()): List[Int] = 
    if(matrix.isEmpty) acc.reverse 
    else spiralOrder(matrix.tail.map(_.reverse).transpose, (matrix.head.toList.reverse) ++ acc)
```