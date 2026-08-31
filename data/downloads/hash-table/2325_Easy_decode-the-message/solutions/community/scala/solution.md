# Using Linked HashSet

**Author:** yusu0090
**Votes:** 1
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/4262687/](https://leetcode.com/problems/decode-the-message/solutions/4262687/)

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
object Solution {
    def decodeMessage(key: String, message: String): String = {
        
        val set = new scala.collection.mutable.LinkedHashSet[Char]
        for(e <- key) {
            if (e != ' ')
            set += e
        }

        val alphabets = 'a' to 'z'

        val map = set zip alphabets

        message.map(map.toMap.get(_).getOrElse(" ")).mkString("")

        
    }
}
```