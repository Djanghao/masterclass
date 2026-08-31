# Scala fold solution

**Author:** eugenykostarev
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4493440/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4493440/)

---

# Code
```
object Solution {
  def findMatrix(nums: Array[Int]): List[List[Int]] = {
    nums.foldLeft(List.empty[List[Int]]) { case (acc, el) =>
      acc.partition(_.contains(el)) match {
        case (withEl: List[List[Int]], withoutEl: List[List[Int]]) if withoutEl.nonEmpty =>
          withEl ::: ((el :: withoutEl.head) :: withoutEl.tail)
        case (withEl, _) =>
          withEl ::: List(List(el))
      }
    }
  }
}

```