# 100% Dart Solution W/ Explanation (DP+Memo)

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/3573293/](https://leetcode.com/problems/combination-sum-iv/solutions/3573293/)

---

# Approach

(uses DP, Recursion, and Memoization)

Given a list of options (nums) where each value is unique and each value can be used as many times as you would like return the number of permutations that can add up to the target value.

To solve this I used DP and memoization. The first thing to understand is since the nums list will not change as you recurse you can use a simple memoization technique because you do not have changing constraints depending on which numbers have been used in the past. Given this each time you run into a target value you can check how many ways that target can become 0 if the problem has been done before return the answer if not recurse to find all possible ways to reach 0 from that position with the options in the nums list. Then return the possible ways to do it to the parent. Continue doing this until all nums have been iterated through and return the final number of satisfying permutations.

Time: 282ms Beats: 100%
Memory: 141.7MB Beats: 100%



# Code
```
class Solution {
  Map<int,int> memo = {};
  int combinationSum4(List<int> nums, int target) {
      if(memo[target] != null){
          return (memo[target] ?? 0);
      }
      if(target <= 0){
        if(target == 0){
            return 1;
        }
        if(target < 0){
            return 0;
        }
      }
      int return_val = 0;
      for(int i = 0 ; i < nums.length ; ++i){
          return_val += combinationSum4(nums, target - nums[i]);
      }
      memo[target] = return_val;
      return return_val;
  }
}
```