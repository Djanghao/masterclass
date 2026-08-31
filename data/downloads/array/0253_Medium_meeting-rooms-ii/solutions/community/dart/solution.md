# Dart N^2

**Author:** Allicolyer
**Votes:** 0
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/4142292/](https://leetcode.com/problems/meeting-rooms-ii/solutions/4142292/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int minMeetingRooms(List<List<int>> intervals) {
      // Sort the intervals by their start times
      intervals.sort((a,b) => a[0].compareTo(b[0]));

      // This list represents the ending time for each meeting taking place
      List<int> endingTimes = [];

      // Go through each interval
      for (List<int> interval in intervals){
        int startTime = interval[0];
        int endTime = interval[1];
        bool foundEmptyRoom = false;
        for (int i=0; i< endingTimes.length; i++){
          int endTimeOfMeetingInRoom = endingTimes[i];
          if (endTimeOfMeetingInRoom <= startTime){
            // Update the ending time
            endingTimes[i] = endTime;
            foundEmptyRoom = true;
            break;
          }        
        }
        // No meeting rooms open, add the endTime
        if (!foundEmptyRoom){
         endingTimes.add(endTime);
        }
      }
      print(endingTimes);
      return endingTimes.length;
  }
}
```