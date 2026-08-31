# Scala simple solution leveraging diagonals

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-squares/solutions/4737856/](https://leetcode.com/problems/detect-squares/solutions/4737856/)

---

# Intuition
Brute force complexity of counting squares would be O(n^2): for each vertex would have to look for the remaining 2 through all of the stored vertices.
Luckily, we're looking for squares, which means vertices can be stored in a more convenient way to make counting faster: store vertices by the degree that a diagonal and antidiagonal would form (think of the intersection of a 45 degree line with the X axis).

# Approach
##\xA0Add
Compute the diagonal and antidiagonal degree. x-y will be the same for the botttom left and top right corners. x+y will be the same for the top left and bottom right corners. We have duplicated points, so we also need to keep track of that. That's why we have a map of degrees, each one of which is in turn pointing to a map of (x, count) locations to count of occurrences 
##\xA0Count
1. compute the diagonal and antidiagonal degree.
2. for each of them, if they do exist, cycle through all the x points different than the first vertex. Compute the second point y coordinate using the diagonal / antidiagonal degree computed at the first point
3. compute the antidiagonal / diagonal to find the remaining 2 vertices along with their occurrences counts
4. compute the total number of squares as the product of all the found point counts

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class DetectSquares() {
  import collection.mutable
  private val diag = mutable.Map.empty[Int, mutable.Map[Int, Int]]
  private val antiDiag = mutable.Map.empty[Int, mutable.Map[Int, Int]]
  def add(point: Array[Int]): Unit = {
    val x = point(0)
    val y = point(1)
    val d = diag.getOrElseUpdate(x - y, mutable.Map.empty)
    val ad = antiDiag.getOrElseUpdate(x + y, mutable.Map.empty)
    d(x) = d.getOrElse(x, 0) + 1
    ad(x) = ad.getOrElse(x, 0) + 1
  }

  def count(point: Array[Int]): Int = {
    val x1 = point(0)
    val y1 = point(1)
    val diagDegree = x1 - y1
    val aDiagDegree = x1 + y1
    var result = 0

    diag.get(diagDegree).foreach { d =>
      for {
        (x2, count1) <- d if x2 != x1
        y2 = x2 - diagDegree
        ad <- antiDiag.get(x2 + y1)
        count2 <- ad.get(x2)
        count3 <- ad.get(x1)
        totalCount = count1 * count2 * count3
      } yield {
        result += totalCount
      }
    }
    antiDiag.get(aDiagDegree).foreach { ad =>
      for {
        (x2, count1) <- ad if x2 != x1
        y2 = aDiagDegree - x2
        d <- diag.get(x2 - y1)
        count2 <- d.get(x2)
        count3 <- d.get(x1)
        totalCount = count1 * count2 * count3
      } yield {
        result += totalCount
      }
    }
    result
  }

}

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
```