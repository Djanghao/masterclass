# C# Solution for Non Overlapping Intervals Problem

**Author:** Aman_Raj_Sinha
**Votes:** 9
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/3785581/](https://leetcode.com/problems/non-overlapping-intervals/solutions/3785581/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to sort the intervals based on their end points. By doing so, we can ensure that intervals with smaller end points come first in the sorted list.

# Approach
<!-- Describe your approach to solving the problem. -->
The code starts by checking if the number of intervals is less than or equal to 1, in which case no removal is needed, so the function returns 0.

Next, the intervals are sorted based on their end points in ascending order using the Array.Sort method. This allows us to consider intervals with smaller end points first.

The code then initializes a count variable to keep track of the number of intervals that need to be removed. It also initializes an end variable to store the end point of the first interval.

The implementation iterates through the sorted intervals starting from the second interval. For each interval, if its start point is less than the current end value, it means there is an overlap with the previous interval, so the count is incremented. Otherwise, if there is no overlap, the end variable is updated to the end point of the current interval.

Finally, the function returns the count, which represents the minimum number of intervals that need to be removed to make the rest of the intervals non-overlapping.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(n log n), where n is the number of intervals. This is because we first sort the intervals, which takes O(n log n) time. Then, we iterate through the sorted intervals once, which takes O(n) time. Therefore, the dominant factor is the sorting operation.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(1) because we only use a constant amount of extra space for variables, regardless of the size of the input.

# Code
```
public class Solution {
    public int EraseOverlapIntervals(int[][] intervals) {
        if (intervals.Length <= 1)
        return 0;
    
        // Sort the intervals based on their end points in ascending order
        Array.Sort(intervals, (a, b) => a[1].CompareTo(b[1]));
        
        int count = 0;
        int end = intervals[0][1];
        
        // Iterate through the sorted intervals
        for (int i = 1; i < intervals.Length; i++) {
            // If the current interval overlaps with the previous one, increment count
            // and update the end point to the minimum end point
            if (intervals[i][0] < end) {
                count++;
            } else {
                end = intervals[i][1];
            }
        }
        
        return count;
    }
}
```