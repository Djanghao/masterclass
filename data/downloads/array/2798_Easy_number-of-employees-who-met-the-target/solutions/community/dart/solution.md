# easy one dart

**Author:** sayedadinan
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/4955014/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/4955014/)

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
  int numberOfEmployeesWhoMetTarget(List<int> hours, int target) {
   int count=0;
   for(int i=0;i<hours.length;i++){
    if(hours[i]>=target){
        count+=1;
    }
   }
   return count;
  }
}
```