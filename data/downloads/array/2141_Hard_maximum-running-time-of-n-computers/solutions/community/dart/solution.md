# [Dart] Binary Search

**Author:** thanhsontruong
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3822643/](https://leetcode.com/problems/maximum-running-time-of-n-computers/solutions/3822643/)

---



# Code
```
class Solution {
  int maxRunTime(int n, List<int> batteries) {
    int l = 1, r = batteries.reduce((a, b) => a + b);
    batteries.sort();
    while (l < r) {
      int mid = l + (r - l + 1) ~/ 2;
      if (possible(mid, n, batteries)) {
        l = mid;
      } else {
        r = mid - 1;
      }
    }

    return l;
  }

  bool possible(int hours, int n, List<int> batteries) {
    int sum = 0;
    for (int i = 0; i < batteries.length; i++) {
      sum += batteries[i];
      if (sum >= hours) {
        sum -= hours;
        n--;
      }
      if (n == 0) return true;
    }
    return false;
  }
}
```