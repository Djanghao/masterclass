# C# Simple one liner with LINQ

**Author:** DavidLindon
**Votes:** 2
**Link:** [https://leetcode.com/problems/student-attendance-record-i/solutions/3697169/](https://leetcode.com/problems/student-attendance-record-i/solutions/3697169/)

---

# Intuition
If the whole string contains 2 or more 'A' characters  then return false. Use .Count(). If  the string contains 3 L characters in a row, return false. Use .Contains().

The easiest LeetCode question ever.

# Code
```
public class Solution {
    public bool CheckRecord(string s) {
        return s.Count(x=>x == 'A') < 2 && !s.Contains("LLL");
    }
}
```