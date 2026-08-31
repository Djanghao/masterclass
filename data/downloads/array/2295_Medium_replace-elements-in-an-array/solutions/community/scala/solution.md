# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/4860706/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/4860706/)

---

```
object Solution {
  def arrayChange(nums: Array[Int], operations: Array[Array[Int]]): Array[Int] =
    operations.foldLeft(nums.zipWithIndex.to(Map)){case (map0,op) => 
      (map0 - op(0)) + (op(1) -> map0(op(0)))
    }
    .toList.sortBy(_._2).map(_._1).toArray
}
```