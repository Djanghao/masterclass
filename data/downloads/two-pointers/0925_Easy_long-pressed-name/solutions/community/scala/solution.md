# Scala Two-pointer solution stuff

**Author:** MaxPsm
**Votes:** 0
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/5707452/](https://leetcode.com/problems/long-pressed-name/solutions/5707452/)

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
```scala []
object Solution {
    def isLongPressedName(name: String, typed: String): Boolean = {
    def go(x: Int, y: Int, name: String, prevTypedChar: Char, typed: String): Boolean = {
      if (x == name.length) {
        if (y == typed.length) true
        else {
          if (typed(y) == prevTypedChar) go(x, y + 1, name, prevTypedChar, typed)
          else false
        }
      }
      else if(y == typed.length) {
        if (x == name.length) true
        else false
      }
      else {
        if (name(x) == typed(y)) go(x + 1, y + 1, name, typed(y), typed)
        else if (prevTypedChar == typed(y)) go(x, y + 1, name, typed(y), typed)
        else false
      }
    }

    if (typed.length < name.length) false
    else go(0, 0, name, " ".charAt(0), typed)
  }
}
```