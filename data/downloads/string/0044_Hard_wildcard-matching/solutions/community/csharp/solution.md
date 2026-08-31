# Wildcard Matching - C# Solution

**Author:** flyneth
**Votes:** 5
**Link:** [https://leetcode.com/problems/wildcard-matching/solutions/3217667/](https://leetcode.com/problems/wildcard-matching/solutions/3217667/)

---

C# Solution:\r
\r
# Code\r
```C#\r
public class Solution\r
{\r
    public bool IsMatch(string s, string p)\r
    {\r
        var i = 0;\r
        var j = 0;\r
        var star = -1;\r
        var m = -1;\r
\r
        while (i < s.Length)\r
        {\r
            if (j < p.Length && (p[j] == '?' || p[j] == s[i]))\r
            {\r
                i++;\r
                j++;\r
\r
                continue;\r
            }\r
\r
            if (j < p.Length && p[j] == '*')\r
            {\r
                star = j++;\r
                m = i;\r
\r
                continue;\r
            }\r
\r
            if (star >= 0)\r
            {\r
                j = star + 1;\r
                i = ++m;\r
\r
                continue;\r
            }\r
\r
            return false;\r
        }\r
\r
        while (j < p.Length && p[j] == '*')\r
        {\r
            j++;\r
        }\r
\r
        return j == p.Length;\r
    }\r
}\r
```