# [JavaScript] sort

**Author:** haleyysz
**Votes:** 6
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/346824/](https://leetcode.com/problems/meeting-rooms/solutions/346824/)

---

```
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if(!intervals || intervals.length === 1) return true;
    
    let sorted = intervals.sort((a,b) => a[0] - b[0]);
    for(let i = 0; i < sorted.length - 1; i++) {
        if(sorted[i][1] > sorted[i+1][0]) return false;
    }
    return true;
};
```