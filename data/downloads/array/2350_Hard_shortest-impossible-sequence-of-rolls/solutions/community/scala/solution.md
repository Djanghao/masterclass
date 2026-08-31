# [scala] - mutable

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2354811/](https://leetcode.com/problems/shortest-impossible-sequence-of-rolls/solutions/2354811/)

---

```scala
def shortestSequence(rolls: Array[Int], k: Int): Int = {
  val set = scala.collection.mutable.Set.empty[Int]
  var times = 0
  rolls.foreach { i =>
    set.add(i)
    if(set.size == k) {
      times += 1
      set.clear()
    }
  }
  times + 1
}
```