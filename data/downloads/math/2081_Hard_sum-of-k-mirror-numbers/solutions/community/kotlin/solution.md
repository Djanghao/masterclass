# Create a sequence that, given a palindromic base 10 number, returns the next one

**Author:** Tpdi
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/5756761/](https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/5756761/)

---

# Intuition
Create a sequence that, given a palindromic base 10 number, returns the next one.
Filter that sequence for numbers that are also palindromic in base `k`.
Return the Sum the first `n` of those.

# Approach
```
return sequence
    .filter { it -> isPalindromic(it.toString(k)) }
    .take(n)
    .sum()
```

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```kotlin []
class Solution {
    fun kMirror(k: Int, n: Int): Long {

        fun isPalindromic(s: String): Boolean {
            var f = 0
            var b = s.length - 1
            while (f < b) {
                if (s[f++] != s[b--]) {
                    return false
                }
            }
            return true
        }

        fun mirror(i: Long): Long {
            val s = i.toString()
            return (s + s.reversed()).toLong()
        }

        fun sandwich(i: Long, d: Int): Long {
            val s = i.toString()
            return (s + d + s.reversed()).toLong()
        }

// given a palindromic base 10 number, return the next higher one
        val sequence = sequence {
            yieldAll(generateSequence(1L) { it ->   
                val s = it.toString()
                val digits = s.length
                if ((it + 1).toString().length == digits + 1) it + 2 
                    // e.g., 99 -> 101, 9999 -> 10001
                else if (digits == 1) it + 1 
                else {
                    val m = digits / 2
                    val h = s.substring(0, m).toLong()          
                    // grab the first half of the string
                    if (digits % 2 == 0) mirror(h + 1)          
                    // even length: increment and mirror first half
                    else {
                        val c = s.substring(m, m + 1).toInt()   
                        // odd length: grab the middle digit
                        if (c == 9) sandwich(h + 1, 0)          
                        // if it's 9, increment the first half and sandwich 0
                        else sandwich(h, c + 1)                 
                        // if it's not 9, increment and sandwich the middle digit
                    }   
                }
            })
        }

        return sequence.filter { it -> isPalindromic(it.toString(k)) }.take(n).sum()
    }
}
```