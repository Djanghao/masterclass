# Simple HashMap solution | O(n)

**Author:** hazirus
**Votes:** 0
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/3951598/](https://leetcode.com/problems/rabbits-in-forest/solutions/3951598/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun numRabbits(answers: IntArray): Int {
       var count = 0
       // initialize empty map with default values as 0
        val map = answers.toList().associateWith { 0 }.toMutableMap()

        for(r in answers) {
            if(map[r]!! == 0) {
                count += r + 1

                // corner case when value is zero;
                // increment count by 1 for all zeros
                if(r == 0) continue

            } else if(map[r]!! == r) {

                // if all others rabbits are found for same color
                // reset the map value for new color group
                map[r] = 0
                continue
            }
            // increment count for each
            map[r] = map[r]!! + 1
        }
        return count;
    }
}
```