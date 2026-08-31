# two scala solutions: with gcd and with factor maps

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/5642477/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/5642477/)

---

```scala
object Solution {
  def replaceNonCoprimes(nums: Array[Int]): List[Int] = {
    def f(seq: List[BigInt], acc: List[BigInt]): List[BigInt] = {
      lazy val gcd = acc.head.gcd(seq.head)
      if(seq.isEmpty) acc
      else if(acc.isEmpty || gcd == 1) f(seq.tail, seq.head +: acc)
      else f(((acc.head/gcd) * seq.head) +: seq.tail, acc.tail)
    }
    f(nums.iterator.map(BigInt(_)).to(List), Nil).map(_.toInt).reverse
  }

  lazy val primes = (3 to 100_000 by 2).filter(BigInt(_).isProbablePrime(10)).to(collection.immutable.SortedSet) + 2
  def replaceNonCoprimes0(nums: Array[Int]): List[Int] = {
    def f(n: Int, m: Int = 2, acc: Map[Int,Int] = Map().withDefaultValue(0)): Map[Int,Int] = 
      if(primes.contains(n)) acc + (n -> (acc(n)+1))
      else if(m*2>n) acc
      else if(n%m == 0) f(n/m, m, acc + (m -> (acc(m)+1)))
      else f(n, primes.minAfter(m+1).get, acc)
    def prod(aMap: Map[Int,Int]): Int = aMap.iterator.flatMap{case (k,v) => LazyList.fill(v)(k)}.product
    def g(seq: List[Map[Int,Int]], acc:List[Map[Int,Int]] = List()): List[Map[Int,Int]] = {
      lazy val c = (seq.head.keySet ++ acc.head.keySet).iterator
        .map{k => k -> (seq.head(k) max acc.head(k))}.toMap.withDefaultValue(0)
      if(seq.isEmpty) acc
      else if(acc.isEmpty) g(seq.drop(1), seq.head +: acc)
      else if(seq.head.keys.exists(acc.head.keySet.contains)) g(c +: seq.drop(1), acc.drop(1))
      else g(seq.drop(1), seq.head +: acc)
    }
    g(nums.toList.map(x => f(x))).map(prod).reverse
  }
}
```