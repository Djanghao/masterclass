# Dart Solution 💯

**Author:** michaelopoku790
**Votes:** 1
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/3438836/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/3438836/)

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
  int firstUniqChar(String s) {
      final inputArr = s.split('');
      for (final value in inputArr){
          if(inputArr.indexOf(value) == inputArr.lastIndexOf(value) ){
              return inputArr.indexOf(value);
          }
      }
      return -1;
  }
}
```