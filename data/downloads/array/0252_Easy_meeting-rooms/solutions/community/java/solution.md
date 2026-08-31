# AC clean Java solution

**Author:** jeantimex
**Votes:** 128
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/67786/](https://leetcode.com/problems/meeting-rooms/solutions/67786/)

---

    public boolean canAttendMeetings(Interval[] intervals) {
      if (intervals == null)
        return false;

      // Sort the intervals by start time
      Arrays.sort(intervals, new Comparator<Interval>() {
        public int compare(Interval a, Interval b) { return a.start - b.start; }
      });
      
      for (int i = 1; i < intervals.length; i++)
        if (intervals[i].start < intervals[i - 1].end)
          return false;
      
      return true;
    }