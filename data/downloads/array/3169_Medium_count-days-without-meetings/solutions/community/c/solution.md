# Beats 100% users everytime... Trust this code...

**Author:** Success_Code
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-days-without-meetings/solutions/5244204/](https://leetcode.com/problems/count-days-without-meetings/solutions/5244204/)

---



# Code
```
class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        if not meetings:
            return days

        # Step 1: Sort the meetings by their start day
        meetings.sort()
        
        # Step 2: Merge overlapping meetings
        merged_meetings = []
        current_start, current_end = meetings[0]
        
        for start, end in meetings[1:]:
            if start <= current_end + 1:
                current_end = max(current_end, end)
            else:
                merged_meetings.append((current_start, current_end))
                current_start, current_end = start, end
        
        # Append the last interval
        merged_meetings.append((current_start, current_end))
        
        # Step 3: Calculate the total number of days covered by meetings
        days_with_meetings = sum(end - start + 1 for start, end in merged_meetings)
        
        # Step 4: Calculate the free days
        free_days = days - days_with_meetings
        
        return free_days
        
```