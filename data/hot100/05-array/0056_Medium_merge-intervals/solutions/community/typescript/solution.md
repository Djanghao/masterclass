# Beats 95.25 % , detailed explanation with simple code.

**Author:** SumitPokhriyal
**Votes:** 4
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/3543376/](https://leetcode.com/problems/merge-intervals/solutions/3543376/)

---

## Intuition
The problem requires merging overlapping intervals. We can approach this by first sorting the intervals based on their start times. This allows us to merge intervals efficiently.

## Approach
The approach involves sorting the intervals based on their start times. Once the intervals are sorted, we iterate through them and merge any overlapping intervals. We maintain a temporary interval and update its start and end times as we encounter intervals that overlap with it. When we find an interval that doesn't overlap, we add the merged interval to the result. Finally, we return the merged intervals.

## Complexity
* Time complexity: The time complexity of this approach is O(n log n), where n is the number of intervals. This is because we sort the intervals initially, which takes O(n log n) time. Then, we iterate through the intervals once, which takes O(n) time. Therefore, the overall time complexity is dominated by the sorting step.

* Space complexity: The space complexity is O(n), where n is the number of intervals. This is because we store the merged intervals in the 'res' array, which can have a maximum size of n if all intervals are non-overlapping.

# Code
```
function merge(intervals: number[][]): number[][] {
    intervals.sort((a , b) => a[0] - b[0] )
    let res = [] , n = intervals.length , i = 0;
    while( i < n ){
        let tmp = [intervals[i][0]] , max = intervals[i][1];
        i++;
        while(i < n && max >= intervals[i][0] ){
            if(intervals[i][0] < tmp[0])tmp[0] = intervals[i][0];
            max = Math.max( intervals[i][1] , max )
            i++;
        }
        tmp.push(max);
        res.push(tmp);
    }
    return res;
};
```