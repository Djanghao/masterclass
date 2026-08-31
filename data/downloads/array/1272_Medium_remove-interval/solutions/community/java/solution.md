# Add only what is outside the to-be-removed interval

**Author:** timheiko
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-interval/solutions/936992/](https://leetcode.com/problems/remove-interval/solutions/936992/)

---

For each interval, check these two conditions:
- If it starts to the left of the to-be-removed interval, add `its starting point`, and `the min of its ending point and the starting point of the to-be-removed interval`.
- If it ends to the right of the to-be-removed interval, add `the max of its starting point and the ending point of the to-be-removed interval`, and `its ending point`.

Complete intervals or their section laying inside the to-be-removed interval are omitted.

```
class Solution {
    public List<List<Integer>> removeInterval(int[][] intervals, int[] toBeRemoved) {
        int start = toBeRemoved[0];
        int end = toBeRemoved[1];
        List<List<Integer>> result = new ArrayList<>();
        for (int[] interval : intervals) {
            int s = interval[0];
            int e = interval[1];
            if (s < start) {
                result.add(Arrays.asList(s, Math.min(e, start)));
            }
            if (e > end) {
                result.add(Arrays.asList(Math.max(end, s), e));
            }
        }
        return result;
    }
}
```