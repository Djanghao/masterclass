# Easy to understand solution

**Author:** tamhuynhit
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5682905/](https://leetcode.com/problems/count-the-number-of-special-characters-ii/solutions/5682905/)

---

# Intuition
Use a `HashMap` to save each character's state. We will have 4 states for each character we met:
- Not visited
- Visit a lowercase already
- Already visit a lowercase then an uppercase character before
- Invalid: If visit a lowercase after an uppercase characters.
Base on the state to determine when to increase the final count

# Approach
Define the 4 states:
- STATE_NOT_SET
- STATE_ALREADY_COUNT
- STATE_INVALID
- State for never met before is not needed, we can use HashMap's null result to check this state.

On each character:
(Always use lowercase form to check the HashMap)

* If it's lowercase
  - HashMap check return null => This character never visited before, put it to the map with STATE_NOT_SET
  - HashMap check return STATE_ALREADY_COUNT => This character is already count before (at least 1 lowercase and 1 uppercase visited), but currently met another lowercase means this character shouldn't be counted => Decrease the count and mark it as STATE_INVALID
  - Ignore otehr states

* If it's uppercase
  - HashMap check return null => Mark it as STATE_INVALID because we haven't visited a lowercase first.
  - HashMap check return STATE_NOT_SET => This is a valid character (until this point), mark the state as STATE_ALREADY_COUNT and increase the count
  - Ignore otehr states

# Complexity
- Time complexity:
$$O(n)$$

# Code
```kotlin []
class Solution {
    val STATE_NOT_SET = 1
    val STATE_ALREADY_COUNT = 2
    val STATE_INVALID = 3

    fun numberOfSpecialChars(word: String): Int {
        val checkMap = HashMap<Char, Int>()
        var count = 0
        var state: Int?
        var lowerCaseC: Char
        for (c in word) {
            if (c.isLowerCase()) {
                // c is Lowercase
                state = checkMap[c]

                if (state == null)
                    checkMap[c] = STATE_NOT_SET
                else if (state == STATE_ALREADY_COUNT) {
                    // This c is already count but we meet another lowercase c, decrease the count and mark invalid to ignore in the future
                    checkMap[c] = STATE_INVALID
                    count--
                }
                // Ignore other states
            } else {
                // c is Uppercase
                lowerCaseC = c.toLowerCase()
                state = checkMap[lowerCaseC]

                if (state == null) {
                    // Meet uppercase c first, then this c is invalid and will be ignored
                    checkMap[lowerCaseC] = STATE_INVALID
                } else if (state == STATE_NOT_SET) {
                    // Meet a lowercase c before, then this c is count and marked 
                    checkMap[lowerCaseC] = STATE_ALREADY_COUNT
                    count++
                }
                // Ignore other states
            }
        }

        return count
    }
}
```