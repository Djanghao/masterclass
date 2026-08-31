# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/4489030/](https://leetcode.com/problems/wiggle-sort-ii/solutions/4489030/)

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
## Built in Sort
```
class Solution {
  void wiggleSort(List<int> nums) {
    final List<int> ans = List.from(nums);
    ans.sort();
    for (int i = 1; i < nums.length; i+=2) {
        nums[i] = ans.removeLast();
    }

    for (int i = 0; i < nums.length; i+=2) {
        nums[i] = ans.removeLast();
    }
  }
}

```
## Counting Sort
```
class Solution {
  void wiggleSort(List<int> nums) {
    List<int> ans = List.from(nums);
    countingSort(ans);
    for (int i = 1; i < nums.length; i+=2) {
        nums[i] = ans.removeLast();
    }

    for (int i = 0; i < nums.length; i+=2) {
        nums[i] = ans.removeLast();
    }
  }

  void countingSort(List<int> ans) {
      final maxi = ans.reduce(max);
      final List<int> freq = List.filled(maxi + 1, 0);
      final List<int> res = List.filled(ans.length, 0);

      for (final n in ans) {
          freq[n]++;
      }

      for (int i = 1; i <= maxi; i++) {
          freq[i] += freq[i - 1];
      }

      for (int i = ans.length - 1; i >= 0; i--) {
          res[freq[ans[i]] - 1] = ans[i];
          freq[ans[i]]--;
      }

      for (int i = 0; i < res.length; i++) {
          ans[i] = res[i];
      }
  }
}
```