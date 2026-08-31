# Kotlin || Easy on LinkedList

**Author:** mrtriumpf
**Votes:** 2
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402980/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/3402980/)

---

# Intuition
If you ever wanted to use linkedlist - here is your chance! though it is not optimal, better have an array with pointers, but I will leave that exercise to the reader.

# Complexity
- Time complexity: $$O(n)$$ 

- Space complexity: $$O(n)$$ 

# Code
```
class Solution {
    fun removeStars(s: String): String {
        val list = LinkedList<Char>()

        for (c in s) {
            if (c == '*') {
                list.removeLast()
            } else {
                list.add(c)
            }
        }
        return list.joinToString("")
    }
}
```