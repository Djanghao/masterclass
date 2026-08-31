# [Scala] one liner

**Author:** bepis_higher
**Votes:** 2
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/1004689/](https://leetcode.com/problems/kth-missing-positive-number/solutions/1004689/)

---

```
object Solution {
    def findKthPositive(arr: Array[Int], k: Int): Int = arr.foldLeft(k){(r, a) => r + (if(a <= r) 1 else 0) }
}
```