# Easy Method...!

**Author:** YACN_
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/4209748/](https://leetcode.com/problems/sum-of-unique-elements/solutions/4209748/)

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
    int sum=0;
   
  int sumOfUnique(List<int> nums) {
for(int i=0;i<nums.length;i++){
  bool    flag=true;
    for(int j=0;j<nums.length;j++){
        if(i!=j&&nums[i]==nums[j]){
          flag=false;
           break;
        }
    }
  if(flag){
      sum+=nums[i];
  }
}

return sum;
  }
}
```