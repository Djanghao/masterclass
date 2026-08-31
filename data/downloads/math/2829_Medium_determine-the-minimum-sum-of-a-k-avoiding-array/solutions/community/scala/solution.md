# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/5702717/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/5702717/)

---

same as https://leetcode.com/problems/find-the-minimum-possible-sum-of-a-beautiful-array
```scala []
object Solution {
  def minimumSum(n: Int, k: Int): Int =
    (Seq((1L,k/2  min n), (k.toLong,(n-k/2) max 0))
      .map{case (fst, len) => (fst+(fst+len-1))*len/2}
      .sum % 1_000_000_007
    ).toInt
}
```