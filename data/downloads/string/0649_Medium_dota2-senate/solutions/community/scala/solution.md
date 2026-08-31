# 10 lines scala recurcion

**Author:** vititov
**Votes:** 2
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/3485986/](https://leetcode.com/problems/dota2-senate/solutions/3485986/)

---

```
object Solution {
  def predictPartyVictory(senate: String): String = {
    val map2 = Map('D' -> 1, 'R'-> -1)
    val mq = collection.mutable.Queue(senate.toSeq:_*)
    def impl(b: Int): String = {
        val h = mq.dequeue
        if(b.abs >= mq.size) {if (b.sign > 0) "Dire" else "Radiant" }
        else if(b.sign == -map2(h)) impl(b + map2(h))
        else {mq enqueue h;  impl(b + map2(h))}
    }
    mq.enqueue(mq.dequeue)
    impl(map2(senate(0)))
 }
}
```