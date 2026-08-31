# StringBuilder For Loop O(n)

**Author:** vnt-83
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5994714/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5994714/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def makeFancyString(s: String): String = {
        val builder = new StringBuilder()
        var currentChar: Option[Char] = None
        var count = 1
    
        for (char <- s) {
            if (currentChar.isEmpty) {
                builder.append(char)
            }
            else if (char == currentChar.get) {
                count += 1
                if (count < 3) {
                    builder.append(char)
                }
            }
            else {
                count = 1
                builder.append(char)
            }
            currentChar = Some(char)
        }
    
        builder.result()       
    }
}
```