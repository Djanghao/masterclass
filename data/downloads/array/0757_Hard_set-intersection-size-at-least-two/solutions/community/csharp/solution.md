# Sorting and ArrayList

**Author:** AhmedRagheb
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/3630458/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/3630458/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Sort the intervals, we add the (end) and (end-1) of the first interval. Then, we look at the boundaries of the interval.

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int IntersectionSizeTwo(int[][] intervals) {
        Array.Sort(intervals, (a, b) => {
            if (a[1] == b[1])
                return b[0] - a[0];

            return a[1] - b[1];
        });

        List<int> list = new List<int>
        {
            intervals[0][1] - 1,
            intervals[0][1]
        };

        for (int i = 1; i < intervals.Length; i++) {
            int[] interval = intervals[i];
            int start = interval[0];
            int end = interval[1];

            int lastOne = list[list.Count - 1];
            int lastTwo = list[list.Count - 2];

            if (start > lastOne) {
                list.Add(end - 1);
                list.Add(end);
            }
            else if (start == lastOne || start > lastTwo) 
                list.Add(end);
        }

        return list.Count;
    }
}
```