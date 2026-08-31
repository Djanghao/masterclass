# Line Sweep O(N Log N), explained

**Author:** jordan34
**Votes:** 12
**Link:** [https://leetcode.com/problems/meeting-scheduler/solutions/645961/](https://leetcode.com/problems/meeting-scheduler/solutions/645961/)

---

I wanted to present an alternative take on this. Line sweep can be used to solve any interval problems, but you rarely see solutions. The idea is based off the concept that at any given time, we want to check whether we can fit the duration in. This means we need to check both the ends of the overlap, and see if we can fit it in.

Time complexity: N Log N
Space: O(N), since we store 2N events, for each person. Dict is neglible, since we only have two people. 

```

class Solution:
    def minAvailableDuration(self, slots1: List[List[int]], slots2: List[List[int]], duration: int) -> List[int]:
        OPEN, CLOSE = 0, 1
        events = []
        
        # we add all intervals from person 1 and person 2, using start/end events
        for start, end in slots1:
            events.append((start, OPEN, 1, end))
            events.append((end, CLOSE, 1, end))
            
        for start, end in slots2:
            events.append((start, OPEN, 2, end))
            events.append((end, CLOSE, 2, end)) 
        
        events.sort()
        seen = {}
        
        """
            for every event, add and remove any interval, based on the open/close events we set above, to our seen dict
            this will produce a window, where at any given point, we can track if intervals overlap
            since we only have two people, we can hard code the dict keys as seen above
        """
        for time, eventType, person, end in events:
            if eventType is OPEN: # this is the start of an interval, add the person to the dict
                seen[person] = (person, end)
            else: # end of a given interval, remove this person
                del seen[person]

            # if we have an overlap, where both persons have intervals that coincide
            if len(seen) > 1:
                # grab the end values for each, since what we care about is whether at any given time point, does time + duration fit?
                person1, person1End = seen.get(1)
                person2, person2End = seen.get(2)
                
                if time + duration <= person1End and time + duration <= person2End:
                    return[time, time + duration]
            
        return []

```