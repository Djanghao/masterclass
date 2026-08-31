# Easy dart Solution !

**Author:** jasijasu959
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/5204712/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/5204712/)

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
  String firstPalindrome(List<String> words) {

    for(var word in words){  
        String reverse = word.split('').reversed.join().toString();
        if(word == reverse){
          return word;
        }
    }
    return '';
  }
}
```