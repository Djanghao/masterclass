# My Kotlin Solution beats 98.08% other solutions by memory usage (35 MB) and it's blazingly fast

**Author:** naXa777
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-primes/solutions/2441616/](https://leetcode.com/problems/count-primes/solutions/2441616/)

---

# Approach

Ancient algo "Sieve of Eratosthenes"

![animated Sieve of Eratosthenes](https://upload.wikimedia.org/wikipedia/commons/9/94/Animation_Sieve_of_Eratosth.gif)

# Complexity

 - Time Complexity: $$O(n\\ log\\ log\\ n)$$
 - Space Complexity: $$O(n)$$

# Code
```
class Solution {
    fun countPrimes(n: Int): Int {
        if (n < 3) return 0
        
        // bitset elements correspond to odd numbers from 3 to n-1
        // 0: 3
        // 1: 5
        // 2: 7
        // 3: 9
        // x: 2*x+3
        val size = (n/2 - 1).toInt()
        val sieveOfEratosthenes = BitSet()
        // init all bits to true
        sieveOfEratosthenes.set(0, size)
        
        // +1 because 2 is a prime number
        var counter: Int = 1
        var lastIndex: Int = -1
        val sqrt = Math.sqrt(n.toDouble()).toInt()
        
        // after this loop sieveOfEratosthenes[] will contain true only for prime numbers
        for (i in 3..sqrt step 2) {
            // i is odd always
            lastIndex = (i-3)/2
            if (sieveOfEratosthenes[lastIndex] && isPrime(i, sieveOfEratosthenes)) {
                // ii is guaranteed to be odd (the square of an odd integer is always an odd number)
                val ii = i*i
                // i2 is guaranteed to be even
                val i2 = i*2
                for (j in ii until n step i2) {
                    // j is odd always (because odd ii + even i2 always produce an odd result)
                    sieveOfEratosthenes[(j-3)/2] = false
                }
                ++counter
            }
        }
        
        return countTrueBits(sieveOfEratosthenes, lastIndex + 1) + counter
    }
    
    private fun countTrueBits(bitset: BitSet, startFrom: Int = 0): Int {
        var counter: Int = 0
        // desperate optimization: skipping first elements that are already counted in main
        var i = bitset.nextSetBit(startFrom)
        while (i != -1) {
            ++counter
            i = bitset.nextSetBit(i + 1)
        }
        return counter
    }
    
    private fun isPrime(m: Int, sieveOfEratosthenes: BitSet): Boolean {
        // aggressive optimization: without these 2 lines it works only for odd numbers :)
        // if (this == 2) return true
        // if (this % 2 == 0) return false

        val sqrt = Math.sqrt(m.toDouble()).toInt()
        for (i in 3..sqrt step 2) {
            // i is odd always
            if (!sieveOfEratosthenes[(i-3)/2]) continue
            if (m % i == 0) return false
        }
        return true
    }
}
```