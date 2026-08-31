# Easy Dart Solution

**Author:** aka__sh__k__
**Votes:** 2
**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/4551809/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/4551809/)

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
  bool halvesAreAlike(String s) { 
  String alpha=s.toLowerCase();
  List<String>vowels=['a','e','i','o','u'];
  int count1=0;
  int count2=0;
  String word1=alpha.substring(0,alpha.length~/2);
  String word2=alpha.substring(alpha.length~/2,alpha.length);
  for(int i=0;i<word1.length;i++){
      if(vowels.contains(word1[i])){
          count1++;
      }if(vowels.contains(word2[i])){
          count2++;
      }
  }if(count1==count2){
      return true;
  }else{
      return false;
  }
  }
}
```