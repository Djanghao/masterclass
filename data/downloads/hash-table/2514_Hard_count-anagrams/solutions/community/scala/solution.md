# [scala] - modulo arithmetic step by step guide

**Author:** nikiforo
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/3069310/](https://leetcode.com/problems/count-anagrams/solutions/3069310/)

---

# Intuition
In order to count anagrams we should count permutations of letters for each word and multiply them. Permutations are computed with factorial. The simplest solution looks like this:

```scala
val m = 1000000007

def countAnagrams(s: String): Int = {
  val wordCounts = s.split(' ').map { word =>
    val charCounts = word.groupBy(identity).map(pair => factorial(pair._2.length()))
    factorial(word.length()) / charCounts.reduce(_ * _)
  }
  wordCounts.reduce(_ * _).mod(m).toInt
}

def factorial(n: Int): BigInt = BigInt(2.to(n).foldLeft(1)((acc, el) => acc * el % m))
```
However, the solution fails the performance test case. To count it effectively we should switch to modulo arithmetics.
Notice, that we require only four operations in our algebra:
```scala
trait Arithmetic[T] {
  def factorial(n: Int): T
  def multiply(a: T, b: T): T
  def division(a: T, b: T): T
  def toInt(n: T): Int
}
```

The original solution can be rewritten in terms of this trait:
```scala
def doCount[T](s: String, ar: Arithmetic[T]): Int = {
  val wordCounts = s.split(' ').toList.map { word =>
    val charCounts = word.groupBy(identity).map(pair => ar.factorial(pair._2.length))
    ar.division(ar.factorial(word.length()), charCounts.reduce(ar.multiply))
  }
  ar.toInt(wordCounts.reduce(ar.multiply))
}
```
with the corresponding arithemtic:
```scala
final class BigIntModuloArithmetic(m: Int) extends Arithmetic[BigInt] {
  def factorial(n: Int): BigInt = 2.to(n).foldLeft(BigInt(1))((acc, el) => acc * el)
  def multiply(a: BigInt, b: BigInt): BigInt = a * b
  def division(a: BigInt, b: BigInt): BigInt = a / b
  def toInt(n: BigInt): Int = (n % m).toInt
}
```
We can verify that this code works the same as the original solution using
```scala
def countAnagrams(s: String): Int =
  doCount(s, new BigIntModuloArithmetic(1000000007))
```

Lastly, we need to implement modulo arithmetic. `factorial`, `multiply` and `toInt` are trivial, whereas `division` is not.
```scala
final class IntModuloArithmetic(mInt: Int) extends Arithmetic[Int] {
  private val m = BigInt(mInt)
  def factorial(n: Int): Int = 2.to(n).foldLeft(1)((acc, el) => multiply(acc, el))
  def multiply(a: Int, b: Int): Int = (BigInt(a) * BigInt(b)).mod(m).toInt
  def division(a: Int, b: Int): Int = (BigInt(b).modInverse(m) * a).mod(m).toInt
  def toInt(n: Int): Int = n
}
```
To verify the implementation we need to change the implementation of `countAnagram` 
```scala
def countAnagrams(s: String): Int =
  doCount(s, new IntModuloArithmetic(1000000007))
```