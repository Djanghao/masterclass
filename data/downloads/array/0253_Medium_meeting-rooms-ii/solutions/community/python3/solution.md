# [Python3] Min heap with explaination

**Author:** zhanweiting
**Votes:** 49
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/373235/](https://leetcode.com/problems/meeting-rooms-ii/solutions/373235/)

---


*  we need to know when we need a new room and when we can share the room.  
* We sort the interval time slot by the start time.
*  The definition of overlap: the end time of the current time slot is larger than the begin time of the next time slot, [1,11],[10,19], 11 > 10, there is an overlap
* If there is an overlap between the current time slot and the smallest end time in the minimum heap. we need a new room for the meeting.
* If there is no overlap between the current time and the smallest end time in the minimum heap, we don't need a new room for the meeting since we can use the the same room of the smallest end time. But we still need the end time in the future to help us decide whether we have an overlap or not. 
* We use a minimum heap to store the k-largest end time we meet until now. If the current time slot's begin time is larger than the smallest end time in the minimum heap == we don't have overlap ==  we don't need a new room == we can share the room with the smallest end time in the minimum heap.However, we need to update the minimum heap by using replace method. If the current time slot's begin time is less than the smallest end time in the minimum heap, we have an overlap now, i.e., we need a new room, we need to push the current time slot's end time into the minimum heap.
* heapq.heapreplace(heap, item)
Pop and return the smallest item from the heap, and also push the new item. The heap size doesn't change.
```
import heapq
class Solution:
    def minMeetingRooms(self, intervals: List[List[int]]) -> int:
        """
        [[0,30],[5,10],[9,15],[15,18],[16,18],[19,20],[40,41] ]
        [0                                    30]
            [5  10]
               [9    15]
                     [15     18]
                         [16 18]
                                  [19 20] 
                                                   [40  41]
        [0,30],  h =[30]
        [5,10],  h =[10,30]
        [9,15],  h =[10,15,30]
        [15,18], h =[15,18,30]
        [16,18], h =[18,18,30]
        [19,20], h= [18,20,30]
		[40,41], h =[20,30,40]
        """
        h =[]
        sort = sorted(intervals)
        for i in sort:
            # need a new meeting room
            if h == [] or h[0] >i[0]:
                heapq.heappush(h,i[1])
            # don't need a new meeting room, just update the end time
            else:
                heapq.heapreplace(h,i[1])
        return len(h)
```