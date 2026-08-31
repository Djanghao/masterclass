# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/1934487/](https://leetcode.com/problems/count-ways-to-make-array-with-product/solutions/1934487/)

---

```
import scala.annotation.tailrec
import scala.collection.mutable.ArrayBuffer

object Solution {
  private val Modulus = 1000000007

  /**
   * A [[LazyList]] of prime numbers.
   */
  private val Primes = {
    def f(ints: LazyList[Int]): LazyList[Int] = ints.head #:: f(ints.tail.filter(_ % ints.head != 0))

    f(LazyList.from(2))
  }

  /**
   * Maps x to x! mod [[Modulus]]
   */
  private val Factorial = {
    val cache = ArrayBuffer[Int](1)
    (x: Int) => {
      (cache.size to x).foreach(i => cache += multiply(cache.last, i))
      cache(x)
    }
  }

  def waysToFillArray(queries: Array[Array[Int]]): Array[Int] = queries.map {
    case Array(n, k) => factors(k).valuesIterator.map(_ + n - 1).map(choose(_, n - 1)).fold(1)(multiply)
  }

  /**
   * @return (x + y) mod [[Modulus]]
   */
  private def add(x: Int, y: Int) = (x + y) % Modulus

  /**
   * @return nCk mod [[Modulus]]
   */
  private def choose(n: Int, k: Int) =
    multiply(multiply(Factorial(n), inverse(Factorial(k))), inverse(Factorial(n - k)))

  /**
   * @return Assume x = p1&#94;y1 * p2&#94;y2 * ... * pm&#94;ym such that each pi is prime.  Returns
   *         [[Map]](p1 -> y1, p2 -> y2, ..., pm -> ym).
   */
  private def factors(x: Int) = Iterator
    .unfold[Option[Int], (Int, Seq[Int])](x, Primes) {
      case (x, primes@Seq(head, _*)) if x % head == 0 => Some(Some(head), (x / head, primes))
      case (x, Seq(head, tail@_*)) if x > head => Some(None, (x, tail))
      case _ => None
    }
    .flatten
    .foldLeft(Map[Int, Int]().withDefaultValue(0)) {
      case (map, factor) => map + (factor -> (map(factor) + 1))
    }
  
  /**
   * @return x&#94;-1 mod [[Modulus]]
   */
  private def inverse(x: Int) = pow(x, Modulus - 2)

  /**
   * @return (x * y) mod [[Modulus]]
   */
  private def multiply(x: Int, y: Int): Int = multiply(x, y, 0)

  /**
   * @return (x * y) % [[Modulus]] + sum
   */
  @tailrec
  private def multiply(x: Int, y: Int, sum: Int): Int = y match {
    case 0 => sum
    case y if y % 2 == 0 => multiply(2 * x % Modulus, y / 2, sum)
    case y => multiply(x, y - 1, add(sum, x))
  }

  /**
   * @return x&#94;y mod [[Modulus]]
   */
  private def pow(x: Int, y: Int): Int = pow(x, y, 1)

  /**
   * @return (product * x&#94;y) mod [[Modulus]]
   */
  @tailrec
  private def pow(x: Int, y: Int, product: Int): Int = y match {
    case 0 => product
    case y if y % 2 == 0 => pow(multiply(x, x), y / 2, product)
    case y => pow(multiply(x, x), y / 2, multiply(product, x))
  }
}
```