# [explained with comments] Kick out people, who finished their meetings.

**Author:** theOddRedBit
**Votes:** 29
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/796229/](https://leetcode.com/problems/meeting-rooms-ii/solutions/796229/)

---

Explaination.
So, in this case. Once we have sorted the meetings with the start time, we know that a new meeting can't be started in one of the same rooms, until a meeting ends.
So,  whenever a new meeting is about to start, checks first, if any of the rooms have people from a meeting which was already over, and if yes, kick them out and then occupies that room. if none of the rooms are empty, create another room.

At the end, we just calculate the total number of rooms created.

```
class Solution {
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        // sort the meetings by starting time. 
        // we start by creating rooms for the meetings and putting them in a heap
        // minHeap of their finish times.
        // whenever a new meeting is seen, we check the top of the heap, if
        // it is supposed to be finished before this meeting starts, then we can
        // occupy the same room. In that case, just let that meeting finish (pop the
        // heap min) and insert this meeting.
        // If the earliest finishing meeting is after this meeting could start, we 
        // need a new room. In that case, when we add another meeting, we check the
        // number of rooms currently required.
        sort(intervals.begin(), intervals.end(), CompareFunc());
        
        priority_queue<int, vector<int>, greater<int>> pq;
        
        for (auto v : intervals) {
            // check if the last meetings need to be completed
            // before this meeting starts.
            if (!pq.empty() && pq.top() <= v[0]) {
                pq.pop();
            }
            
            // start this meeting and enter the end time.
            pq.push(v[1]);
        }
        
        return pq.size();
    }
};
```

sidenote : I thought previously that this question is similar to the merge intervals questions. but it was not...and wasted an hour trying to come up with two pointers solution.  ugh