# Count Chars

**Author:** vnt-83
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6006949/](https://leetcode.com/problems/string-compression-iii/solutions/6006949/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def compressedString(word: String): String = {
        val comp = new StringBuilder
        var currChar: Option[Char] = None
        var count = 0

        for (c <- word) {
            if (currChar.isDefined) {
                if (currChar.get == c && count < 9) {
                    count += 1
                }
                else {
                    comp.append(count).append(currChar.get)
                    currChar = Some(c)
                    count = 1
                }
            }
            else {
                currChar = Some(c)
                count = 1
            }
        }
        
        comp.append(count).append(currChar.get)
        
        comp.result
    }
}
```