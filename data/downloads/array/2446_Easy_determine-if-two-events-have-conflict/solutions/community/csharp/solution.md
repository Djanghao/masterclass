# C# fast 1-liner without parsing | 86ms 98%

**Author:** Legon2k
**Votes:** 2
**Link:** [https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/3076938/](https://leetcode.com/problems/determine-if-two-events-have-conflict/solutions/3076938/)

---

Provided times are sortable (comparable). We can use it for comparing without parsing string to TimeSpan, int or whatever.

To check if two intervals have common intersection could be used next logic

max(start1, start2) <= min(end1, end2)

It could be simplified. For example for first interval start1 is always less or equal than end1. We do not need to check this by min(..) implicitly. Instead we could use explicit start1 <= end2 from logic above. The same logic apply for second interval and get start2 <= end1. If it is still not clear, check detailed transformation after the code (below)

After simplification logic will be next

start1 <= end2 && start2 <= end1

# Code
```
public class Solution {
    public bool HaveConflict(string[] event1, string[] event2) 
        => event1[0].CompareTo(event2[1]) <= 0 &&
           event2[0].CompareTo(event1[1]) <= 0;
}
```

1) max(start1, start2) <= min(end1, end2)

2) start1 <= min(end1, end2) 
   && 
   start2 <= min(end1, end2)
 
3) start1 <= end1 && start1 <= end2
   && 
   start2 <= end1 && start2 <= end2

4) ~~start1 <= end1~~$ && start1 <= end2  (removing self interval-1)
   && 
   start2 <= end1 && ~~start2 <= end2~~  (removing self interval-2)

5) start1 <= end2 && start2 <= end1 
