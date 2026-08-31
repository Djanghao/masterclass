# My kotlin solution with time O(N) and space O(1)

**Author:** hj-core
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-divisors/solutions/2537921/](https://leetcode.com/problems/three-divisors/solutions/2537921/)

---

Since 1 and n are taken into account, isThree returns true only when n is squre of prime number. 

The isPrime algorithm is learned from wiki page **[Primality test](https://en.wikipedia.org/wiki/Primality_test)** and you should have a look if you not yet know it.
```
class Solution {
    /* Complexity:
     * Time O(N) and Space O(1) where N equals n;
     */
    fun isThree(n: Int): Boolean {

        fun Int.isPrime(): Boolean {
            return when {
                this == 2 || this == 3 -> true
                this <= 1 || (this and 1) == 0 || this % 3 == 0 -> false
                else -> {
                    var isPrime = true
                    val upperBound = Math.sqrt(this.toDouble()).toInt()
                    for (number in 5..upperBound step 6) {
                        if (this % number == 0 || this % (number + 2) == 0) {
                            isPrime = false
                            break
                        }
                    }
                    isPrime
                }
            }
        }

        val sqrt = Math.sqrt(n.toDouble()).toInt()
        val isThree = n == sqrt * sqrt && sqrt.isPrime()
        return isThree
    }
}
```