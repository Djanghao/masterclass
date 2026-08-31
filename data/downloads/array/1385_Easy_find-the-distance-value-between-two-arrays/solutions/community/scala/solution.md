# Scala Solution - one line

**Author:** Taqas
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/1826377/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/1826377/)

---

```
object Solution {
    def findTheDistanceValue(arr1: Array[Int], arr2: Array[Int], d: Int): Int = {
        arr1.count(x => arr2.forall(y => (y - x).abs > d))
    }
}
```