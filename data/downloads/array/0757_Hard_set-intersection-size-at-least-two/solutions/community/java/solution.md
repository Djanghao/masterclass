# Java- 13 lines of code- Based on sorting the intervals TC: O(nlogn)

**Author:** mvahidalizadeh
**Votes:** 15
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/1050159/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/1050159/)

---

Firstly, we need to sort the intervals. Then, we add the end and end-1 of the first interval. Then, we look at the boundaries of the current interval. We need to either add zero, one, or at most two points to make the current interval fit the problem condition. 

```
    public int intersectionSizeTwo(int[][] intervals) {
        int n = intervals.length;
        Arrays.sort(intervals, (a, b) -> a[1] == b[1] ? a[0] - b[0] : a[1] - b[1]); // Sort intervals: 1- end 2- start- O(nlogn)
        List<Integer> res = new ArrayList<>();
        res.add(intervals[0][1] - 1); // Add one before end
        res.add(intervals[0][1]); // Add end
        for (int i = 1; i < n; i++) { // O(n)
            int start = intervals[i][0], end = intervals[i][1], size = res.size(), last = res.get(size - 1), secondLast = res.get(size - 2);
            if (start > last) { // We need to add two fresh points
                res.add(end - 1);
                res.add(end);
            } else if (start == last) res.add(end); // We already added one. We need to add the end of this interval
            else if (start > secondLast) res.add(end); // We already added last. We need one more
        }
        return res.size();
    }
```