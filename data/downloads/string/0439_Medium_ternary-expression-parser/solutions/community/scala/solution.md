# scala code

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/4565330/](https://leetcode.com/problems/ternary-expression-parser/solutions/4565330/)

---

# Code
```
object Solution {
  
  // Method to initiate the parsing of the ternary expression
  def parseTernary(expression: String): String = {
    val chars = expression.toCharArray
    parse(chars, 0, chars.length)
  }

  // Helper method for recursive parsing
  private def parse(chars: Array[Char], left: Int, right: Int): String = {
    // Base case: if the segment length is 1, return the character
    if (right - left == 1) return chars(left).toString

    // Determine if we need to parse the first part of the expression
    val parseFirst = chars(left) == 'T'
    
    // Find the middle part of the ternary expression
    var idx = left + 2
    var count = 0
    var found = false

    while (idx < right && !found) {
      chars(idx) match {
        case '?' => count += 1
        case ':' => 
          if (count == 0) {
            // Mark as found instead of breaking the loop
            found = true
          } else {
            count -= 1
          }
        case _ => // do nothing
      }
      if (!found) idx += 1
    }

    // Adjust the bounds based on whether we're parsing the first part
    val newLeft = if (parseFirst) left + 2 else idx + 1
    val newRight = if (parseFirst) idx else right

    // Recursive call with updated bounds
    parse(chars, newLeft, newRight)
  }
}

```