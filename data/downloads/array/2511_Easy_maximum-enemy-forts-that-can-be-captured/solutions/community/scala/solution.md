# [scala] - recursive

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2971048/](https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/solutions/2971048/)

---

# Code
```
object Solution {
  
  def captureForts(forts: Array[Int]): Int = {
    val list = forts.toList
    math.max(go(list, None, 0), go(list.reverse, None, 0))
  }
    

  def go(forts: List[Int], captured: Option[Int], max: Int): Int =
    forts match {
      case Nil => max
      case 0 :: tail => go(tail, captured.map(_ + 1), max)
      case 1 :: tail => go(tail, Some(0), max)
      case -1 :: tail => go(tail, None, math.max(captured.getOrElse(0), max))
      case _ => ???
    }
}
```