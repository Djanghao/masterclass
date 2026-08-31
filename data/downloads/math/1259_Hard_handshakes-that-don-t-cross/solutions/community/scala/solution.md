# scala math wtih explanations

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/handshakes-that-dont-cross/solutions/4742510/](https://leetcode.com/problems/handshakes-that-dont-cross/solutions/4742510/)

---

# Complexity
- Time Complexity:
The time complexity of this solution is $$O(n)$$, where $$n$$ is numPeople / 2. This efficiency is achieved by precomputing the modular inverses in a linear pass and then using these precomputed values to calculate the Catalan number, which is directly related to the number of ways to pair numPeople.

- Space Complexity:
The space complexity of this solution is $$O(n)$$, due to the storage requirements of the inv array, which stores the modular inverses used in the calculation. Here, $$n$$ is essentially numPeople / 2.


# Code
```
object Solution {
  // The modulus value for arithmetic operations
  private val m: Int = 1000000007

  /**
   * Performs modular multiplication of two numbers.
   *
   * @param a The first integer.
   * @param b The second integer.
   * @return The result of (a * b) % m.
   */
  private def mul(a: Int, b: Int): Int = ((a.toLong * b) % m).toInt

  /**
   * Calculates the number of ways to pair `numPeople`.
   *
   * @param numPeople The total number of people to be paired.
   * @return The number of ways to pair `numPeople`.
   */
  def numberOfWays(numPeople: Int): Int = {
    val n = numPeople / 2
    val inv = Array.ofDim[Int](n + 2)
    inv(1) = 1
    // Precompute the modular inverses for use in the binomial coefficient calculation
    for (i <- 2 until n + 2) {
      val k = m / i
      val r = m % i
      inv(i) = m - mul(k, inv(r))
    }
    // Calculate the binomial coefficient for the Catalan number
    var C = 1
    for (i <- 0 until n) {
      C = mul(mul(2 * (2 * i + 1), inv(i + 2)), C)
    }
    C
  }
}

```