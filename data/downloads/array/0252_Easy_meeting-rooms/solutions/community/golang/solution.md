# Golang Solution Better space than 100% with explanation

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/meeting-rooms/solutions/1156580/](https://leetcode.com/problems/meeting-rooms/solutions/1156580/)

---

[252. Meeting Rooms](https://leetcode.com/problems/meeting-rooms/)

**The Idea Of The Solutions:**

The idea of these two solutions is pretty simple because the second solution is based on the first solution, and the first solution is pretty simple.

The idea of the first solution is:

* First, we sort `intervals`.
* Then, we check whether the previous interval's ends intersect with the following interval's beginning.

The idea of the second solution is:

* While sorting, we check for overlaps.

As you can see, the ideas are pretty simple.

**How the Ideas Are Implemented:**

The sort for both solutions is pretty simple and are pretty similar. If you don't understand how they work, look at my explanation on how the sort works, [How the Manual Sort Works](https://nathannaveen.dev/posts/how-the-manual-sort-works/) (Note: the sort won't be the same in the explanation but will be similar).

In the first solution, we loop through the indexes of `intervals` from `1` to `len(intervals - 1)`. Then the code checks whether the `intervals[i - 1]`'s end is greater than `intervals[i]`'s start. This is checking for an overlap. If so, we can return false.

For the second solution we check whether there is an overlap by doing: `if i >= 1 && intervals[i-1][0] <= intervals[i][0] && intervals[i-1][1] > intervals[i][0] {`.

* The `i >= 1` is for checking comparing the previous and current intervals.
* The `intervals[i-1][0] <= intervals[i][0]` is for checking that the current and previous positions are sorted.
* `intervals[i-1][1] > intervals[i][0]` is for checking that the end of the previous interval is greater than the start of the current interval.
* If all of that we can return `false`.

**The First Solution:**


``` go
func canAttendMeetings(intervals [][]int) bool {
    for i := 1; i < len(intervals); i++ {
        if i >= 1 && intervals[i - 1][0] > intervals[i][0] {
            intervals[i - 1], intervals[i] =
            intervals[i], intervals[i - 1]
            
            i -= 2
        }
    }
    for i := 1; i < len(intervals); i++ {
        if intervals[i - 1][1] > intervals[i][0] {
            return false
        }
    }
    return true
}
```

**The Second solution:** (which combines the two for loops from the first solution)

``` go
func canAttendMeetings(intervals [][]int) bool {
    for i := 1; i < len(intervals); i++ {
        if i >= 1 && intervals[i-1][0] > intervals[i][0] {
            intervals[i-1], intervals[i] = 
            intervals[i], intervals[i-1]
            
            i -= 2
        }
        if i >= 1 && intervals[i-1][0] <= intervals[i][0] && 
        intervals[i-1][1] > intervals[i][0] {
        
            return false
        }
    }

    return true
}
```