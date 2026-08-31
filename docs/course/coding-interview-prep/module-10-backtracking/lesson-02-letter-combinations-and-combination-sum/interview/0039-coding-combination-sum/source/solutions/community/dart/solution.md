# Best time complexity with  Backtracking.

**Author:** farkhod98
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum/solutions/5946359/](https://leetcode.com/problems/combination-sum/solutions/5946359/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I thought in this problem we need to get all sub combinations of candidates that sum is equal to target. Notice that we can use any candidate more than one, but still target combinations must differ from each other.
# Approach
<!-- Describe your approach to solving the problem. -->
Since this is standart backtracking problem I used backtracking algorithm.
1. Sort the candidates so we can evaluate candidates easyl.
2. Loop over candidats and add next candidate to current list each time if sum of current list match target add the current list to candidates. 
3. Return the current list to backtracking function each time after adding new element.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
# Code
```dart []

class Solution {
  List<List<int>> combinationSum(List<int> candidates, int target) {
    List<List<int>> combinations = [];
    backtracker(List<int> currentCombination, int currentIndex, int currentSum) {
      if (target == currentSum) {
        combinations.add(List.of(currentCombination));
        return;
      } else if (target < currentSum) {
        return;
      }

      for (int i = currentIndex; i < candidates.length; i++) {
        currentCombination.add(candidates[i]);
        currentSum += candidates[i];
        backtracker(currentCombination, i, currentSum);
        currentCombination.removeLast();
        currentSum -= candidates[i];
      }
    }

    backtracker([], 0, 0);
    return combinations;
  }
}

```