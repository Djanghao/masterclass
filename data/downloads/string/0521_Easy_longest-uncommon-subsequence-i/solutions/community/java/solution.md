# JAVA SOLUTION IN O(n).

**Author:** Let_MeCODE
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/3003988/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/3003988/)

---



# Approach
1. If the strings are the same, return -1, because there is no uncommon subsequence.
2. If the strings are different, return the length of the string that is longer, because that string will always be an uncommon subsequence of the other string.

# Complexity
- Time complexity:
1. O(n)

- Space complexity:
1. O(1)

# Code
```
class Solution {
    public int findLUSlength(String a, String b) {
       if(a.equals(b)){
           return -1;
       } 
       return Math.max(a.length,b.length);
    }
}
```