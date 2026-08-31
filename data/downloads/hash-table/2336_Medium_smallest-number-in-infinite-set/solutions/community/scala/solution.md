# 🔥  ⚡ Cleanest simple 100% Solution - extremely readable

**Author:** Kalz337
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/5365449/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/5365449/)

---


```
import scala.collection.mutable.TreeSet

class SmallestInfiniteSet() {

    val m = TreeSet[Int](1)
    var i = 1

    def popSmallest(): Int = 
      val s = m.head
      m -= s
      i += 1
      m += i
      s
    

    def addBack(num: Int): Unit = 
      m += num
    

}

```