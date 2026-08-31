# C# Solution

**Author:** panaeimi
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/3667148/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/3667148/)

---


# Code
```
public class Solution {
    public int CountLetters(string s) {
        int count = 1, total = 1;
        for(int i = 1; i < s.Length; i++) {
            if(s[i] == s[i - 1]) {
                count++;
            } else {
                count = 1;
            }
            total += count;
        }
        
        return total;
    }

    public int CountLetters0(string s) {
        int count = 0;
        for(int i = 0, j = 0; j <= s.Length; j++) {
            if(j == s.Length || s[i] != s[j]) {
                count += ((j - i) * (j - i + 1)) / 2;  
                i = j;
            }
        }
        
        return count;
    }
}
```