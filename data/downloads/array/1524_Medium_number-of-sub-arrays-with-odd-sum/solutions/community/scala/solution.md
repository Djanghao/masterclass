# scala FP prefix sum

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/5338901/](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/5338901/)

---

```
object Solution {
  def numOfSubarrays(arr: Array[Int]): Int =
    def mod(i:Long, j:Long): Long = (i + j) % 1_000_000_007
    val x0 = arr.toList.map(_ & 1).scanLeft(0)(_ + _)
      .foldLeft((0L,0L),(0L,0L)){case ((e,o),n) =>
        if((n&1) == 1L) ((e._1,mod(e._2,e._1)), (o._1+1,o._2))
        else ((e._1+1, e._2), (o._1, mod(o._2, o._1)))
    }
    (x0._1._2 + x0._2._2 ).toInt
}
```