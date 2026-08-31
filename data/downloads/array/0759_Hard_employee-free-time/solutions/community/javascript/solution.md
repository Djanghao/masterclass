# Javascript with detailed explanation

**Author:** aburningknight
**Votes:** 10
**Link:** [https://leetcode.com/problems/employee-free-time/solutions/906811/](https://leetcode.com/problems/employee-free-time/solutions/906811/)

---

```
/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
var employeeFreeTime = function(schedules) {
    /**
        Concept:
            -- The problem input is a list containing lists of schedules, one for each employee
            -- Each schedule list can contain multiple intervals, with each interval sorted
            -- Try to visualize the problem by writing each schedule horiontally in a timeline
            -- For example, [[[1,2],[5,6]],[[1,3]],[[4,10]]] can be represented as:
                Time -->    1  2  3  4  5  6  7  8  9  10
                Employee A: ----        ----
                Employee B: -------
                Employee C:          --------------------
                
            As can be clearly seen above, whenever there is an overlap, the overlapping time cannot
            be common free-time. Therefore, we need to look at gaps.
            
            -- How to determine overlap?
               For an overlap when intervals are sorted, second interval has starts at or before
               first interval ends. Therefore, prev.end >= current.start is the overlap condition.
        
        Approach:
            -- Merge all intervals and sort on start time
            -- Keep track of two pointers - start and end
            -- Start with first time and mark it prev
            -- If there's an overlap,
               start = Math.min(start, current.start)
               end = Math.max(end, current.end)
            -- If there's no overlap, free interval is [prev.end, current.start]
    */
	
    if (!schedules || schedules.length === 0) return [];
    
    const merged = schedules.reduce((merged, schedule) => [...merged, ...schedule]);
    merged.sort((a, b) => a.start - b.start);// Sort in ascending order of schedules

    const freeTime = [];
    
    let prev = merged[0], start = prev.start, end = prev.end;
    for (let i = 1; i < merged.length; i++) {
        let current = merged[i];
        
        // Check for overlapping intervals
        // Note that prev ending at the same time as current starts in also overlapping since it means
        // that there can't be a free time interval between them
        if (end >= current.start) {
            start = Math.min(start, current.start);
            end = Math.max(end, current.end)
        } else {
            freeTime.push(new Interval(end, current.start));
            start = current.start;
            end = current.end;
        }
    }
    
    return freeTime;
};
```