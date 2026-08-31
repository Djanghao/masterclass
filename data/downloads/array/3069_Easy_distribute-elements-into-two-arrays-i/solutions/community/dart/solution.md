# simple dart solution

**Author:** sayedadinan
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4926227/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4926227/)

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
  List<int> resultArray(List<int> nums) {
  List<int>store1=[nums[0]];
  List<int>store2=[nums[1]];
  for(int i=2;i<nums.length;i++){
    if(store1.last>store2.last){
     store1.add(nums[i]);
     print('storeOne$store1');
    }else{
     store2.add(nums[i]);
     print('storetwo$store2');
    }
}
store1.addAll(store2);
return store1;
  }
}
```