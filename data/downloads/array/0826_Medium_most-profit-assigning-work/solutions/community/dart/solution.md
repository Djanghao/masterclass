# the fastest in dart

**Author:** ahmed___
**Votes:** 2
**Link:** [https://leetcode.com/problems/most-profit-assigning-work/solutions/5329631/](https://leetcode.com/problems/most-profit-assigning-work/solutions/5329631/)

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
  int maxProfitAssignment(List<int> difficulty, List<int> profit, List<int> worker) {
    List<List<int>> infos = [];
    for (int i = 0; i < difficulty.length; i++) {
      infos.add([difficulty[i], profit[i]]);
    }
    infos.sort((a, b) => a[0] - b[0]);
    
    List<List<int>> maxProfitForDifficulty = [];
    int maxp = 0;
    for (List<int> info in infos) {
      int d = info[0], p = info[1];
      maxp = maxp > p ? maxp : p;
      maxProfitForDifficulty.add([d, maxp]);
    }
    
    int totalProfit = 0;
    for (int w in worker) {
      int ind = binarySearch(maxProfitForDifficulty, w);
      if (ind >= 0 && w >= maxProfitForDifficulty[ind][0]) {
        totalProfit += maxProfitForDifficulty[ind][1];
      }
    }
    return totalProfit;
  }
  
  int binarySearch(List<List<int>> list, int target) {
    int left = 0, right = list.length - 1;
    while (left <= right) {
      int mid = left + (right - left) ~/ 2;
      if (list[mid][0] <= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return right;
  }
}

```