# [Go] Clean solution (185ms 100%)

**Author:** krex0r
**Votes:** 9
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/1843676/](https://leetcode.com/problems/non-overlapping-intervals/solutions/1843676/)

---

Hello Gophers!

## [Problem: Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)

Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`,  
return *the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping*.

Example 1:  
```
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
```

Example 2:  
```
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
```

Example 3:  
```
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
 ```

Constraints:  
- `1 <= intervals.length <= 105`
- `intervals[i].length == 2`
- `-5 * 104 <= starti < endi <= 5 * 104`



## Definitions

An interval `[x, y]` is "overlapping" with the interval `[a, b]` if `x` <= `b` && `y` >= `a` (or `y` >= `a` && `x` >= `b`):

```
|-----------|           |          |-----------|
x           y           |          x           y 
     |-----------|      |     |-----------| 
     a           b      |     a           b 
```

An interval `[x, y]` is "completely overlapping" with the interval `[a, b]` if `x` <= `a` && `y` >= `b`:

```
|----------------|
x                y
     |-----|
     a     b
```


## Solution

[crickey180's solution](https://leetcode.com/problems/non-overlapping-intervals/discuss/91713/Java%3A-Least-is-Most) in Go:  
> Actually, the problem is the same as "Given a collection of intervals, find the maximum number of intervals that are non-overlapping." (the classic Greedy problem: Interval Scheduling). With the solution to that problem, guess how do we get the minimum number of intervals to remove? : )

### Code

```go
// Time: O(nlogn + n) = O(nlogn)
// Space: O(1)
func eraseOverlapIntervals(intervals [][]int) int {
    if len(intervals) <= 1 {
        return 0
    }
    
    // Time: O(nlogn)
    sortIntervals(intervals)
    
    // Time: O(n)
    nbNonOverlappingIntervals := numberOfNonOverlappingIntervals(intervals)

    return len(intervals) - nbNonOverlappingIntervals
}

// Time: O(n)
// Space: O(1)
func numberOfNonOverlappingIntervals(intervals [][]int) int {
    currentInterval := intervals[0]
    var nbNonOverlappingIntervals int = 1

    // Time: O(n)
    for _, interval := range intervals[1:] {
        if interval[0] >= currentInterval[1] {
            currentInterval = interval
            nbNonOverlappingIntervals++
        }
    }

    return nbNonOverlappingIntervals
}

// Time: O(nlogn)
// Space: O(1)
func sortIntervals(intervals [][]int) {
    // Time: O(nlogn)
    sort.Slice(intervals, func(i, j int) bool {
        return intervals[i][1] < intervals[j][1]
    })
}
```

### Explanation

Let's start by considering the intervals according to their end times. Consider the two intervals with the earliest end times. Let's say the earlier end time is `n` and the later one is `m`. We have `n < m`.

If we can only choose to keep one interval, should we choose the one ending at `n` or ending at `m`? To avoid overlap, We should always greedily choose the interval with an earlier end time `n`.

We usually sort the intervals with the first value of the intervals (`x` and `a`) first and if they are equals, we check the second value (`y` and `b`):

```go
func sortIntervals(intervals [][]int) {
    sort.Slice(intervals, func(i, j int) bool {
        if intervals[i][0] == intervals[j][0] {
            return intervals[i][1] <= intervals[j][1]
        }
        return intervals[i][0] <= intervals[j][0]
    })
}
```

But for this one, because we want the "interval with an earlier end time", we sort with the last value of the intervals (`y` and `b`):

```go
func sortIntervals(intervals [][]int) {
    // Time: O(nlogn)
    sort.Slice(intervals, func(i, j int) bool {
        return intervals[i][1] < intervals[j][1]
    })
}
```

When we have the meetings sorted by their "end time", we can iterate on them.

*Source: https://en.wikipedia.org/wiki/Interval_scheduling*


## Similar Questions

1. [[Medium] 56. Merge Intervals](https://leetcode.com/problems/merge-intervals/discuss/1805268/Go-Clean-Code-with-explanation-and-visual-(10ms-100))
2. [[Easy] 495. Teemo Attacking](https://leetcode.com/problems/teemo-attacking/discuss/1805603/Go-Clean-code-with-comments-(30ms-98))
3. [[Medium] 57. Insert Interval](https://leetcode.com/problems/insert-interval/discuss/1807161/Go-Clean-Code-with-visual-(1ms-100)) 
4. [[Medium] 986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/discuss/1823039/Go-Clean-Code-with-explanation-and-visual-(10ms-100))
5. [[Easy] 252. Meeting Rooms](https://leetcode.com/problems/meeting-rooms/discuss/1512776/Go-Meeting-Rooms-Clean-solution) 
6. [[Medium] 253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/discuss/1826838/Go-Multiple-Solutions-(0ms-100))
7. [[Medium] 435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/discuss/1843676/Go-Clean-solution-(185ms-100)) **(this problem)**
8. [[Medium] 763. Partition Labels](https://leetcode.com/problems/partition-labels/discuss/2027004/Go-Merge-and-Sort-Intervals-0ms-(100))
9. [[Medium] Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)
10. [[Hard] 759. Employee Free Time](https://leetcode.com/problems/employee-free-time/)

I hope it helped! :)