# Python / Kotlin / JavaScript Simple One-Liner Bit-Manipulation

**Author:** ektegjetost
**Votes:** 3
**Link:** [https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4818738/](https://leetcode.com/problems/guess-the-number-using-bitwise-questions-i/solutions/4818738/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- We want to check one bit at a time, so we'll run through 30 bits
- Because we're checking one bit at a time, ```commonSetBits``` will return a 1 or a 0
- And since we're getting a 1 or a 0, we can just bitshift the result and add it to our result
- Also because we're only checking one bit at a time (and they're mutually exclusive), we don't need to do bit manipulation to combine - just add them together
- This makes for some nice concise python / kotlin. JS still requires a loop until we get ranges sadly (unless you wanna create an array).

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sum over the range 0-30 (```bit in range(31))```)
2. The current bit we're testing is ```1 << bit```, so we call ```commonSetBits(1 << bit)```, which returns either a 1 or 0
3. Regardless of the result, we bitshift it ```result << bit```, since if it's 0 bitshifting won't do anything, and if it's 1 we'll add the bit to our total

# Complexity
- Time complexity: $$O(log n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` python []
class Solution:
    def findNumber(self) -> int:
        return sum(commonSetBits(1 << bit) << bit for bit in range(31))
```
``` kotlin []
class Solution : Problem() {
    fun findNumber(): Int {
        return (0..30).sumOf { commonSetBits(1 shl it) shl it }
    }
}
```
``` javascript []
var findNumber = function() {
    let total = 0;
    for (let bit = 0; bit <= 30; bit += 1) {
        total += commonSetBits(1 << bit) << bit;
    }
    return total;
};
```