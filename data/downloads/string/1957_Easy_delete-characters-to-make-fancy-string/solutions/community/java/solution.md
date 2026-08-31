# Easy Java Single Pass O(N) Solution with Explanation

**Author:** aayush912
**Votes:** 59
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/1389254/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/1389254/)

---

*------Please **upvote!** if you like the solution and explanation.  Please put your doubts/queries in the comments section below.  I will try my best to answer them.------*

***Intuition:*** If a character is repeating continuously, we will only pick it at most twice in a row.  This is kind of a Greedy idea where we pick characters such that the concatenated frequency is < 3.

***Algorithm:***

1.	Append the first character to the result (no point deleting it!).
2.	Keep a **prev** variable and a **freq** variable marking the frequency of the character seen just before. Initialize **prev** with the first character of the string and **freq** with 1.
3.	If the current character is equal to prev, increment **freq** by 1, else change **prev** to the current character and reset **freq = 1**.
4.	If **freq < 3**, append the current character to the result, else skip the character.
5.	After the loop ends, return the resultant string.

Avoid direct string concatenation because it takes more time as compared to StringBuilder and may cause TLE.

```
class Solution {
    public String makeFancyString(String s) {
        char prev = s.charAt (0);
        int freq = 1;
        StringBuilder res = new StringBuilder ();
        res.append (s.charAt (0));
        for (int i = 1; i < s.length (); i++) {
            if (s.charAt (i) == prev)
                freq++;
            else {
                prev = s.charAt (i);
                freq = 1;
            }
            if (freq < 3)
                res.append (s.charAt (i));
        }
        return res.toString ();
    }
}
```

Please **upvote!** if you like the solution and explanation.
