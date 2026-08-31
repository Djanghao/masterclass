# 3 lines in Ruby

**Author:** StefanPochmann
**Votes:** 6
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/68036/](https://leetcode.com/problems/meeting-rooms-ii/solutions/68036/)

---

First get a sorted list of events (time/change pairs). Then just go through that, updating the number of rooms, and returning the maximum seen.

    def min_meeting_rooms(intervals)
      rooms = 0
      intervals.flat_map { |i| [[i.start, 1], [i.end, -1]] }.sort
               .map { |_, change| rooms += change }.max || 0
    end