# My Python Solution

**Author:** lc_cl_aaa
**Votes:** 43
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/67812/](https://leetcode.com/problems/meeting-rooms/solutions/67812/)

---

    def canAttendMeetings(self, intervals):
        intervals.sort(key=lambda x: x.start)
        
        for i in range(1, len(intervals)):
            if intervals[i].start < intervals[i-1].end:
                return False
            
        return True