# Solution in Dart

**Author:** Allicolyer
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/4263555/](https://leetcode.com/problems/minimum-time-difference/solutions/4263555/)

---

# Intuition
Brute force would be to sort the times and find the minimum difference between each value and its neighbor.

We can convert each time to total minutes by parsing the string and multiplying the first number by 60 and adding the second number.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: This would be O(n) to convert each time , nlog(n) to sort and then we need to do n comparisions In total this would be n + nlog(n) + n => nlog(n)

- Space complexity: Since we are storing each time in a list, its O(n) for space complexity

# Code
```
class Solution {
  int findMinDifference(List<String> timePoints) {
    // Brute force would be to sort the times and find the minimum difference between
    // each value and its neighbor
    // we can convert each time to total minutes by parsing the string and multiplying
    // the first number by 60 and adding the second number.

    // This would be O(n) to convert, nlog(n) to sort and then we need to do n comparisions
    // In total this would be n + nlog(n) + n
    List<int> times = timePoints.map((t) {
      final List<String> list = t.split(":");
      //TODO this is a huge assumption that the data is properly formatted
      return int.parse(list[0]) * 60 + int.parse(list[1]);
    }).toList();

    times.sort();

    int minmumTime = 999999999999;

    for (int i = 0; i < times.length; i++) {
      // Compare with its neighbor. If you are at the last thing inm this list,
      // compare with the first value in the list
      if (i == times.length - 1) {
        int correctedFirstTime = times[0] + 1440;
        minmumTime = min(correctedFirstTime - times[i], minmumTime);
      } else {
        minmumTime = min(times[i + 1] - times[i], minmumTime);
      }
    }
    return minmumTime;
  }
}

```