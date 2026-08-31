# Simple Dart Solution (DP+Memo)

**Author:** AndreLock
**Votes:** 2
**Link:** [https://leetcode.com/problems/jump-game-ii/solutions/3573704/](https://leetcode.com/problems/jump-game-ii/solutions/3573704/)

---

# Approach
Recursively travel each path ending if you find a value in the list that has been traveled to in less jumps then the current or if you reach the end.


# Code
```
class Solution {
  List<int> memo = [];
  int jump(List<int> nums) {
      memo = List.filled(nums.length, 1000000000);
      return shortest_jump(nums, 0 , 0);
  }
  int shortest_jump(List<int> nums, int index, int jumps){
      if(index >= nums.length - 1){
          return jumps;
      }
      if(memo[index] <= jumps){
          return 10000000;
      }
      memo[index] = jumps;
      int min = 100000000;
      for(int i = nums[index] ; i >= 1 ; --i){
          int curr = shortest_jump(nums, index + i , jumps + 1);
          if(curr < min){
              min = curr;
          }
      }
      return min;
  }
}
```