# Dart

**Author:** Aswin_531
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-palindromic-subsequences/solutions/4960678/](https://leetcode.com/problems/remove-palindromic-subsequences/solutions/4960678/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int removePalindromeSub(String s) {
var length = s.length;
if(s ==  s.split('').reversed.join(''))
return 1;
else{
       for (int i = 0; i < length / 2; i++) {
            if (s[i]!= s[length - i - 1]) {
                return 2; 
            }
        }
}
    return 0;
  }
}
```