# Easy Approach !

**Author:** jasijasu959
**Votes:** 2
**Link:** [https://leetcode.com/problems/majority-element-ii/solutions/5007551/](https://leetcode.com/problems/majority-element-ii/solutions/5007551/)

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
  List<int> majorityElement(List<int> nums) {
    
    int n=nums.length;
    List<int>store=[];

    for(int i=0;i<n;i++){
        int count=0;
        for(int j=0;j<n;j++){
            if(nums[i]==nums[j]){
                count++;
            }
        }
        if(count>n/3 && !store.contains(nums[i])){
          store.add(nums[i]);
        }
    }
     return store;
  }
}
```