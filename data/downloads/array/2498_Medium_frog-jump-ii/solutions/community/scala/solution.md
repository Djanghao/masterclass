# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/5391667/](https://leetcode.com/problems/frog-jump-ii/solutions/5391667/)

---

```
object Solution {
  def maxJump(stones: Array[Int]): Int =
    if(stones.size <= 2) stones.last - stones.head
    else stones.toList.sliding(3).map(l => l.last - l.head).max
}
```