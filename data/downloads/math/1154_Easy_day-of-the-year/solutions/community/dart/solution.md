# Beats 100% Fasted solution

**Author:** AHMADAR
**Votes:** 0
**Link:** [https://leetcode.com/problems/day-of-the-year/solutions/5978438/](https://leetcode.com/problems/day-of-the-year/solutions/5978438/)

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
```dart []
class Solution {
    int dayOfYear(String date) {
    List<int> dayPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var day = int.parse(date[date.length - 2] + date[date.length - 1]);
    var month = int.parse(date.substring(5, 7));
    var year = int.parse(date.substring(0, 4));

    var isLeap = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
    var days = 0;
    if (month == 1) {
      return day;
    }
    for (int i = 0; i < month - 1; i++) {
      if (i == 1) {
        if (isLeap) {
          days += 29;
        } else {
          days += dayPerMonth[i];
        }
      } else {
        days += dayPerMonth[i];
      }
    }
    return days + day;
  }
}
```