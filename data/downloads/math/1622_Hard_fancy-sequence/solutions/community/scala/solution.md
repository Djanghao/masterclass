# Scala O(1) Solution 100% faster using modular inverse with xgcd

**Author:** SergeyVyun
**Votes:** 0
**Link:** [https://leetcode.com/problems/fancy-sequence/solutions/1348534/](https://leetcode.com/problems/fancy-sequence/solutions/1348534/)

---

```scala
import java.math.BigInteger
import scala.collection.mutable

class Fancy() {
  private var i: Int = 0
  private var add: BigInteger = BigInteger.ZERO
  private var mult: BigInteger = BigInteger.ONE
  private val mapIdxToVal = mutable.HashMap.empty[Int, BigInteger]
  private val MOD: BigInteger = BigInteger.valueOf((Math.pow(10, 9) + 7).toLong)

  // Extended Euclidean algorithm
  private def xgcd(a: BigInteger, b: BigInteger): Array[BigInteger] = {
    var (x, y) = (a, b)
    var qrem: Array[BigInteger] = new Array[BigInteger](2)
    val result: Array[BigInteger] = new Array[BigInteger](3)
    var (x0, x1) = (BigInteger.ONE, BigInteger.ZERO)
    var (y0, y1) = (BigInteger.ZERO, BigInteger.ONE)
    while (true) {
      qrem = x.divideAndRemainder(y)
      x = qrem(1)
      x0 = x0.subtract(y0.multiply(qrem(0)))
      x1 = x1.subtract(y1.multiply(qrem(0)))
      if (x.equals(BigInteger.ZERO)) {
        result(0) = y
        result(1) = if (y0.compareTo(BigInteger.ZERO) < 0) y0.add(b) else y0
        result(2) = y1
        return result
      }
      qrem = y.divideAndRemainder(x)
      y = qrem(1)
      y0 = y0.subtract(x0.multiply(qrem(0)))
      y1 = y1.subtract(x1.multiply(qrem(0)))
      if (y.equals(BigInteger.ZERO)) {
        result(0) = x
        result(1) = if (x0.compareTo(BigInteger.ZERO) < 0) x0.add(b) else x0
        result(2) = x1
        return result
      }
    }
    Array(BigInteger.ZERO, BigInteger.ZERO, BigInteger.ZERO)
  }

  // Modular multiplicative inverse
  private def modInv(num: BigInteger, base: BigInteger): BigInteger = {
    val Array(a, b, _) = xgcd(num, base)
    if (a.equals(BigInteger.ONE)) b
    else throw new ArithmeticException(s"gcd($num, $base) != 1")
  }

  // save `val` in HashMap as 
  // value = [(`val` - add) * (mult^(-1) mod MOD)] mod MOD
  // in presentation [value * mult + add] mod MOD
  def append(`val`: Int) {
    val inv = modInv(mult, MOD)
    val value = BigInteger.valueOf(`val`.toLong).subtract(add).multiply(inv).remainder(MOD)
    // println(s"i=$i, val=${`val`}, add=$add, mult=$mult, inv=$inv, value=$value")
    mapIdxToVal += (i -> value)
    i += 1
  }

  // new add = add + inc mod MOD
  // in presentation [value * mult + (add + inc)] mod MOD
  def addAll(inc: Int) {
    if (i > 0) {
      add = add.add(BigInteger.valueOf(inc.toLong)).remainder(MOD)
    }
  }

  // new mult = mult * m mod MOD
  // new add = add * m mod MOD
  // in presentation [value * (mult * m) + (add * m)] mod MOD
  def multAll(m: Int) {
    if (i > 0) {
      mult = mult.multiply(BigInteger.valueOf(m.toLong)).remainder(MOD)
      add = add.multiply(BigInteger.valueOf(m.toLong)).remainder(MOD)
    }
  }

  // getting result as [value * mult + add] mod MOD
  def getIndex(idx: Int): Int = {
    mapIdxToVal.get(idx)
      .map { a =>
        val res = a.multiply(mult).add(add).remainder(MOD)
        // println(s"a=$a mult=$mult add=$add res=$res resInt=${res.intValueExact()}")
        if (res.compareTo(BigInteger.ZERO) < 0) res.add(MOD).intValueExact()
        else res.intValueExact()
      }
      .getOrElse(-1)
  }
}
```