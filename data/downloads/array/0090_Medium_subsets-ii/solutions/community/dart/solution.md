# Dart Solution (Backtracking)

**Author:** AndreLock
**Votes:** 2
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/3598502/](https://leetcode.com/problems/subsets-ii/solutions/3598502/)

---

# Approach
//Return all subsets of numbers in the nums list where nums
//contains duplicate values

//To solve this I used recursion to go through all possible permutations
//of the numbers list. If it was new then I added it's string representation to 
//a set. If it was not the recursion ended with a null value returned.

//Time: 275ms Beats: 57.14%
//Memory: 143.5MB Beats: 14.29%

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> subsetsWithDup(List<int> nums) {
      nums.sort();
      return allSubsets(nums,[], {});
  }
  List<List<int>> allSubsets(List<int> nums, List<int> current, Set<String> used){
      String curr = current.toString();
      if(used.contains(curr)){
          return [];
      }
      used.add(curr);
      List<List<int>> return_list = [];
      for(int i = 0 ; i < nums.length ; ++i){
          List<int> new_nums = nums.sublist(i + 1);
          int currint = nums[i];
          List<int> new_curr = List.from(current);
          new_curr.add(currint);
          List<List<int>> output = allSubsets(List.from(new_nums), new_curr, used);
          for(List<int> out in output){
              return_list.add(out);
          }
      }
      return_list.add(current);
      return return_list;
  }
}
```