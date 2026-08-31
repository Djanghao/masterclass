# Java very easy solution! expand intervals from start and end

**Author:** karta134033
**Votes:** 16
**Link:** [https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/1881138/](https://leetcode.com/problems/amount-of-new-area-painted-each-day/solutions/1881138/)

---

Simply apply same logic on start point and end point for each paint
```
class Solution {
    TreeMap<Integer, Integer> intervals = new TreeMap<>();
    public int[] amountPainted(int[][] paint) {
        int n = paint.length;
        int[] res = new int[n];
        for(int i = 0; i < n; ++i) {
            int start = paint[i][0];
            int end = paint[i][1];
            int area = end - start;
            
            // find intervals from start point
            while (intervals.floorKey(start) != null) {  // expand interval when two intervals overlap
                int prevStart = intervals.floorKey(start);
                int prevEnd = intervals.get(prevStart);
                if (prevEnd <= start) {  // no more overlap
                    break;
                }
                area -= Math.min(end, prevEnd) - Math.max(start, prevStart);  // substract overlap
                start = Math.min(start, prevStart);  // expand
                end = Math.max(end, prevEnd);
                intervals.remove(prevStart);  // the [prevStart, prevEnd] will be replaced by [start, end]
            }
            // find intervals from end point
            while (intervals.floorKey(end) != null) {  // expand interval when two intervals overlap
                int prevStart = intervals.floorKey(end);
                int prevEnd = intervals.get(prevStart);
                if (prevEnd <= start) {
                    break;
                }
                area -= Math.min(end, prevEnd) - Math.max(start, prevStart);  // substract overlap
                start = Math.min(start, prevStart);  // expand
                end = Math.max(end, prevEnd);
                intervals.remove(prevStart);
            }
            
            res[i] = area;
            intervals.put(start, end);
        }
        return res;
    }
}