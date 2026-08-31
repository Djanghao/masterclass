# Simple solution in dart

**Author:** SachinBhankhar
**Votes:** 0
**Link:** [https://leetcode.com/problems/buddy-strings/solutions/3713247/](https://leetcode.com/problems/buddy-strings/solutions/3713247/)

---

# Complexity
- Time complexity: 0(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 0(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool buddyStrings(String s, String goal) {
      if(s.length!=goal.length) return false;
      
      if(s==goal){
          Map<String,int> frequency = {};
          for(int i=0;i<s.length;i++){
              if(frequency[s[i]]!=null){
                  frequency[s[i]] =  frequency[s[i]]!+1;
              }else{
                  frequency[s[i]]=1;
              }
              if(frequency[s[i]]==2){
                  return true;
              }
          }
      }
      int firstNonMatchingIndex = -1;
      int secondNonMatchingIndex = -1;
      for(int i=0;i<s.length;i++){
        if(s[i]!=goal[i] && firstNonMatchingIndex==-1){
            firstNonMatchingIndex=i;
        }else if(s[i]!=goal[i] && secondNonMatchingIndex==-1){
            secondNonMatchingIndex=i;
        }else if(s[i]!=goal[i]){
            return false;
        }
      }
      if(firstNonMatchingIndex==-1||secondNonMatchingIndex==-1){
          return false;
      }
      return s[firstNonMatchingIndex]==goal[secondNonMatchingIndex]&&
        s[secondNonMatchingIndex]==goal[firstNonMatchingIndex];
  }
}
```