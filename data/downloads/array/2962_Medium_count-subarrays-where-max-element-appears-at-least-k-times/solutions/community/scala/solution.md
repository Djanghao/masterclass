# 1L))

**Author:** Kalz337
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4941231/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4941231/)

---

))


# 1L
```
import scala.collection.mutable.Queue
object Solution {
    def countSubarrays(nums: Array[Int], k: Int): Long = {
        nums.zipWithIndex.foldLeft((0L,Queue.empty[Long],nums.max)) {
            case ((res,q,mx),(num,i)) => ( (num match {
                case n if n == mx => q.addOne(i + 1L).dropInPlace(q.size - k)
                case _ => q }).
                orElse((m) => if (m == q.size) q.head else 0)(k) + res, q, mx)
        }._1
    }
}

```