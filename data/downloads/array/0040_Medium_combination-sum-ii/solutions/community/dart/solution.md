# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/5628859/](https://leetcode.com/problems/combination-sum-ii/solutions/5628859/)

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
  List<List<int>> combinationSum2(List<int> candidates, int target) {
    List<List<int>> ans = [];
    candidates.sort();

    void backtrack(int t, int index, List<int> nums) {
      if (t < 0) {
        return;
      }

      if (t == 0) {
        ans.add(List.from(nums));
      }

      for (int i = index; i < candidates.length; i++) {
        if (i > index && candidates[i] == candidates[i - 1]) {
          continue;
        }
        nums.add(candidates[i]);
        backtrack(t - candidates[i], i + 1, nums);
        nums.removeLast();
      }
    }

    backtrack(target, 0, []);

    return ans;
  }
}
```