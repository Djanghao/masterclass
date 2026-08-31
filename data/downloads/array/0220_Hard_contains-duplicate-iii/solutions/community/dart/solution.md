# Dart Solution

**Author:** Maqcel
**Votes:** 0
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/3721104/](https://leetcode.com/problems/contains-duplicate-iii/solutions/3721104/)

---

# Code
```
class Solution {
  bool containsNearbyAlmostDuplicate(
    List<int> nums,
    int indexDiff,
    int valueDiff,
  ) {
    for (int i = 0; i < nums.length; i++) {
      for (int j = i + 1; j <= i + indexDiff; j++) {
        if (j < nums.length) {
          if ((i - j).abs() <= indexDiff &&
              (nums[i] - nums[j]).abs() <= valueDiff) {
            return true;
          }
        }
      }
    }
    return false;
  }
}

```