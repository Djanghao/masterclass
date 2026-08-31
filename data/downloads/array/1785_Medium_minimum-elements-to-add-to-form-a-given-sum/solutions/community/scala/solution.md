# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/5009053/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/5009053/)

---

```
object Solution {
  def minElements(nums: Array[Int], limit: Int, goal: Int): Int =
    (((goal - nums.foldLeft(0L)(_ + _)).abs + limit - 1) / limit).toInt
}
```