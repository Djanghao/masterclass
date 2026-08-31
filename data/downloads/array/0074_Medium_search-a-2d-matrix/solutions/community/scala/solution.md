# scala solution using binary search, pattern matching

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/2038735/](https://leetcode.com/problems/search-a-2d-matrix/solutions/2038735/)

---

Matrix is sorted from top left to bottom right. Binary search is effective in a sorted list of elements. Trick here is to search the 2d array without converting into a 1d array and keep the logic simple. Following are the tools used 
- searching an element in 2d array at **n**th index by using formula: matrix(n/colCount)(n%colCount)
- binary search
- recursion

**time: O(logn)**,  
**space: O(1)**, 

```scala
  def searchMatrix(matrix: Array[Array[Int]], target: Int): Boolean = {
    val rowCount = matrix.length
    val colCount = matrix.head.size

    @scala.annotation.tailrec
    def search(matrix: Array[Array[Int]], target: Int, left: Int, right: Int): Boolean = {

      val mid = (left + right - 1) / 2
      //println(s"l: $left, r: $right, mid: $mid, e($mid): ${matrix(mid / colCount)(mid % colCount)}")
      (left, right) match {
        case (l, r) if l == r => false
        case (l, r) if matrix(mid / colCount)(mid % colCount) == target => true
        case (l, r) if matrix(mid / colCount)(mid % colCount) < target => search(matrix, target, mid + 1, right)
        case (l, r) if matrix(mid / colCount)(mid % colCount) > target => search(matrix, target, left, mid)
      }
    }
    search(matrix, target, 0, rowCount * colCount)

  }
  ```