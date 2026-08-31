# Dart Majority

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771802/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771802/)

---

# Code
```dart
class Solution {
    int minimumIndex(List<int> nums) {

    int majority() {
      int count = 0, res = -1;
      for (int v in nums) {
        if (v == res) {
          count++;
        } else {
          if (count == 0) {
            res = v;
            count = 1;
          } else {
            count--;
          }
        }
      }
      count = 0;
      for (int v in nums) {
        if (v == res)
          count++;
      }
      return count * 2 > nums.length ? res : -1;
    }
    final maj = majority();
    if (maj == -1) return -1;

    int right = 0;
    for (int v in nums) if (v == maj) right++;
    for (int i = 0, left = 0; i < nums.length - 1; i++) {
      if (nums[i] == maj) {
        left++;
        right--;
      }
      if (left * 2 > (i + 1) && right * 2 > (nums.length - i - 1))
        return i;
    }
    return -1;
  }

}
```