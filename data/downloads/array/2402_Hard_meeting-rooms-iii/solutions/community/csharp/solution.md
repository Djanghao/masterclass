# C# Solution for Meeting Rooms III Problem

**Author:** Aman_Raj_Sinha
**Votes:** 4
**Link:** [https://leetcode.com/problems/meeting-rooms-iii/solutions/4745979/](https://leetcode.com/problems/meeting-rooms-iii/solutions/4745979/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this solution is to efficiently allocate meetings to rooms by considering the availability time of each room. It sorts the meetings based on their start times and iterates through them, checking the availability of rooms. If a room is available, the meeting is assigned to that room; otherwise, the meeting is scheduled in the room with the earliest availability time.

# Approach
<!-- Describe your approach to solving the problem. -->
1.	Sort the meetings based on their start times.
2.	Iterate through the sorted meetings.
3.	For each meeting, check the availability of rooms. If an available room is found, assign the meeting to that room and update its availability time.
4.	If no available room is found, schedule the meeting in the room with the earliest availability time and update the availability time.
5.	Track the count of meetings for each room.
6.	Find the room with the maximum meeting count and return its index.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is O(n log n) due to the sorting of meetings, where n is the number of meetings. The subsequent iterations involve constant time operations.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is O(n) as we use arrays to store room availability times and meeting counts, both proportional to the number of rooms (n). Additionally, the priority queue used in the previous Java solution is replaced by arrays, leading to similar space complexity.

# Code
```
public class Solution {
    public int MostBooked(int n, int[][] meetings) {
        long[] roomAvailabilityTime = new long[n];
        int[] meetingCount = new int[n];
        
        Array.Sort(meetings, (a, b) => a[0] - b[0]);

        for (int i = 0; i < meetings.Length; i++) {
            int start = meetings[i][0], end = meetings[i][1];
            long minRoomAvailabilityTime = long.MaxValue;
            int minAvailableTimeRoom = 0;
            bool foundUnusedRoom = false;

            for (int j = 0; j < n; j++) {
                if (roomAvailabilityTime[j] <= start) {
                    foundUnusedRoom = true;
                    meetingCount[j]++;
                    roomAvailabilityTime[j] = end;
                    break;
                }

                if (minRoomAvailabilityTime > roomAvailabilityTime[j]) {
                    minRoomAvailabilityTime = roomAvailabilityTime[j];
                    minAvailableTimeRoom = j;
                }
            }

            if (!foundUnusedRoom) {
                roomAvailabilityTime[minAvailableTimeRoom] += end - start;
                meetingCount[minAvailableTimeRoom]++;
            }
        }

        int maxMeetingCount = 0, maxMeetingCountRoom = 0;
        for (int i = 0; i < n; i++) {
            if (meetingCount[i] > maxMeetingCount) {
                maxMeetingCount = meetingCount[i];
                maxMeetingCountRoom = i;
            }
        }

        return maxMeetingCountRoom;
    }
}
```