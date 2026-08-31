# Simple and easy to understand solution using PriorityQueue

**Author:** octavioc
**Votes:** 0
**Link:** [https://leetcode.com/problems/employee-free-time/solutions/4872456/](https://leetcode.com/problems/employee-free-time/solutions/4872456/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This is a problem like merging k sorted list but trying to find space between the intervals

# Approach
Use a priority queue sorted by start of initial interval of each person


# Complexity
- Time complexity: $$O(n* log k)$$ 

- Space complexity: $$O(n)$$

# Code
```
/*
// Definition for an Interval.
public class Interval {
    public int start;
    public int end;

    public Interval(){}
    public Interval(int _start, int _end) {
        start = _start;
        end = _end;
    }
}
*/

public class Solution {
    public IList<Interval> EmployeeFreeTime(IList<IList<Interval>> schedule) {
        var pq = new PriorityQueue<(int person, int index), int>();
        for (int i = 0; i < schedule.Count; i++) {
            pq.Enqueue((i, 0),schedule[i][0].start);
        }
        List<Interval> res = new();
        int prev = schedule[pq.Peek().person][pq.Peek().index].start;
        while (pq.Count>0) {
            (int person, int index) = pq.Dequeue();
            Interval interval = schedule[person][index];
            if (interval.start > prev) {
                res.Add(new Interval(prev, interval.start));
            }
            prev = Math.Max(prev, interval.end);
            if (schedule[person].Count > index + 1) {
                pq.Enqueue((person, index + 1),schedule[person][index+1].start);
            }
        }
        return res;
    }
}
```