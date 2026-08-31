# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-divisors/solutions/5741511/](https://leetcode.com/problems/closest-divisors/solutions/5741511/)

---

```scala []
object Solution {
  def closestDivisors(num: Int): Array[Int] = {
    def divisors(n: Int, a: Int, acc: List[Int]): List[Int] = {
      lazy val l1 = List(a,n/a)
      if(a<2) acc
      else if(n%a != 0 || acc.nonEmpty && ((l1.last-l1.head) >= (acc.last-acc.head))) divisors(n, a-1, acc)
      else divisors(n, a-1, l1)
    }
    List(1,2).map(i => divisors(num+i, 2 max math.sqrt(num.toDouble+i).toInt,Nil))
    .filter(_.nonEmpty).minBy(l => l.last-l.head).to(Array)
  }
}
```