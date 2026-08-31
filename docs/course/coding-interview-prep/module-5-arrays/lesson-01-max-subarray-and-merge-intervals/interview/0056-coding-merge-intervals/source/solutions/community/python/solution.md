# 7 lines, easy, Python

**Author:** StefanPochmann
**Votes:** 577
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/21227/](https://leetcode.com/problems/merge-intervals/solutions/21227/)

---

Just go through the intervals sorted by start coordinate and either combine the current interval with the previous one if they overlap, or add it to the output by itself if they don't.

    def merge(self, intervals):
        out = []
        for i in sorted(intervals, key=lambda i: i.start):
            if out and i.start <= out[-1].end:
                out[-1].end = max(out[-1].end, i.end)
            else:
                out += i,
        return out