# Recursive Style

**Author:** rajesh_ramesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/5018087/](https://leetcode.com/problems/duplicate-zeros/solutions/5018087/)

---


# Code
```
object Solution {

  def doItRecursively(arr: Array[Int], arrLen: Int, idx: Int = 0): Array[Int] = {
    if (idx < arrLen) {
      if (arr(idx) != 0) doItRecursively(arr, arrLen, idx + 1)
      else {
        val (h1, h2) = arr.splitAt(idx + 1)
        doItRecursively(if (h2.nonEmpty) (h1 :+ 0) ++ h2.init else h1, arrLen, idx + 2)
      }
    } else arr
  }

  def duplicateZeros(arr: Array[Int]): Unit = {
    doItRecursively(arr, arr.length).copyToArray(arr)
  }

}

```