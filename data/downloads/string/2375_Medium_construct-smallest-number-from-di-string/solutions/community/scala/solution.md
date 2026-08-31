# [scala] - recursion

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2443146/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/2443146/)

---

```scala
def smallestNumber(pattern: String): String = {
  val nums = 2.to(pattern.length() + 1)
  go(pattern.toList.zip(nums), List(1), List.empty).mkString
}

def go(numbers: List[(Char, Int)], stacked: List[Int], acc: List[Int]): List[Int] =
  numbers match {
    case Nil => acc ::: stacked
    case ('D', n) :: tail => go(tail, n :: stacked, acc)
    case ('I', n) :: tail => go(tail, List(n), acc ::: stacked)
    case _ => ???
  }
```