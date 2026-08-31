# Easy Scala Pattern Matching Solution

**Author:** suwarnashukla6
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-subtraction-operation/solutions/6034020/](https://leetcode.com/problems/prime-subtraction-operation/solutions/6034020/)

---



# Code
```scala []
import scala.util.boundary, boundary.break

object Solution {
    def primeSubOperation(nums: Array[Int]): Boolean = boundary { 
        // Helper function to generate prime numbers up to a given limit
        def generatePrimes(limit: Int): List[Int] = {
            val isPrime = Array.fill(limit + 1)(true)
            isPrime(0) = false
            isPrime(1) = false
            for (i <- 2 to Math.sqrt(limit).toInt if isPrime(i)) {
                for (j <- i * i to limit by i) {
                    isPrime(j) = false
                }
            }
            isPrime.zipWithIndex.collect { case (true, idx) => idx }.toList
        }

        val primes = generatePrimes(1000).reverse // Reverse to prioritize larger primes first
        val n = nums.length
        var prev = 0

        for (i <- 0 until n) {
            // Find the first prime that satisfies the conditions
            val possiblePrime = primes.find(p => nums(i) - p > prev && nums(i) - p > 0)

            // If such a prime exists, subtract it
            possiblePrime match {
                case Some(p) => 
                    nums(i) -= p
                case None => 
                    // No prime can be subtracted; check if the current number is already greater than prev
                    if (nums(i) <= prev) {
                        break(false) // Exit the entire boundary block with false
                    }
            }

            // After modification (or if no modification was done but nums(i) > prev), update prev
            prev = nums(i)
        }

        true // All elements satisfy the strictly increasing condition
    }
}

```