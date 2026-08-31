# Kotlin. Map and Set

**Author:** jakobakoba
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-duplicate-letters/solutions/4091248/](https://leetcode.com/problems/remove-duplicate-letters/solutions/4091248/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun removeDuplicateLetters(s: String): String {
        val map = mutableMapOf<Char, Int>()
        val set = mutableSetOf<Char>()

        for (i in s){
            map[i] = map.getOrDefault(i, 0 ) + 1
        }

        for (i in s){
            map[i] = map[i]!! - 1
            if (!set.contains(i)){
                while(set.isNotEmpty() && i < set.last() && map[set.last()]!! > 0){
                    set.remove(set.last())
                }
                set.add(i)
            }
    }
        return set.joinToString("")
    }
}
```