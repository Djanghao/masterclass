# A few points: you'll always add at least once of the current character

**Author:** Tpdi
**Votes:** 0
**Link:** [https://leetcode.com/problems/magical-string/solutions/5746682/](https://leetcode.com/problems/magical-string/solutions/5746682/)

---

# Intuition
From a seed of "122" you can construct the magic string s.

# Approach
Read a character of s, if that character is "1" add one character to the end of s and increment the count of ones, else it's "2", so add two characters to the end of s. Then toggle the character to be added, 1 <=> 2 and read the next character of s, until you've read n charcters.

The character to be added starts as "1", and we start by reading s[2], which tells us to add two "1"s.

Start with a count of 1, and add 1 to it everytime a "1" is read.

In languages where string are not mutable, using a mutable list will be faster. 

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```kotlin []
class Solution {
    fun magicalString(n: Int): Int {
        var s = mutableListOf(1, 2, 2)
        var v = 1
        var i = 2
        var count = 1
        while (i < n) {
            val c = s[i]
            s.add(v)
            if (c == 1) {
                ++count
            } else {
                s.add(v)
            }
            v = v xor 3
            ++i
        }

        //println(s)
        //println(ss)
        return count
    }
}
```