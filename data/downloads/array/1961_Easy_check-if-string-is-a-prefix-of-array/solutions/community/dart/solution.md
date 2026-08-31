# one of the easiest solution

**Author:** Alto-b
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/4432005/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/4432005/)

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
  bool isPrefixString(String s, List<String> words) {
      for(int i=0;i<words.length;i++){
          if(s.startsWith(words[i])){
              s = s.replaceFirst(words[i],'');
          }
          else{
              return false; 
          }
          if(s.isEmpty){
              return true;
          }
      }
      return s.isEmpty;
  }
}
```