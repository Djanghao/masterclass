# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/5491608/](https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/5491608/)

---

```scala
object Solution {
  def bestClosingTime(customers: String): Int =
    lazy val sfxY = customers.reverseIterator.map(c => if(c=='Y') 1 else 0)
      .scanLeft(0)(_ + _).toList.reverse
    lazy val sfxN = customers.map(c => if(c!='Y') 1 else 0)
      .scanLeft(0)(_ + _)
    (sfxY zip sfxN).map{case (a,b) => a + b}.zipWithIndex.min._2
}
```