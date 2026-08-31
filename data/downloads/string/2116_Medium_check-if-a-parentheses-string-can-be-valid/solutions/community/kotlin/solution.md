# Kotlin one pass solution

**Author:** andrew0x1
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/3947751/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/3947751/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun canBeValid(s: String, locked: String): Boolean {
        var stock = 0
        var counter = 0
        for(i in s.indices) {
            if(locked[i] == '0') stock++
            counter += if((s[i] == ')') || (locked[i] == '0')) -1 else 1
            if(counter >= 0) continue
            if(stock  <= 0) return false
            counter += 2
            stock--
        }

        return counter == 0
    }
}
```