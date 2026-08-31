# [Java] Simple Append and Check | Algorithmic Explanation

**Author:** aayush912
**Votes:** 39
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390325/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/1390325/)

---

*------Please **upvote!** if you like the solution and explanation.  Please put your doubts/queries in the comments section below.  I will try my best to answer them.------*

**Algorithm:**

1.	Keep appending the strings in the array 1-by-1.
2.	If the appended string matches the given string, return true.
3.	If the given string does not contain the appended string, return false.
4.	If the loop terminates, return false.

```
class Solution {
    public boolean isPrefixString(String s, String[] words) {
        StringBuilder res = new StringBuilder ("");
        for (String word : words) {
            res.append (word);
            if (s.equals (res.toString()))
                return true;
            if (s.indexOf (res.toString()) == -1)
                return false;
        }
        return false;
    }
}
```