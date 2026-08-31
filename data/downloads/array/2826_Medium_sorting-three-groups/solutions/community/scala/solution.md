# [scala] - bruteforce index solution

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/3941205/](https://leetcode.com/problems/sorting-three-groups/solutions/3941205/)

---

# Code
```
object Solution {

  def minimumOperations(nums: List[Int]): Int = {
    val arr = nums.toArray
    var errors = Int.MaxValue
    (0 to arr.length).foreach { i =>
      (i to arr.length).foreach { j =>
        val err1 = (0 until i).map(arr).count(_ != 1)
        val err2 = (i until j).map(arr).count(_ != 2)
        val err3 = (j until arr.length).map(arr).count(_ != 3)
        errors = math.min(errors, err1 + err2 + err3)
      }
    }
    errors
  }
}
```