# Scala

**Author:** fairgrieve
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/2017424/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/2017424/)

---

```
object Solution {
  def search(nums: Array[Int], target: Int): Boolean = {
    val k = nums.indices.find(i => nums(i) < nums((i + nums.length - 1) % nums.length)).getOrElse(0)
    val view = nums.indices.view.map(_ + k).map(_ % nums.length).map(nums)
    view.search(target).insertionPoint match { case i => view.isDefinedAt(i) && view(i) == target }
  }
}
```