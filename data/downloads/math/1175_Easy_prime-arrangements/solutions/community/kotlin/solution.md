# Count primes

**Author:** 2pac_shakur
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-arrangements/solutions/750556/](https://leetcode.com/problems/prime-arrangements/solutions/750556/)

---

```
    fun numPrimeArrangements(n: Int): Int {
        var result = 1L
        val primes = setOf(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97) // n is <= 100
        val mod = 1e9.toInt() + 7
        var countOfPrimes = 0
        for (i in 1..n) countOfPrimes += if (primes.contains(i)) 1 else 0
        
		for (i in countOfPrimes downTo 1) result = result * i % mod // factorial(countOfPrimes)
        for (i in n - countOfPrimes downTo 1) result = result * i % mod // factorial(n - countOfPrimes) * prev step
        
		return result.toInt()
    }
```