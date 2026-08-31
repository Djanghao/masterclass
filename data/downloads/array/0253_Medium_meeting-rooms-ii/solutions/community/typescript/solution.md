# It's just a series of events

**Author:** davidhudlow
**Votes:** 2
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/3956456/](https://leetcode.com/problems/meeting-rooms-ii/solutions/3956456/)

---

# Approach
Think of starts and ends as a continuous stream of events of two types, start, and end. Now the solution becomes obvious. Sort those events by time and simply iterate through them, incrementing the number of filled meeting rooms whenever a meeting starts and decrementing it when a meeting ends.

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
function minMeetingRooms(intervals: number[][]): number {
    /* Collect all start and end times as events and sort them */
    const events: { type: 'start' | 'end', time: number }[] = [];
    intervals.forEach((interval) => {
        events.push({type: 'start', time: interval[0]});
        events.push({type: 'end', time: interval[1]});
    });
    events.sort((a,b) => a.time - b.time);

    let maxOverlapping = 0;
    let overlapping = 0;

    /* Iterate and track overlapping */
    for (let i = 0; i < events.length; i++) {
        // Only record max when time has moved, otherwise equal time events may not all be counted
        if (events[i-1] && events[i-1].time !== events[i].time) {
            maxOverlapping = Math.max(overlapping, maxOverlapping);
        }
        // Increment when meeting starts, decrement when it ends
        if (events[i].type === 'start') {
            overlapping++;
        } else {
            overlapping--;
        }
    }

    return maxOverlapping;
};

```