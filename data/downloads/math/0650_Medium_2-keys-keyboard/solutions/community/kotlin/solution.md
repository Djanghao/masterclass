# Kotlin. Beats 100% (109 ms). Using a limited number of divisors.

**Author:** mobdev778
**Votes:** 1
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5659942/](https://leetcode.com/problems/2-keys-keyboard/solutions/5659942/)

---

![image.png](./images/0.png)

# Code
```kotlin []
class Solution {
    
    fun minSteps(n: Int): Int {
        var operations = 0
        var n = n

        var i = 0
        while (n > 1 && i < divisors.size) {
            if (n % divisors[i] != 0) i++ else {
                n /= divisors[i]
                operations += divisors[i]
            }
        }

        if (n > 1) {
            operations += n
        }

        return operations
    }

    companion object {
        val divisors = intArrayOf(2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31)
    }
}
```