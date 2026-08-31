# Simple C# solution with explanation | Beat 88% |

**Author:** upskillNw
**Votes:** 3
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/4212418/](https://leetcode.com/problems/meeting-rooms-ii/solutions/4212418/)

---

# Approach
Iteration, sort and comparison

# Complexity
Time Complexity: O(Nlog\u2061N) because all we are doing is sorting the two arrays for start timings and end timings individually and each of them would contain NNN elements considering there are NNN intervals.

Space Complexity: O(N) because we create two separate arrays of size NNN, one for recording the start times and one for the end times.

# Code
```

using System;
using System.Linq;

public class Solution {
    public int MinMeetingRooms(int[][] intervals) {
        
        // Check for the base case. If there are no intervals, return 0
        if (intervals.Length == 0) {
            return 0;
        }

        int[] start = new int[intervals.Length];
        int[] end = new int[intervals.Length];

        for (int i = 0; i < intervals.Length; i++) {
            start[i] = intervals[i][0];
            end[i] = intervals[i][1];
        }

        // Sort the intervals by end time
        Array.Sort(end);

        // Sort the intervals by start time
        Array.Sort(start);

        // The two pointers in the algorithm: endPointer and startPointer.
        int startPointer = 0, endPointer = 0;

        // Variables to keep track of maximum number of rooms used.
        int usedRooms = 0;

        // Iterate over intervals.
        while (startPointer < intervals.Length) {

            // If there is a meeting that has ended by the time the meeting at `startPointer` starts
            if (start[startPointer] >= end[endPointer]) {
                usedRooms -= 1;
                endPointer += 1;
            }

            // We do this irrespective of whether a room frees up or not.
            // If a room got free, then this usedRooms += 1 wouldn't have any effect. usedRooms would
            // remain the same in that case. If no room was free, then this would increase usedRooms
            usedRooms += 1;
            startPointer += 1;

        }

        return usedRooms;
    }
}

```