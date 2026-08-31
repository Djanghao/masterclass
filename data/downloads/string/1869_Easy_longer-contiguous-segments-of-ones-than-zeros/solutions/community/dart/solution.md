# Dart Easy Solution

**Author:** Dilshad_22
**Votes:** 1
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/4408933/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/4408933/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n) 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  bool checkZeroOnes(String s) {
    int countOfOne=0;
    int maxOne=0;
    int maxZero=0;
    int countOfZero=0;
    for(int i=0;i<s.length;i++){
       if(s[i]=='1'){
         countOfOne+=1;
         countOfZero=0;
         if(countOfOne>maxOne){
           maxOne=countOfOne;
         }
       }else{
         countOfZero+=1;
         countOfOne=0;
         if(countOfZero>maxZero){
           maxZero=countOfZero;
         }
       }
    }
    return maxOne>maxZero;
  }
}
```