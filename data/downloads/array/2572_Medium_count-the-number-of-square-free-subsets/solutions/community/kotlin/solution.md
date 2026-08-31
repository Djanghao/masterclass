# Frequency Map optimization Kotlin 100% O(n + 2^8)

**Author:** kotlinc
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3207723/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3207723/)

---

We break the numbers `[1,30]` into the following categories:

* `BAD_NUMBERS`: `4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28`   (11 numbers)
* `NON_PRIMES`: `6, 10, 14, 15, 21, 22, 26, 30` (8 numbers)
* `PRIMES`: `2, 3, 5, 7, 11, 13, 17, 19, 23, 29`    (10 numbers)
* `ONE`: `1` (1 number)

Then, we can process in this order:
1. Get frequency map of the original array
2. Find the possiblity of all permutations of `NON_PRIMES` product that are square free,
3. For each of the product, times one of each `PRIMES`, this gives us another map of permutations
4. Sum up the permutations
5. Each permutation (and empty) can use any combinations of the products of `1`s
6. Derive the final answer

Can my Lambda be improved? Please leave me a note.

```kotlin
class Solution {
  val PRIMES = intArrayOf(2, 3, 5, 7, 11, 13, 17, 19, 23, 29)
  val BAD_NUMS = (1..30).filter { PRIMES.any { p -> it % (p * p) == 0 } }.toSet()
  val NON_PRIMES = (2..30).filter { it !in PRIMES }.filter { it !in BAD_NUMS }.toList()

  private fun gcd(a: Int, b: Int): Int {
    if (b == 0) return a else return gcd(b, a % b)
  }

  fun squareFreeSubsets(nums: IntArray): Int {
    val MOD : Long = 1_000_000_007

    // Get the frequency map
    val freqMap = nums.toTypedArray().groupingBy{it}.eachCount()

    var dp = mutableMapOf<Int, Long>()
    for (v in NON_PRIMES) {
      if (v !in freqMap) continue
      val howmany = freqMap[v]!!

      val prev = HashMap(dp)
      dp[v] = (dp[v] ?: 0) + howmany
      for ((product, quantity) in prev)
        if (gcd(product, v) == 1)
          dp[product * v] = ((dp[product * v] ?: 0L) + quantity * howmany.toLong()) % MOD
    }
    for (v in PRIMES) {
      if (v !in freqMap) continue
      val howmany = freqMap[v]!!.toLong()
      val prev = dp
      dp = mutableMapOf<Int, Long>()
      dp[v] = howmany
      for ((product, quantity) in prev)
        dp[product] = if (product % v != 0) quantity * (1 + howmany) else quantity
    }
	// Getting all possible subsets without `1`
    var res = dp.values.sum() % MOD
	
	// Find the permutations of `1`
    val possible = (1..(freqMap[1] ?: 0)).fold(1L) {sum, _ -> (sum shl 1) % MOD}
    res = (res * possible + possible + MOD - 1) % MOD
    return res.toInt()
  }
}
```