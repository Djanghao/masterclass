# 7+ lines, 3 easy solutions

**Author:** StefanPochmann
**Votes:** 548
**Link:** [https://leetcode.com/problems/insert-interval/solutions/21622/](https://leetcode.com/problems/insert-interval/solutions/21622/)

---

**Solution 1:** (7 lines, 88 ms)

Collect the intervals strictly left or right of the new interval, then merge the new one with the middle ones (if any) before inserting it between left and right ones.

    def insert(self, intervals, newInterval):
        s, e = newInterval.start, newInterval.end
        left = [i for i in intervals if i.end < s]
        right = [i for i in intervals if i.start > e]
        if left + right != intervals:
            s = min(s, intervals[len(left)].start)
            e = max(e, intervals[~len(right)].end)
        return left + [Interval(s, e)] + right

---

**Solution 2:** (8 lines, 84 ms)

Same algorithm as solution 1, but different implementation with only one pass and explicitly collecting the to-be-merged intervals.

    def insert(self, intervals, newInterval):
        s, e = newInterval.start, newInterval.end
        parts = merge, left, right = [], [], []
        for i in intervals:
            parts[(i.end < s) - (i.start > e)].append(i)
        if merge:
            s = min(s, merge[0].start)
            e = max(e, merge[-1].end)
        return left + [Interval(s, e)] + right

---

**Solution 3:** (11 lines, 80 ms)

Same again, but collect and merge while going over the intervals once.

    def insert(self, intervals, newInterval):
        s, e = newInterval.start, newInterval.end
        left, right = [], []
        for i in intervals:
            if i.end < s:
                left += i,
            elif i.start > e:
                right += i,
            else:
                s = min(s, i.start)
                e = max(e, i.end)
        return left + [Interval(s, e)] + right