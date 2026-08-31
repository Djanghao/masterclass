# Python3 || Heapq || Faster Solution with explanation

**Author:** bvian
**Votes:** 37
**Link:** [https://leetcode.com/problems/course-schedule-iii/solutions/2185553/](https://leetcode.com/problems/course-schedule-iii/solutions/2185553/)

---

We start learning courses with earliest closing date first. If we find a course that can't fit into its close date, we can un-learn one of the previous course in order to fit it in. We can safely un-learn a previous course because it closes earlier and there is no way for it to be picked up again later. We pick up the one with longest learning time to un-learn, if the longest learning time happend to be the newly added course, then it is equivalent to not learning the newly added course.

```
class Solution:
    def scheduleCourse(self, courses: List[List[int]]) -> int:
        courses.sort(key=lambda c: c[1])
        A, curr = [], 0
        for dur, ld in courses:
            heapq.heappush(A,-dur)
            curr += dur
            if curr > ld: curr += heapq.heappop(A)
        return len(A)
```