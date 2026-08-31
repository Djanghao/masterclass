# Simple Dart Solution (Take Or Leave)

**Author:** AndreLock
**Votes:** 2
**Link:** [https://leetcode.com/problems/subsets/solutions/3580085/](https://leetcode.com/problems/subsets/solutions/3580085/)

---

# Approach
Given a list of nums return all possible subsets where there are no repeats.

To solve this I used it take it leave it approach to ensure no two lists will be the same. If you take it then remove the current first element and on the way down the stack add on the current nums[0]. If you leave it then do not add a value on the way down the stack.

Time: 261ms Beats: 70%
Memory: 141.4MB Beats: 20%


# Code
```
class Solution {
  List<List<int>> subsets(List<int> nums) {
      if(nums.length == 0){
          return [[]];
      }
      List<int> subl = nums.sublist(1);
      List<List<int>> return_take = subsets(subl);
      List<List<int>> return_leave = subsets(subl);
      List<List<int>> return_list = [];
      for(int i = 0 ; i < return_take.length ; ++i){
          return_list.add(return_take[i]);
          return_list[return_list.length - 1].add(nums[0]);
      }
      for(int i = 0 ; i < return_leave.length ; ++i){
          return_list.add(return_leave[i]);
      }
      return return_list;
  }
}
```