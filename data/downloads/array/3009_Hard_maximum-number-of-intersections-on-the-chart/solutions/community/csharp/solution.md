# C# Solution based on Ranges | Dictionary of scaled Y-coordinates

**Author:** Nikita_Danilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/5105636/](https://leetcode.com/problems/maximum-number-of-intersections-on-the-chart/solutions/5105636/)

---

# Intuition
To simplify this problem, we can map the 2D representation to a 1D scale. In other words, each consecutive pair of coordinates can be mapped to a Y-range. To determine the maximum number of intersections with a horizontal line, we need to find a point on our Y-scale that has the most overlaps.

# Approach
See [Sweep Line Algorithms](https://leetcode.com/discuss/study-guide/2166045/line-sweep-algorithms).

This problem can be approached by treating the vertical transitions between consecutive y-values as critical segments where intersections with a horizontal line may occur. By scaling these y-values (multiplying by 2), we can handle mid-points without resorting to floats or doubles. For each vertical segment:

- If the segment rises (i.e., the y-value increases), the start of the segment contributes positively to the count of intersections, and the end contributes negatively (just before the next integer).
- If the segment falls (i.e., the y-value decreases), the segment's start (the lower point) does not immediately count until one unit later, ensuring we accurately account for intersections just at the start or just at the end of a segment.

We utilize a dictionary to keep track of these changes in intersection counts at each critical y-coordinate (scaled). After setting up this dictionary:

- We iterate through the dictionary in order of keys (y-coordinates) and apply changes to an accumulator (count).
- This accumulator tracks the current total number of intersections as we "move" the horizontal line from the bottom to the top of the chart, allowing us to determine the maximum count observed.

# Complexity
- Time complexity: $$O(n log n)$$ for dictionary sort, however we also have almost $$O(2n)$$ dictionary accesses, which are not cheap either.

- Space complexity: $$O(n)$$ needed for the dictionary to store the potential changes in intersection counts at each critical y-coordinate.

# Code
```
public class Solution {
    public int MaxIntersectionCount(int[] y) {
        // Dictionary to store count increments or decrements.
        // Key is an "extended" Y coordinate, to handle mid of ranges.
        // Because float or double can't be a key.
        // Example 1: Values: { 2: +3, 3: +2, 4: -1, 5: -2, 6: -1, 7: -1 }
        var dict = new Dictionary<int, int>(y.Length);

        // Iterate through all pairs as ranges.
        for (int i = 1; i < y.Length; i++) {
            bool isLast = i == y.Length - 1;
            // "Extend" coordinate, multiply by 2 to cover "mid" of range.
            // We can do it without `long` because Y <= 10^9 here.
            int from = 2 * y[i - 1]; 
            int to = 2 * y[i];

            if (from < to) {
                // Normal [1,2]
                // Shift right to before the end of this range, to not count it twice.
                to += isLast ? 0 : -1;
            }
            else {
                // Reversed [2,1]
                (from, to) = (to, from);
                // Shift right to after the start of this range (end before swap), to not count it twice.
                from += isLast ? 0 : +1; // it was `to`.
            }

            // We count +1 at the "from" coordinate.
            DictAddOrSet(dict, from, 1);
            // And -1 right after the "to".
            DictAddOrSet(dict, to + 1, -1);
        }

        // Accumulate counts sorted by Y coordinate.
        int count = 0;
        int max = 0;
        foreach (var pair in dict.OrderBy(x => x.Key)) {
            count += pair.Value;
            max = Math.Max(max, count);
        }

        return max;
    }

    private void DictAddOrSet(Dictionary<int, int> dict, int key, int value) {
        if (dict.ContainsKey(key)) {
            dict[key] += value;
        } else {
            dict[key] = value;
        }
    }
}
```