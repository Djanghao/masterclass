# [scala] - ArrayBuffer

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4816496/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4816496/)

---


```
object Solution {

  import scala.collection.mutable.ArrayBuffer

  def resultArray(nums: Array[Int]): Array[Int] = {
    val (arr1, arr2) = (ArrayBuffer(nums(0)), ArrayBuffer(nums(1)))
    nums.view.drop(2).foreach(num => (if (arr1.last > arr2.last) arr1 else arr2).append(num))
    arr1.appendAll(arr2).toArray
  }
}
```