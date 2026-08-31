# Scala beats 100%

**Author:** eugene-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-majority-element-in-subarray/solutions/3456827/](https://leetcode.com/problems/online-majority-element-in-subarray/solutions/3456827/)

---

# Code
```
import scala.collection.mutable

/**
 * Your MajorityChecker object will be instantiated and called as such:
 * var obj = new MajorityChecker(arr)
 * var param_1 = obj.query(left,right,threshold)
 */
class MajorityChecker(_arr: Array[Int]) {

  private val allIndexOf: Map[Int, Array[Int]] =
    _arr.zipWithIndex.foldLeft(Map.empty[Int, Array[Int]]) { case (m, (e, i)) =>
      m.updatedWith(e) {
        case Some(a) => Some(a :+ i)
        case None => Some(Array(i))
      }
    }

  // # times e appears in _arr[left, right[
  private def count(e: Int)(left: Int, right: Int): Int = {
    val indexes = allIndexOf(e)
    val i = indexes.search(left).insertionPoint
    val j = indexes.search(right).insertionPoint
    j - i
  }

  // the majority element (more than half) of _arr[left, right[ if any
  private val majorityMem = mutable.Map[(Int, Int), Option[Int]]()
  private def majority(left: Int, right: Int): Option[Int] = {
    majorityMem.getOrElseUpdate((left, right), {
      if (right - left == 1) Some(_arr(left))
      else {
        val mid = (left + right) / 2
        val leftMajority = majority(left, mid)
        val rightMajority = majority(mid, right)

        val half = (right - left) / 2
        val candidates = leftMajority.toList ++ rightMajority.toList
        candidates.find { e => count(e)(left, right) > half }
      }
    })
  }

  def query(left: Int, right: Int, threshold: Int): Int = {
    majority(left, right + 1)
      .filter { e => count(e)(left, right + 1) >= threshold }
      .getOrElse(-1)
  }

}
```