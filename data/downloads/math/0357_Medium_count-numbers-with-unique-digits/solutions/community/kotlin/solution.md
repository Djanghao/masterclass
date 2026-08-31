# Beats 100% || DP || Non-Memoized || Simplest

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/6056024/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/6056024/)

---

# Intuition
For every index we have options from 0->9 and we need to find all possible hence we can solve this with DP.

# Approach
Zero repeation is allowed if we have not appended non-zero for example: 00000000 contains duplicate zero but its still valid 0
other then then this its very simple.
Keep record of used chars and do backtracking and solve it recursively for n-1

# Complexity
- Time complexity:
O(9^n)

- Space complexity:
O(9^n) this space is used for call stack

# Code
```kotlin []
class Solution {
    fun countNumbersWithUniqueDigits(n: Int): Int {
        return enumerate(n, HashSet(), false)
    }

    /*
    000000000

     */
    fun enumerate(n: Int, map: HashSet<Int>, isNonZeroStarted: Boolean): Int {
        if (n == 0) {
//            println(curr)
            return 1
        }
        var result = 0
        for (i in 0..9) {
            if (isNonZeroStarted && map.contains(i)) {
                continue
            }
            map.add(i)
            result += enumerate(n - 1, map, isNonZeroStarted || i != 0)
            map.remove(i)
        }
        return result
    }
}
```