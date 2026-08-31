# Dart Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/5141073/](https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k/solutions/5141073/)

---

# Code
```
class Solution {
  int partitionArray(List<int> nums, int k) {
    var arr = nums..sort();

    int left = 0;
    int ans = 1;

    for (var right = 0; right < arr.length; right++) {
      if (arr[right] - arr[left] > k) {
        left = right;
        ans++;
      }
    }
    return ans;
  }
}

```