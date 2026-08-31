# Scala solution

**Author:** MaxPsm
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/5800855/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/5800855/)

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
    def findRotation(mat: Array[Array[Int]], target: Array[Array[Int]]): Boolean = {
    def go(mat: Array[Array[Int]], target: Array[Array[Int]], count: Int): Boolean = {
      if (count > 2) isEqual(mat, target)
      else {
        if (isEqual(mat, target)) true
        else go(rotateSquare(mat), target, count + 1)
      }
    }

    def rotateSquare(square: Array[Array[Int]]): Array[Array[Int]] = {
      val dimension = square.length
      val newSquare = Array.fill(dimension, dimension)(0)
      for (i <- 0 until dimension) {
        for (j <- 0 until dimension) {
          newSquare(i)(j) = square(dimension - 1 - j)(i)
        }
      }
      newSquare
    }

    go(mat, target, 0)
  }

    def isEqual(array1: Array[Array[Int]], array2: Array[Array[Int]]): Boolean = {
        array1.length == array2.length && array1.zip(array2).forall { case (subArray1, subArray2) =>
        subArray1.sameElements(subArray2)
        }
    }
}
```