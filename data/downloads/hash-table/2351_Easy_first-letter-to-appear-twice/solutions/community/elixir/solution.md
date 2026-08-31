# Java Easiest and Smallest Code

**Author:** DivyanshuShukla82
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/4625058/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/4625058/)

---



# Complexity
- Time complexity: **O(N)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public char repeatedCharacter(String s) {
        int[] count = new int[26];
        for(int i = 0 ; i < s.length() ; i++)
        {
            count[s.charAt(i) - 'a']++;
            if(count[s.charAt(i) - 'a'] == 2)
                return s.charAt(i);
        }
        return '1';
    }
}
```