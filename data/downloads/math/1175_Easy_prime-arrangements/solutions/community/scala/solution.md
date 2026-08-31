# Scala solution

**Author:** vifi
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/6038349/](https://leetcode.com/problems/prime-arrangements/solutions/6038349/)

---

# Intuition


- Find all primes in range 0 <= n. For this we can use trial division method and take into account that only even prime number is 2.
- Since primes can only be arranged to prime indicies all valid prime permutations is **p!** where p is number of primes
- For every prime permutation we can do **(n - p)!** permutations of non primes
- So result is a product of both
  

# Code
```scala []
object Solution {
  val mod: Long = 1000000007

  def numPrimeArrangements(n: Int): Int = {
    val primes = findPrimes(n)

    val validArrangementsNonPrimes = factorial(n - primes.length)
    val validArrangementsPrimes = factorial(primes.length)
    val validArrangements = validArrangementsPrimes * validArrangementsNonPrimes

    (validArrangements % mod).toInt
  }

  def findPrimes(n: Int) = (2 to n).collect {
    case n if isPrime(n) => n
  }

  def isPrime(n: Int): Boolean = {
    if (n == 2) { // 2 is only even number that is prime
      true
    } else if (n < 2 || n % 2 == 0) { // 0, 1 aren't primes by def, even numbers aren't primes
      false
    } else { // only uneven numbers can be prime
      (3 to Math.sqrt(n).toInt by 2).forall { div =>
        n % div != 0
      }
    }
  }

  // according to condition n <= 100, we don't need to worry about StackOverflowError
  def factorial(n: Long): Long =
    if (n == 0 || n == 1)
      1
    else
      (n * factorial(n - 1)) % mod
}
```