# Python heap solution with comments.

**Author:** OldCodingFarmer
**Votes:** 302
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/67917/](https://leetcode.com/problems/meeting-rooms-ii/solutions/67917/)

---

        
    def minMeetingRooms(self, intervals):
        intervals.sort(key=lambda x:x.start)
        heap = []  # stores the end time of intervals
        for i in intervals:
            if heap and i.start >= heap[0]: 
                # means two intervals can use the same room
                heapq.heapreplace(heap, i.end)
            else:
                # a new room is allocated
                heapq.heappush(heap, i.end)
        return len(heap)