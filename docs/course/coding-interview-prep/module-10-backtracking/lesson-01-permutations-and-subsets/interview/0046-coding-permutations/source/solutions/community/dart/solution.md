# Beat 89% in Runtime || Using DART.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutations/solutions/5348040/](https://leetcode.com/problems/permutations/solutions/5348040/)

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
  List<List<int>> permute(List<int> nums) {
    List<List<int>> ans = [];
    List<bool> used = List<bool>.filled(nums.length, false);
helper(ans , [], used, nums);
return ans;
  }
  void helper (List<List<int>> ans,List<int> temp, List<bool> used,List<int> nums ){
   if(temp.length == nums.length){
    ans.add(List<int>.from(temp));
    return;
   }
   for(int i=0; i<nums.length; i++){
     if(used[i]) continue;
     temp.add(nums[i]);
     used[i] = true;
     helper(ans, temp, used, nums);
     temp.removeLast();
     used[i] = false;

   }
  }
}
```