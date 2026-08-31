# Simple Dart Solution

**Author:** AndreLock
**Votes:** 2
**Link:** [https://leetcode.com/problems/top-k-frequent-elements/solutions/3550149/](https://leetcode.com/problems/top-k-frequent-elements/solutions/3550149/)

---



# Approach
Place all values into a map that tracks the number of usages of each integer. Then from there iterate through the list k times and pick out the most used integer each time to place in the return list.

# Code
```
class Solution {
  List<int> topKFrequent(List<int> nums, int k) {
      Map<int,int> vals = {};
      List<int> return_list = [];
      for(int i = 0 ; i < nums.length ; ++i){
          vals[nums[i]] = (vals[nums[i]] ?? 0) + 1;
      }
      for(int i = 0 ; i < k ; ++i){
        int current_max = 0;
        int current_val = 0;
        for(var entry in vals.entries){
          if(entry.value > current_max){
            current_max = entry.value;
            current_val = entry.key;
          }
        }
        return_list.add(current_val);
        vals.remove(current_val);
      }
      return return_list;
  }
}
```