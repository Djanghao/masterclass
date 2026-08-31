# Easy  Dart Approach

**Author:** jincykp
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5983256/](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/solutions/5983256/)

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
```dart []
class Solution {
  int specialArray(List<int> nums) {
for(int i=0;i<=nums.length;i++){
     int c=0;
    for(var n in nums){
       
        if(n>=i)
            c++;
    }
        if(c==i)
           return c; 
        
   
}return -1;

  }
}
```