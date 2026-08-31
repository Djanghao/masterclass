# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/5213100/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/5213100/)

---

```scala
// Input: [1,1,17,17,19], Output: 23 
// (1), (1), (1,1) : 2n-1=3 combinations
// (17), (17), (19), (17,19), (17,19) : 2x 17 and 1x 19 and (2*1)x 17,19 : 2+1+2=5 combinations
// (ones only) + (other w/o ones) + (other w/ ones) : 3 + 5 + 5*3 = 3+5*4 = 23
object Solution {
  import collection.immutable.{SortedMap,SortedSet}
  private val MOD = 1_000_000_007
  private def add(a:Long, b: Long): Int = ((a%MOD + b%MOD)%MOD).toInt
  private def mult(a:Long, b: Long): Int = ((a%MOD * b%MOD)%MOD).toInt
  private def pow2(n:Long, acc: Long = 1L): Int = if(n==0) acc.toInt else pow2(n-1,(acc<<1)%MOD)
  private lazy val squares = ((4 to 30 by 4) ++ (9 to 30 by 9) ++ (25 to 30 by 25)).to(SortedSet)
  private lazy val primes = (2 to 29).filter(math.BigInt(_).isProbablePrime(30)).to(SortedSet)
  private lazy val factors = (2 to 29).filterNot(squares.contains).map{case n =>
    n -> primes.iterator.find(n % _ == 0).map(p => if(p==n) Seq(n) else Seq(p, n/p)).get
  }.to(SortedMap) ++ Seq(1 -> Seq(), 30 -> Seq(2,3,5))
  private def toMask(n: Int) = factors(n).map(1 << _).foldLeft(0)(_ | _)
  def squareFreeSubsets(nums: Array[Int]): Int = {
    lazy val ns = nums.filterNot(squares.contains).groupMapReduce(identity)(_ => 1)(_ + _).to(List).sorted
    lazy val x1 = ns.filterNot(_._1 == 1).foldLeft(SortedMap.empty[Int,Map[Int,Int]]){case (aMap,(n,cnt0)) =>
      lazy val nMask = toMask(n)
      lazy val y0 = aMap.toList.collect{case (m,bMap) if (factors(m) intersect factors(n)).isEmpty =>
        bMap.collect{case (mask,cnt1) if (nMask&mask) == 0 => (nMask | mask) -> (mult(cnt0,cnt1))
        }
      }.flatten.groupMapReduce(_._1)(_._2){case (a,b) => add(a,b)}
      aMap + (n -> (y0 + (nMask -> cnt0)))
    }
    .view.values.flatMap(_.view.values).foldLeft(0){case (a,b) => add(a,b)}
    if(ns.isEmpty) 0                                           // squares only
    else if(ns.head._1 != 1) x1                                // w/o ones (1,1,...)
    else add(pow2(ns.head._2)-1, mult(pow2(ns.head._2),x1))    // w/ ones  (1,1,...)
  }
}
```