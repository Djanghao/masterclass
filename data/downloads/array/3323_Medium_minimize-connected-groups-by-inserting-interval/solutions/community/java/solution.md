# Sliding Window in Java

**Author:** iknownothingaboutcoding
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5934729/](https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5934729/)

---

# Intuition
Sort the intervals and collect the gaps, then use sliding window to record the maximum number of gaps that can be covered by k.
The final resule should be:
```
(number of gaps) - (number of covered gaps) + 1
```

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int minConnectedGroups(int[][] intervals, int k) {
        Arrays.sort(intervals, (a, b) -> a[0] == b[0] ? Integer.compare(b[1], a[1]) : Integer.compare(a[0], b[0]));
        List<int[]> gaps = new ArrayList<>();
        int end = intervals[0][1];
        int i = 1;
        while (i < intervals.length) {
            if (intervals[i][0] > end) {
                gaps.add(new int[]{end, intervals[i][0]});
            }
            end = Math.max(end, intervals[i][1]);
            i++;
        }
        int count = 0;
        int covered = 0;
        int l = 0, r = 0;
        while (r < gaps.size()) {
            covered = gaps.get(r)[1] - gaps.get(l)[0];
            while (l < r && covered > k) {
                l++;
                covered = gaps.get(r)[1] - gaps.get(l)[0];
            }
            if (covered <= k) {
                count = Math.max(count, r - l + 1);
            }
            r++;
        }
        return gaps.size() - count + 1;
    }
}
```