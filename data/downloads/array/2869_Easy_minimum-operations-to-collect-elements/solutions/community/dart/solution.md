# BEATS 100%, easy code [DART]

**Author:** Mohamed_Sadeck
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4436789/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4436789/)

---


# Code
```
class Solution {
  int minOperations(List<int> nums, int k) {
      Map<int,bool> map = {};
      int op=0;
      int target=k;
      while(target != 0 && nums.isNotEmpty){
          int last = nums.last;
          if(last<=target){
              map[last]=true;
          }
          while(map[target]??false==true){
              target--;
          }
          nums.removeLast();
          op++;
      }
      return op;
  }
}
```