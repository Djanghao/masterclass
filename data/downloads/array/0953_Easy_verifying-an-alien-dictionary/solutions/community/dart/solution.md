# Dart Solution

**Author:** tashtanov333
**Votes:** 0
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3379086/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3379086/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:80%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool isAlienSorted(List<String> words, String order) {
      for(int i=0;i<words.length-1;i++){
          if(order.indexOf(words[i][0])>order.indexOf(words[i+1][0]))return false;
          else if(order.indexOf(words[i][0])==order.indexOf(words[i+1][0])){
              if(words[i].length<words[i+1].length){
                  for(int j=0;j<words[i].length;j++){
                      if(order.indexOf(words[i][j])>order.indexOf(words[i+1][j]))return false;
                  }
              }
              else{
                  for(int j=0;j<words[i+1].length;j++){
                      if(words[i].length!=words[i+1].length&&j==words[i+1].length-1&&order.indexOf(words[i][j])==order.indexOf(words[i+1][j]))return false;
                      if(order.indexOf(words[i][j])>order.indexOf(words[i+1][j]))return false;
                  }
              }

          }
          
      }
      return true;
  }
}
```