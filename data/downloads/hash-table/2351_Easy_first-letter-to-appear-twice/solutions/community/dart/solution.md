# simplified

**Author:** Alto-b
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-letter-to-appear-twice/solutions/4410867/](https://leetcode.com/problems/first-letter-to-appear-twice/solutions/4410867/)

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
  String repeatedCharacter(String s) {
    List<String> chars=[];
    String c='';
  for(c in s.split('')){
    if(chars.isNotEmpty){
      if(chars.contains(c)){
        return c;
      }
      chars.add(c);
    }else{
      chars.add(c);
    }
  }
  return c;
  }
}
```