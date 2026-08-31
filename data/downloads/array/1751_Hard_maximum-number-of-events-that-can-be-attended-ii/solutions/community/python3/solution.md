# [Python3] (DP) Simple Solution Explained

**Author:** scornz
**Votes:** 18
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/1103634/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/1103634/)

---

```
class Solution:
    def maxValue(self, events: List[List[int]], k: int) -> int:
        
        # The number of events
        n = len(events)
        # Sort the events in chronological order
        events.sort()
        
        # k is the number of events we can attend
        # end is the last event we attended's END TIME
        # event_index is the current event we are checking
        @lru_cache(None)
        def dp(end: int, event_index: int, k: int):
            
            # No more events left or we have checked all possible events
            if k == 0 or event_index == n:
                return 0
            
            event = events[event_index]
            event_start, event_end, event_value = event
            # Can we attend this event?
            # Does its start time conflict with the previous events end time?
            # If the start time is the same as the end time we cannot end as well (view example 2)
            if event_start <= end:
                # Could not attend, check the next event
                return dp(end, event_index + 1, k)
            
            # We made it here, so we can attend!
            # Two possible options, we either attend (add the value) or do not attend this event
            # Value for attending versus the value for skipping
            attend = event_value + dp(event_end, event_index + 1, k - 1)
            skip = dp(end, event_index + 1, k)
            
            # Get the best option
            return max(attend, skip)
            
        # Clear cache to save memory
        dp.cache_clear()
        return dp(0, 0, k)
```