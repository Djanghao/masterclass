# Dart Solution

**Author:** latrygin160902
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/4002234/](https://leetcode.com/problems/longest-nice-substring/solutions/4002234/)

---

# Code
```
class Solution {
    String longestNiceSubstring(String s) {
        if (s.length < 2) return "";
        Set<String> charSet = Set();
        for (var c in s.split('')) {
            charSet.add(c);
        }

        for (var i = 0; i <= s.length - 1; i++) {
            var upperCaseChar = s[i].toUpperCase();
            var lowerCaseChar = s[i].toLowerCase();

            if (charSet.contains(upperCaseChar) 
            && charSet.contains(lowerCaseChar)) {
                continue;
            }
            
            var str1 = longestNiceSubstring(s.substring(0, i));
            var str2 = longestNiceSubstring(s.substring(i + 1));
            return (str1.length >= str2.length) ? str1 : str2;
        }
        
        return s;
    }
}
```