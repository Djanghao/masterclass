# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 12
**Link:** [https://leetcode.com/problems/remove-covered-intervals/solutions/1784874/](https://leetcode.com/problems/remove-covered-intervals/solutions/1784874/)

---

**Time Complexity : O(n*logn*)**
**Java**
```
class Solution {
    public int removeCoveredIntervals(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]));
        int count = 0, cur = 0;
        for(int interval[] : intervals){
            if(cur < interval[1]){
                cur = interval[1];
                count++;
            }
        }
        return count;
    }
}
```
**JavaScript**
```
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]))
    let count = 0, cur = 0
    for(let interval of intervals){
        if(cur < interval[1]){
            cur = interval[1]
            count++
        }
    }
    return count
};
```
**Python**
```
class Solution(object):
    def removeCoveredIntervals(self, intervals):
        count = cur = 0
        for _, i in sorted(intervals, key = lambda a: (a[0], -a[1])):
            if(cur < i):
                cur = i
                count += 1
        return count
```