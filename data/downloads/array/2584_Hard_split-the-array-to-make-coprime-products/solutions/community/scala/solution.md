# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/5642579/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/5642579/)

---

```scala
object Solution {
  lazy val primes = (3 to 1_000_000 by 2).filter(BigInt(_).isProbablePrime(10)).to(collection.immutable.SortedSet) + 2
  def findValidSplit(nums: Array[Int]): Int = {
    type ASet = collection.immutable.Set[Int]
    lazy val anEmptySet = collection.immutable.Set.empty[Int]
    def f(n: Int, m: Int = 2, acc: ASet = anEmptySet): ASet =
      if(primes.contains(n)) acc + n
      else if(m*2>n) acc
      else if(n%m == 0) f(n/m, m, acc + m)
      else f(n, primes.minAfter(m+1).get, acc)
    lazy val fs = nums.iterator.map(f(_)).toVector
    lazy val pfx = fs.iterator.scanLeft(anEmptySet)(_ ++ _)
    val sfx = fs.reverseIterator.scanLeft(anEmptySet)(_ ++ _).toList
    (pfx zip sfx.reverse).slice(1, nums.length)
      .zipWithIndex.find{case ((a,b),_) => (a & b).isEmpty}
      .map(_._2).getOrElse(-1)
 }
}
```