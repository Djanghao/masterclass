# Minimum Time Difference Solution in Java and Scala

**Author:** lokeshwaranm
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/5793408/](https://leetcode.com/problems/minimum-time-difference/solutions/5793408/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

# Approach
<!-- Describe your approach to solving the problem. -->

1. Convert Time to Minutes.
2. Sort the Time Points.
3. Calculate Differences.
4. Differences Betweenn 1 Day (24 * 60) and Last + First
5. Return the Minimum Value.

# Complexity
- Time complexity: O(NLogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int findMinDifference(List<String> timePoints) {
        int[] minutes = new int[timePoints.size()];

        for (int i = 0; i < timePoints.size(); i++) {
            String[] split = split(timePoints.get(i));
            int hour = convertInt(split[0]);
            int min = convertInt(split[1]);
            minutes[i] = (60 * hour) + min;
        }

        Arrays.sort(minutes);

        int[] ans = new int[minutes.length - 1];

        for (int i = 0; i < minutes.length - 1; i++) {
            ans[i] = minutes[i + 1] - minutes[i];
        }

        return Math.min(Arrays.stream(ans).min().orElse(0), (24 * 60) - minutes[minutes.length - 1] + minutes[0]);
    }

    public String[] split(String time) {
        return time.split(":");
    }

    public int convertInt(String time) {
        return Integer.parseInt(time);
    }
}
```
```scala []
import scala.collection.mutable.ListBuffer

object Solution {
    def findMinDifference(timePoints: List[String]): Int = {
        val minutes = timePoints.map(time => {
            val split = time.split(":")
            val hour = split.head.toInt
            val min = split.last.toInt

            (60 * hour) + min
        }).sorted

        val ans = new ListBuffer[Int]()
        for (i <- 0 until minutes.length - 1) {
            ans += minutes(i + 1) - minutes(i)
        }

        Math.min(ans.min, (24 * 60) - minutes.last + minutes.head)
    }
}
```
