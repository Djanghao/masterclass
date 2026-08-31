# Set and conditions

**Author:** o41rov
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4182928/](https://leetcode.com/problems/find-the-prefix-common-array-of-two-arrays/solutions/4182928/)

---

# Intuition
We can find out that counter of prefix never decreases

# Approach
<!-- Describe your approach to solving the problem. -->
This way about keeping counter of prefix and increase it in three situation:
- If current element from first array equals current element from second array
- If set has current element from first array
- If set has current element from second array

For every step(index) we add current counter

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<int> findThePrefixCommonArray(List<int> first, List<int> second) {
      List<int> result = [];
      Set<int> once = {};
      int count = 0;

      for(int i = 0; i < first.length; i++){
          if(first[i] == second[i]){
              count++;
          } else {
              if(once.contains(first[i])){
                  count++;
              } 
              if(once.contains(second[i])) {
                  count++;
              }
          }
          once.add(first[i]);
          once.add(second[i]);
          result.add(count);
      }
      
      return result;
  }
}
```