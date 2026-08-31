# scala recursion

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/5717431/](https://leetcode.com/problems/append-k-integers-with-minimal-sum/solutions/5717431/)

---

```scala []
object Solution {
  def minimalKSum(nums: Array[Int], k: Int): Long =
    def f(seq: Seq[Long], m: Long, rem: Long, acc: Long): Long =
      if(rem <= 0) acc
      else if(seq.isEmpty) acc+((m+m+rem-1)*rem)/2
      else if(seq.head <= m) f(seq.tail, seq.head+1, rem, acc)
      else if(seq.head>m+rem) acc+((m+m+rem-1)*rem)/2 
      else f(seq.tail, seq.head+1, rem-(seq.head-m), acc+(m+seq.head-1)*(seq.head-m)/2)
    f(nums.map(_.toLong).toList.sorted,1,k,0)
}
```