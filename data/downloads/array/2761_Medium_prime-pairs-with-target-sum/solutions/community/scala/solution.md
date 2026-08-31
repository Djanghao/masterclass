# scala twoliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/5486272/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/5486272/)

---

```scala
object Solution {
  val primes = (2 to 1000000).filter(x => BigInt(x).isProbablePrime(10))
    .to(collection.immutable.SortedSet)
  def findPrimePairs(n: Int): List[List[Int]] = {
    primes.iterator.takeWhile(x => x<=n/2).flatMap{x =>
      Option.when(primes.contains(n-x)){List(x, n-x)}
    }.toList
  }
}
```