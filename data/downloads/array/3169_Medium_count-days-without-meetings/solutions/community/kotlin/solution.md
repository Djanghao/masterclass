# Greedy || Merge Intervals

**Author:** Thiennk
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-days-without-meetings/solutions/5245582/](https://leetcode.com/problems/count-days-without-meetings/solutions/5245582/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- Sort the meetings array based on the starting days of the meetings.
- Iterate through the sorted meetings array to calculate the count of available days.
- Handle the overlapping meetings by adjusting the ending day of the current meeting if needed. ([2,10][5,8]) --> [2,10]
- The count of available days is calculated by considering the gaps between consecutive meetings and the boundaries of the available days.

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun countDays(days: Int, meetings: Array<IntArray>): Int {
        meetings.sortWith({a,b -> a[0]-b[0]})   // sort base on the starting days
        var count = 0;
        count = meetings[0][0] - 1;
        for (i in 1 until meetings.size) {      // no space between intervals
            if (meetings[i][0] <= meetings[i-1][1]) {
                if (meetings[i][1] < meetings[i-1][1])      // if intervals are overlapping
                    meetings[i][1] = meetings[i-1][1]       // merge
            }
            else {   // space exists between intervals, add that space to count
                count += (meetings[i][0] - meetings[i-1][1] - 1)
            }
        }
        count += (days - meetings[meetings.size-1][1])
        return count;
    }
}
```