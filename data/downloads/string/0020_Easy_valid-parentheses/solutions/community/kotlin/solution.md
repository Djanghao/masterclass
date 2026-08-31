# Recursive Solution On Kotlin

**Author:** Aleisder
**Votes:** 27
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/2447263/](https://leetcode.com/problems/valid-parentheses/solutions/2447263/)

---

The following algorithm isn't pretty fast and memorylight, but I think this non-standard approach seems interesting. 

```
class Solution {
    fun isValid(s: String): Boolean {
        if (s == "") { return true }
        val simplified = s.replace("()", "").replace("{}", "").replace("[]", "")
        if (simplified == s) { return false }
        return isValid(simplified)
    }
}
```

**Explanation:**
- The base case of recursion is pretty easy.
```
if (s == "") { return true }
```
If we've got an ***empty string***, it obviously satisfies the condition.
___
In compex valid string all valid brackets cointains another valid brackets as well. And also single valid brackets can occur the the left or the right of main brackets. For example: `"({[]})()[]"`
- On the next line we delete all internal valid brackets, which don't have another brackets inside. And also we rid off singe valid brackets.
```
val simplified = s.replace("()", "").replace("{}", "").replace("[]", "")
```
After this line our abovementioned example would be: `"({[]})()[]"` -> `"({})"`. Much easy to solve it now, right?
___
Clearly we can't simplify our string more and more, because in a moment we can come to the case when string can't be simplified anymore (in case if it's an unvalid string of course)
- And this line allows us to check is the simplified string the same as the original. If they are the same, it means, that the basic string is unvalid and we can't simplify it anymore. In this case function returns false.
```
if (simplified == s) { return false }
```
___
And we do cycle until it gives us a result
```
return isValid(simplified)
```
___
*Thanks for the reading.*
