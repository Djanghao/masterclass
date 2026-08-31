# FoldLeft || Beats 100%

**Author:** ASRagab
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-digits-with-characters/solutions/5954344/](https://leetcode.com/problems/replace-all-digits-with-characters/solutions/5954344/)

---

# Approach
Fold over the string:
1. Check to see if the char is a digit
   a. if so: parse digit as Integer and add to the int representation of the previous character (which is at the head of the accumulator) 
   b. if not: do nothing
2. prepend the char (either the current or computed one) to the front of the accumulator 

3. reverse (since we added them to the front to avoid the traversal penalty that would come from appending to the list on each iteration)

4. `mkString`

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```scala []
object Solution {
    def replaceDigits(s: String): String = 
        s.foldLeft(List.empty[Char]) { case (acc, char) =>
            if char.isDigit then
                val shifted = (acc.head.toInt + Integer.parseInt(char.toString)).toChar 
                shifted :: acc
            else 
                char :: acc
        }.reverse.mkString

}
```