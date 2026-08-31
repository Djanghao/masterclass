# 🔥Kotlin single line solution | Easy | Explained

**Author:** Dark_Type
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/3833404/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/3833404/)

---


# Approach
 I've used compareTo to determine, if event1 starts earlier or at the same time as event2 ends and and vice versa. (Compare to returns 0 if values are equal, -1 if value in parentheses is bigger and 1 if opposite)



# Code
```
class Solution {
    fun haveConflict(event1: Array<String>, event2: Array<String>): Boolean = event1[0].compareTo(event2[1]) <= 0 && event2[0].compareTo(event1[1]) <= 0
}
```