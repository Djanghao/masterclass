# Solution with explanation

**Author:** Caypoh23
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/5474953/](https://leetcode.com/problems/permutations-ii/solutions/5474953/)

---

# Approach
1. Sort the nums list
2. Create a visited list to keep track of the visited elements
3. Create a current list to keep track of the current permutation
4. Call the dfs function with the nums, visited, current, and result list
5. If the current list length is equal to the nums list length, add the current list to the result list
6. Iterate through the nums list
7. If the element is visited or the element is the same as the previous element and the previous element is not visited, skip the iteration
8. Mark the element as visited
9. Add the element to the current list
10. Call the dfs function with the updated visited, current, and result list
11. Mark the element as not visited
12. Remove the last element from the current list
13. Return the result list

# Complexity
- Time complexity: O(n!) where n is the length of the nums list
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  List<List<int>> permuteUnique(List<int> nums) {
    List<List<int>> result = [];
    List<int> current = [];
    nums.sort();
    List<bool> visited = List.filled(nums.length, false);
    dfs(nums, visited, current, result);
    return result;
  }

  void dfs(
    List<int> nums,
    List<bool> visited,
    List<int> current,
    List<List<int>> result,
  ) {
    if (current.length == nums.length) {
      result.add(List.from(current));
      return;
    }
    for (int i = 0; i < nums.length; i++) {
      if (visited[i] || i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) {
        continue;
      }
      visited[i] = true;
      current.add(nums[i]);
      dfs(nums, visited, current, result);
      visited[i] = false;
      current.removeLast();
    }
  }
}

```