# Beats 100% all solutions 43ms

**Author:** simdan_official
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/5831741/](https://leetcode.com/problems/meeting-rooms/solutions/5831741/)

---

# Intuition
The meeting has to start one after the order, so the earliest meeting, has to happen first before other. This means we need to sort the meetings by start time.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Sorting the intervals by start time, then check starting from the second interval, if it starts before the last meeting ends.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 
Sorting would take O(nlogn)
Looping through intervals would take O(n)
Total time complexity would be O(n logn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1) no extra space is used.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function canAttendMeetings(intervals: number[][]): boolean {
    intervals.sort((a:number[], b:number[]) => a[0]-b[0]);

    for(let i = 1; i < intervals.length; i++){
        const currentMeeting = intervals[i]
        const prevMeeting = intervals[i-1]
        // if current meeting starts before prev meeting ends
        // this means the user can't attend all meetings
        if (currentMeeting[0] <  prevMeeting[1]) return false
    }

    return true;
};
```