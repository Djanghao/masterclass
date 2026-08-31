# :: Kotlin :: EASY Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3526771/](https://leetcode.com/problems/neighboring-bitwise-xor/solutions/3526771/)

---

# Code
```
class Solution {
    fun doesValidArrayExist(derived: IntArray): Boolean {
        val n = derived.size

        val bits = BooleanArray(n){ false }
        bits[0] = true

        for (i in 0 until n - 1) {
            if (derived[i] == 1) {
                bits[i + 1] = bits[i].not()
            } else {
                bits[i + 1] = bits[i]
            }
        }

        return if(derived[n - 1] == 1) bits[n - 1] != bits[0] else bits[n - 1] == bits[0]
    }
}
```