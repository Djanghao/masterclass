# Just loop (with explanation)

**Author:** Angielf
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-days-without-meetings/solutions/5244694/](https://leetcode.com/problems/count-days-without-meetings/solutions/5244694/)

---

# Complexity
- Time complexity:
$$O(n log n)$$, where n is the number of meetings. This is because the sort function used to sort the meetings by start date has a time complexity of O(n log n).

- Space complexity:
$$O(1)$$ because the solution does not create any additional data structures or variables that grow with the input size.

# Code
``` python3 []
class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        # Sort the meetings by start date
        meetings.sort(key=lambda x: x[0])
        
        # Initialize variables to keep track of free time and the current end date
        free_time = 0
        current_end = 0
        
        # Iterate over meetings
        for meeting in meetings:
            # If there is free time between the current end date and the start of the current meeting
            if meeting[0] > current_end:
                # Calculate the number of free days and add it to the total free time
                free_time += meeting[0] - current_end - 1
            
            # Update the current end date to the end date of the current meeting
            current_end = max(current_end, meeting[1])
        
        # Calculate the number of days after the last meeting and add it to the total free time
        free_time += days - current_end
        
        return free_time
```
``` javascript []
/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    // Sort the meetings by start date
    meetings.sort((a, b) => a[0] - b[0]);

    // Initialize variables to keep track of free time and the current end date
    let freeTime = 0;
    let currentEnd = 0;

    // Iterate over meetings
    for (const meeting of meetings) {
        // If there is free time between the current end date and the start of the current meeting
        if (meeting[0] > currentEnd) {
            // Calculate the number of free days and add it to the total free time
            freeTime += meeting[0] - currentEnd - 1;
        }

        // Update the current end date to the end date of the current meeting
        currentEnd = Math.max(currentEnd, meeting[1]);
    }

    // Calculate the number of days after the last meeting and add it to the total free time
    freeTime += days - currentEnd;

    return freeTime;
};
```
``` php []
class Solution {

    /**
     * @param Integer $days
     * @param Integer[][] $meetings
     * @return Integer
     */
    function countDays($days, $meetings) {
        // Sort the meetings by start date
        usort($meetings, function($a, $b) {
            return $a[0] - $b[0];
        });

        // Initialize variables to keep track of free time and the current end date
        $freeTime = 0;
        $currentEnd = 0;

        // Iterate over meetings
        foreach ($meetings as $meeting) {
            // If there is free time between the current end date and the start of the current meeting
            if ($meeting[0] > $currentEnd) {
                // Calculate the number of free days and add it to the total free time
                $freeTime += $meeting[0] - $currentEnd - 1;
            }

            // Update the current end date to the end date of the current meeting
            $currentEnd = max($currentEnd, $meeting[1]);
        }

        // Calculate the number of days after the last meeting and add it to the total free time
        $freeTime += $days - $currentEnd;

        return $freeTime;
    }
}
```