# using Set

**Author:** Ajaymanikandan
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/5110144/](https://leetcode.com/problems/longest-palindrome/solutions/5110144/)

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
  int longestPalindrome(String s) {
   Set<String>se={};
   int palindrome=0;
   for(var char in s.split('')){
    if(se.contains(char)){
        se.remove(char);
        palindrome+=2;
    }else{
        se.add(char);
    }
   }
     if (se.isNotEmpty) {
    palindrome ++;
  }
   return palindrome;
  }
}
```