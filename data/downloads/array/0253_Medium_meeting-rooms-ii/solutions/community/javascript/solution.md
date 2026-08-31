# Javascript beats 100%

**Author:** billie523
**Votes:** 26
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/67955/](https://leetcode.com/problems/meeting-rooms-ii/solutions/67955/)

---

    /**
     * Definition for an interval.
     * function Interval(start, end) {
     *     this.start = start;
     *     this.end = end;
     * }
     */
    /**
     * @param {Interval[]} intervals
     * @return {number}
     */
    var minMeetingRooms = function(intervals) {
    	var starts = intervals.concat().sort(function(a, b) {
    		return a.start - b.start;
    	});
    	var ends = intervals.sort(function(a, b) {
    		return a.end - b.end;
    	});
    	var rooms = 0;
    	var end = 0;
    	for (var i = 0; i < intervals.length; i++) {
    		if (starts[i].start < ends[end].end) {
    			rooms++;
    		} else {
    			end++;
    		}
    	}
    	return rooms;
    };