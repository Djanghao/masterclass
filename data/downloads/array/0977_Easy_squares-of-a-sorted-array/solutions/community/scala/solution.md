# Scala solution, tail recursion, pattern matching, FP style

**Author:** simon_r
**Votes:** 3
**Link:** [https://leetcode.com/problems/squares-of-a-sorted-array/solutions/1564612/](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/1564612/)

---

```
object Solution {
  def sortedSquares(nums: Array[Int]): Array[Int] = {
    def loop(arr: Array[Int], out: List[Int]): Array[Int] = {
      (arr.headOption.map(v => v * v), arr.lastOption.map(v => v * v)) match {
        case (Some(head), Some(last)) if head < last => loop(arr.init, last :: out)
        case (Some(head), Some(_)) => loop(arr.tail, head :: out)
        case (Some(head), None) => (head :: out).toArray
        case _ => out.toArray
      }
    }

    loop(nums, List.empty[Int])
  }
}
```