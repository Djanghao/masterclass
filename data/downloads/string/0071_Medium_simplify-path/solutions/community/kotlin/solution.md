# Stack solution

**Author:** drgavrikov
**Votes:** 4
**Link:** [https://leetcode.com/problems/simplify-path/solutions/5036279/](https://leetcode.com/problems/simplify-path/solutions/5036279/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Use stack to simplify path

# Complexity
- Time complexity: $O(n)$

- Space complexity: $O(n)$

# Code
```
import java.util.*

class Solution {
    fun simplifyPath(path: String): String {
        val parts = path.split("/")
            .filter { it.isNotEmpty() }
            .toList()
        val stack = Stack<String>()
        for (dir in parts) {
            if (dir == ".") continue
            if (dir == "..") {
                if (stack.isNotEmpty()) stack.pop()
            } else stack.push(dir)
        }
        return "/" + stack.joinToString(separator = "/")
    }
}
```