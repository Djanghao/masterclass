# [scala] - bit ops to get powers

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-product-queries-of-powers/solutions/2747221/](https://leetcode.com/problems/range-product-queries-of-powers/solutions/2747221/)

---

```scala
val modulo = 1000000007

def productQueries(n: Int, queries: Array[Array[Int]]): Array[Int] = {
  val powers = getPowers(1, n).toArray
  queries.collect { case Array(l, r) =>
    l.to(r).map(powers).foldLeft(1L)((mult, el) => (mult * el) % modulo).toInt
  } 
}

def getPowers(mask: Int, n: Int): List[Int] = {
  val bit = mask & n
  if (mask >= modulo) List.empty
  else if (bit > 0) bit :: getPowers(mask << 1, n)
  else getPowers(mask << 1, n)
}
```