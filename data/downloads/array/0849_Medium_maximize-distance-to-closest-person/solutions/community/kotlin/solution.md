# Easy explonation, linear solution without additional memory.

**Author:** drgavrikov
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5028776/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/5028776/)

---

# Intuition
Solution in one iteration through the array with the previous closest person index.

---

\u0420\u0435\u0448\u0435\u043D\u0438\u0435 \u0437\u0430 \u043E\u0434\u043D\u0443 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u044E \u043F\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0443 \u0441 \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435\u043C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0433\u043E \u043C\u0435\u0441\u0442\u0430.

# Approach
We move through the array from left to right and remember the index of the last occupied place $prev$. If the current place is occupied, then the maximum distance to the closest person is equal to $(index - prev) / 2$. We separately check the extreme cases from the left and right edges to the first and last occupied place.

---

\u0414\u0432\u0438\u0433\u0430\u0435\u043C\u0441\u044F \u043F\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0443 \u0441\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E \u0438 \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u043C \u0438\u043D\u0434\u0435\u043A\u0441 \u043F\u0440\u043E\u0448\u043B\u043E\u0433\u043E \u0437\u0430\u043D\u044F\u0442\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430 $prev$. \u0415\u0441\u043B\u0438 \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u043C\u0435\u0441\u0442\u043E \u0437\u0430\u043D\u044F\u0442\u043E, \u0442\u043E maximum distance to the closest person \u0440\u0430\u0432\u043D\u0430 $(index - prev) / 2$.
\u041E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C \u043A\u0440\u0430\u0439\u043D\u0438\u0435 \u0441\u043B\u0443\u0447\u0430\u0435 \u043E\u0442 \u043B\u0435\u0432\u043E\u0433\u043E \u0438 \u043F\u0440\u0430\u0432\u043E\u0433\u043E \u043A\u0440\u0430\u044F \u0434\u043E \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u0437\u0430\u043D\u044F\u0442\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430.

# Complexity
- Time complexity: $O(n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$ additional memory
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import kotlin.math.max

class Solution {
    fun maxDistToClosest(seats: IntArray): Int {
        var result = 0 
        var prev = -1
        seats.indices.forEach { index ->
            if (seats[index] == 1) {
                if (prev == -1) result = max(result, index)
                else result = max(result, (index - prev) / 2)
                prev = index   
            }
        }
        result = max(result, seats.size - 1 - prev)
        return result
    }
}
```