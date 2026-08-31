# Simple and fast scala solution with explanation

**Author:** dLuxHu
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/4215621/](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/solutions/4215621/)

---

# Intuition
`n`'s upper limit is 10^9, which is really big. A bitset for that size is going to be 10^9/8 bytes = 125MB. It's a lot.

However, the length of 10^9 in binary is 30 and the max length of the string is 1000 characters, it means that the set will have a maximum 30000 elements.

So instead of a bitset, I used a normal int set.

# Approach
- Find the maximum length of the string for the given `n` (`nLen`).
- Go through the string and for each character.
    - For each character, go through all strings with `1` - `nLen` length starting from that position
        - Decode that string into decimal
        - If the number is in the `1` - `n` range, add it to the set.
- The result is true iff the set has exactly n element

# Complexity
- Time complexity: `O(s.length * log2(n))` (amortized)

- Space complexity: `O(s.length * log2(n))`

# Code
```
import scala.collection.mutable.Set

object Solution {
    def queryString(s: String, n: Int): Boolean = {
        val set = Set[Int]()
        val nLen = n.toBinaryString.length
        for (i <- 0 until s.length) {
            for (j <- 0 until nLen) {
                if (i + j < s.length) {
                    val substr = s.substring(i, i+j+1)
                    val num = Integer.parseInt(substr, 2)
                    if (num > 0 && num <= n) set.add(num)
                }
            }
        }
        return set.size == n
    }
}

```