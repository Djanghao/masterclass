# [Go] Multiple Solutions (0ms 100%)

**Author:** krex0r
**Votes:** 10
**Link:** [https://leetcode.com/problems/meeting-rooms-ii/solutions/1826838/](https://leetcode.com/problems/meeting-rooms-ii/solutions/1826838/)

---

Hello Gophers!

## [Problem: Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)

Given an array of meeting time intervals `intervals` where `intervals[i] = [starti, endi]`,  
return *the minimum number of conference rooms required*.

Example 1:  
```
Input: intervals = [[0,30],[5,10],[15,20]]
Output: 2
```
Example 2:  
```
Input: intervals = [[7,10],[2,4]]
Output: 1
 ```

Constraints:  
- `1 <= intervals.length <= 104`
- `0 <= starti < endi <= 106`


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


## Solutions

### Solution 1 

My first "brute force" solution: I start with the first `interval` (meeting) and iterate over all other `intervals` (meetings).  
If the `interval` and the current interval we are comparing (`currentInterval`) are not overlapping, they can be in the same room, so we remove it from the `intervals` and change `interval` for `currentInterval`. Once "we grouped all non-overlapping meetings together" (by removing them from `intervals`), we do this again with the remaining meetings in the `intervals` slice and we increment the number of rooms `nbRooms` everytime we do this.

Time: `O(n^2)`
Space: `O(1)`

As you can see, this is not the optimal solution (time complexity), but it was my first solution and I thought it could be nice to share it! :)

```go
// Time: O(nlogn + n*n) = O(n^2 + nlogn) = O(n^2)
// Space: O(1)
func minMeetingRooms(intervals [][]int) int {
    // Time: O(nlogn)
    sortIntervals(intervals)
    var nbRooms int = 0

    // Time: O(n)
    for len(intervals) > 0 {
        nbRooms++
        interval := intervals[0]
        intervals = intervals[1:]

        // Time: O(n)
        for i := 0; i < len(intervals); i++ {
            currentInterval := intervals[i]
            if !areOverlapping(interval, currentInterval) {
                interval, intervals = currentInterval, append(intervals[:i], intervals[i+1:]...)
                i--
            }
        }
    }

    return nbRooms
}

// Time: O(1)
// Space: O(1)
func areOverlapping(interval1, interval2 []int) bool {
    return interval1[0] < interval2[1] && interval1[1] > interval2[0] 
}

// Time: O(nlogn)
// Space: O(1)
func sortIntervals(intervals [][]int) {
    sort.Slice(intervals, func(i, j int) bool {
        if intervals[i][0] == intervals[j][0] {
            return intervals[i][1] < intervals[j][1]
        }
        return intervals[i][0] < intervals[j][0] 
    })
}
```


### Solution 2

Shout-out to  [pinkfloyda for his great problem in Java](https://leetcode.com/problems/meeting-rooms-ii/discuss/67883/Super-Easy-Java-Solution-Beats-98.8), [magicyuli for its explanation of it](https://leetcode.com/problems/meeting-rooms-ii/discuss/67855/Explanation-of-%22Super-Easy-Java-Solution-Beats-98.8%22-from-%40pinkfloyda) and [JobQ for his images](https://leetcode.com/problems/meeting-rooms-ii/discuss/67855/Explanation-of-"Super-Easy-Java-Solution-Beats-98.8"-from-@pinkfloyda/179212).


Time: `O(nlogn)`
Space: `O(n)`

```go
// Time: O(n + nlogn + nlogn + n) = O(2nlogn + 2n) = O(nlogn)
// Space: O(n)
func minMeetingRooms(intervals [][]int) int {
	// Space: O(n + n) = O(2n) = O(n)
	starts, ends := make([]int, len(intervals)), make([]int, len(intervals))
	
	// Time: O(n)
	for i := range intervals {
		starts[i], ends[i] = intervals[i][0], intervals[i][1]
	}
	
	// Time: O(nlogn)
	sort.Ints(starts)

	// Time: O(nlogn)
	sort.Ints(ends)

	var endsIndex, nbRooms int = 0, 0
	// Time: O(n)
	for startsIndex := range starts {
		if starts[startsIndex] < ends[endsIndex] {
			nbRooms++
		} else {
			endsIndex++
		}
	}

	return nbRooms
}
```

*Images from JobQ*:  
<img src="https://i.loli.net/2018/09/24/5ba81e5ea9d15.jpg" alt="JobQ1">
<img src="https://i.loli.net/2018/09/24/5ba81e7c04aee.jpg" alt="JobQ12">
> From this simulation, we can see if starts[i] < ends[endItr], we cannot use a room we used before, otherwise we can reuse a room. -JobQ

### Solution 3

Simply the solution 2 with Go routines (and channels & wait group).  
It is "faster" (especially when the `interval` slice is huge) since we sort both `starts` and `ends` slice at the same time (`O(nlogn) < O(2nlogn)`), but the time complexity is the same.  
I think it can be still nice to just drop this as "suggestion of improvement" in interview (depending of the maximum number of total meetings).

Time: `O(nlogn)`
Space: `O(n)`

```go
// Time: O(n + nlogn + n) = O(nlogn + 2n) = O(nlogn)
// Space: O(n)
func minMeetingRooms(intervals [][]int) int {
    // Space: O(n + n) + O(2n) = O(n)
	starts, ends := make([]int, len(intervals)), make([]int, len(intervals))
    
    // Time: O(n)
	for i := range intervals {
		starts[i], ends[i] = intervals[i][0], intervals[i][1]
	}
    
    // Time: O(nlogn)
    sortStartsEnds(starts, ends)


	var endsIndex, nbRooms int = 0, 0
    // Time: O(n)
	for startsIndex := range starts {
		if starts[startsIndex] < ends[endsIndex] {
			nbRooms++
		} else {
			endsIndex++
		}
	}
	
	return nbRooms
}

// Time: O(nlogn)
// Space: O(1)
func sortStartsEnds(starts, ends []int) {
    wg := new(sync.WaitGroup)
    startChan, endChan := make(chan []int, 1), make(chan []int, 1)
    wg.Add(2)
    
    // Time: O(nlogn)
    go sortAsync(starts, startChan, wg)
    // Time: O(nlogn)
    go sortAsync(ends, endChan, wg)    
    wg.Wait()
    
    close(startChan)
    close(endChan)
    
    starts, ends = <- startChan, <- endChan
}

// Time: O(nlogn)
// Space: O(1)
func sortAsync(ints []int, c chan []int, wg *sync.WaitGroup) {
	// Time: O(nlogn)
    sort.Ints(ints)
    c <- ints
    wg.Done()
}
```

### Solution 4 (heap)

We create a "min heap" that is a list of all the current running meetings (on different rooms).  
Our number of required rooms would be the max size of this heap during the whole iteration.  
Everytime we iterate on a new meeting, we remove all meetings that finishes before this new meeting starts.

```go
// Time: See next solution (better)
// Space: O(n)
func minMeetingRooms(meetings [][]int) int {
    if len(meetings) <= 1 {
        return len(meetings)
    }

    // Time: O(nlogn)
    sortIntervals(meetings)
    newMeeting := meetings[0]
    
    // Space: O(n)
    currentMeetings := NewMinHeap()
    currentMeetings.Add(newMeeting[1])
    var currentMaxNbRoom int = 1
    
    // Time: not sure about this one, see next solution
    for _, newMeeting := range meetings[1:] {
        // end is the end of the meeting which ends the earliest
        for end := currentMeetings.Top(); currentMeetings.Size() > 0 && newMeeting[0] >= end;  {
            currentMeetings.Pop()
            if !currentMeetings.IsEmpty() {
                end = currentMeetings.Top()
            }
        }
        currentMeetings.Add(newMeeting[1])
        currentMaxNbRoom = max(currentMaxNbRoom, currentMeetings.Size())
    }
    
    return currentMaxNbRoom
}

// Time: O(1)
// Space: O(1)
func areOverlapping(interval1, interval2 []int) bool {
    return interval1[0] < interval2[1] && interval1[1] > interval2[0] 
}

// Time: O(nlogn)
// Space: O(1)
func sortIntervals(intervals [][]int) {
    sort.Slice(intervals, func(i, j int) bool {
        if intervals[i][0] == intervals[j][0] {
            return intervals[i][1] <= intervals[j][1]
        }
        return intervals[i][0] < intervals[j][0] 
    })
}

// Time: O(1)
// Space: O(1)
func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}

/* MinHeap package */

type MinHeap struct {
    items []int
}

func NewMinHeap() *MinHeap {
    return &MinHeap{
        items: make([]int, 0),
    }
}

// Time: O(1 + h) = O(h)
func (h *MinHeap) Add(val int) {
    // Time: O(1)
    h.items = append(h.items, val)
    // Time: O(h)
    h.heapifyUp(h.Size()-1)
}

// Time: O(h)
func (h *MinHeap) heapifyUp(position int) {
    if position != 0 {
        if parentPosition := parentPositionOf(position); h.items[position] < h.items[parentPosition] {
            h.swap(position, parentPosition)
            h.heapifyUp(parentPosition)
        }
    }
}

// Time: O(1)
func (h *MinHeap) Top() int {
    return h.items[0]
}

// Time: O(1 + h) = O(h)
func (h *MinHeap) Pop() {
    if !h.IsEmpty() {
        lastPosition := h.Size()-1
        h.items[0] = h.items[lastPosition]
        // Remove last item
        h.items = h.items[:lastPosition]
        // Time: O(h)
        h.heapifyDown(0)

    }
}

// Time: O(h)
// This could be improved..
func (h *MinHeap) heapifyDown(position int) {
    fmt.Printf("heap before: %v\
", h)
    if leftPosition, rightPosition := childrenPositionsOf(position); h.Size() > rightPosition {
        var smallestChildPosition int = -1
        if h.items[rightPosition] <= h.items[leftPosition] {
            smallestChildPosition = rightPosition
        } else {
            smallestChildPosition = leftPosition
        }
        
        if h.items[position] > h.items[smallestChildPosition] {
            h.swap(position, smallestChildPosition)
            h.heapifyDown(smallestChildPosition)
        }
    } else if h.Size() > leftPosition {
        if h.items[position] > h.items[leftPosition] {
            h.swap(position, leftPosition)
            h.heapifyDown(leftPosition)
        }
    }
}

// Time: O(1)
func (h *MinHeap) swap(x, y int) {
    h.items[x], h.items[y] = h.items[y], h.items[x]
}

// Time: O(1)
func (h *MinHeap) Size() int {
    return len(h.items)
}

// Time: O(1)
func (h *MinHeap) IsEmpty() bool {
    return h.Size() == 0
}

// Time: O(1)
func leftChildPositionOf(position int) int {
    return 2*position + 1
}

// Time: O(1)
func rightChildPositionOf(position int) int {
    return 2*position + 2
}

// Time: O(1)
func childrenPositionsOf(position int) (int, int) {
    return leftChildPositionOf(position), rightChildPositionOf(position)
}

// Time: O(1)
func parentPositionOf(position int) int {
    return (position-1)/2
}
```

I'm not sure why other solutions just remove the "top" value of the "current running meetings" heap, and not "all the meetings that finishes before the new one start",  
but the result is the same:

Here is an example: `[][]int{ {1,2}, {1,3}, {1,4}, {5,6}, {5,7}, {5,8}, {5.9} }`

If we remove the "top" only, the heap would be: `{ []int{2} }` -> `{ []int{2, 3} }` -> `{ []int{2, 3, 4} }` -> `{ []int{3, 4, 6} }` -> `{ []int{4, 6, 7} }` -> `{ []int{6, 7, 8} }` -> `{ []int{6, 7, 8, 9} }`
If we remove all the meeting that finished before the start of the current meeting, the heap would be: `{ []int{2} }` -> `{ []int{2, 3} }` -> `{ []int{2, 3, 4} }` -> `{ []int{6} }` -> `{ []int{6, 7} }` -> `{ []int{6, 7, 8} }` -> `{ []int{6, 7, 8, 9} }`

So here is a small improvement:

```go
// Time: O(nlogn + nlogn) = O(2nlogn) = O(nlogn)
// Space: O(n)
func minMeetingRooms(meetings [][]int) int {
    if len(meetings) <= 1 {
        return len(meetings)
    }

    // Time: O(nlogn)
    sortIntervals(meetings)
    newMeeting := meetings[0]
    
    // Space: O(n)
    currentMeetings := NewMinHeap()
    currentMeetings.Add(newMeeting[1])
    var currentMaxNbRoom int = 1
    
    // Time: O(n * (logn+logn)) = O(n * 2logn) = O(n * logn) = O(nlogn)
	// beacause h = logn
    for _, newMeeting := range meetings[1:] {
        // end is the end of the meeting which ends the earliest
        // Time: O(h) = O(logn)
        if currentMeetings.Size() > 0 && newMeeting[0] >= currentMeetings.Top() {
            currentMeetings.Pop()
        }
        // Time: O(h) = O(logn)
        currentMeetings.Add(newMeeting[1])
        currentMaxNbRoom = max(currentMaxNbRoom, currentMeetings.Size())
    }
    
    return currentMaxNbRoom
}

// Time: O(1)
// Space: O(1)
func areOverlapping(interval1, interval2 []int) bool {
    return interval1[0] < interval2[1] && interval1[1] > interval2[0] 
}

// Time: O(nlogn)
// Space: O(1)
func sortIntervals(intervals [][]int) {
    sort.Slice(intervals, func(i, j int) bool {
        if intervals[i][0] == intervals[j][0] {
            return intervals[i][1] <= intervals[j][1]
        }
        return intervals[i][0] < intervals[j][0] 
    })
}

// Time: O(1)
// Space: O(1)
func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}

/* MinHeap package */

type MinHeap struct {
    items []int
}

func NewMinHeap() *MinHeap {
    return &MinHeap{
        items: make([]int, 0),
    }
}

// Time: O(1 + h) = O(h)
func (h *MinHeap) Add(val int) {
    // Time: O(1)
    h.items = append(h.items, val)
    // Time: O(h)
    h.heapifyUp(h.Size()-1)
}

// Time: O(h)
func (h *MinHeap) heapifyUp(position int) {
    if position != 0 {
        if parentPosition := parentPositionOf(position); h.items[position] < h.items[parentPosition] {
            h.swap(position, parentPosition)
            h.heapifyUp(parentPosition)
        }
    }
}

// Time: O(1)
func (h *MinHeap) Top() int {
    return h.items[0]
}

// Time: O(1 + h) = O(h)
func (h *MinHeap) Pop() {
    if !h.IsEmpty() {
        lastPosition := h.Size()-1
        h.items[0] = h.items[lastPosition]
        // Remove last item
        h.items = h.items[:lastPosition]
        // Time: O(h)
        h.heapifyDown(0)

    }
}

// Time: O(h)
// This could be improved..
func (h *MinHeap) heapifyDown(position int) {
    if leftPosition, rightPosition := childrenPositionsOf(position); h.Size() > rightPosition {
        var smallestChildPosition int = -1
        if h.items[rightPosition] <= h.items[leftPosition] {
            smallestChildPosition = rightPosition
        } else {
            smallestChildPosition = leftPosition
        }
        
        if h.items[position] > h.items[smallestChildPosition] {
            h.swap(position, smallestChildPosition)
            h.heapifyDown(smallestChildPosition)
        }
    } else if h.Size() > leftPosition {
        if h.items[position] > h.items[leftPosition] {
            h.swap(position, leftPosition)
            h.heapifyDown(leftPosition)
        }
    }
}

// Time: O(1)
func (h *MinHeap) swap(x, y int) {
    h.items[x], h.items[y] = h.items[y], h.items[x]
}

// Time: O(1)
func (h *MinHeap) Size() int {
    return len(h.items)
}

// Time: O(1)
func (h *MinHeap) IsEmpty() bool {
    return h.Size() == 0
}

// Time: O(1)
func leftChildPositionOf(position int) int {
    return 2*position + 1
}

// Time: O(1)
func rightChildPositionOf(position int) int {
    return 2*position + 2
}

// Time: O(1)
func childrenPositionsOf(position int) (int, int) {
    return leftChildPositionOf(position), rightChildPositionOf(position)
}

// Time: O(1)
func parentPositionOf(position int) int {
    return (position-1)/2
}
```

You could also use [Go's  heap implementation in the Standard library `container`](https://pkg.go.dev/container/heap):

```go
// Time: O(nlogn + nlogn) = O(2nlogn) = O(nlogn)
// Space: O(n)
func minMeetingRooms(meetings [][]int) int {
    if len(meetings) <= 1 {
        return len(meetings)
    }

    // Time: O(nlogn)
    sortIntervals(meetings)
    newMeeting := meetings[0]
    
    // Space: O(n)
    currentMeetings := NewMinHeap()
    heap.Push(currentMeetings, newMeeting[1])
    var currentMaxNbRoom int = 1
    
    // Time: O(n * (logn+logn)) = O(n * 2logn) = O(n * logn) = O(nlogn)
	// beacause h = logn
    for _, newMeeting := range meetings[1:] {
        // end is the end of the meeting which ends the earliest
        // Time: O(h) = O(logn)
        if !currentMeetings.IsEmpty() && newMeeting[0] >= currentMeetings.Top() {
            heap.Pop(currentMeetings)
        }
        // Time: O(h) = O(logn)
        heap.Push(currentMeetings, newMeeting[1])
        currentMaxNbRoom = max(currentMaxNbRoom, currentMeetings.Size())
    }
    
    return currentMaxNbRoom
}

// Time: O(1)
// Space: O(1)
func areOverlapping(interval1, interval2 []int) bool {
    return interval1[0] < interval2[1] && interval1[1] > interval2[0] 
}

// Time: O(nlogn)
// Space: O(1)
func sortIntervals(intervals [][]int) {
    sort.Slice(intervals, func(i, j int) bool {
        if intervals[i][0] == intervals[j][0] {
            return intervals[i][1] <= intervals[j][1]
        }
        return intervals[i][0] < intervals[j][0] 
    })
}

// Time: O(1)
// Space: O(1)
func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}

/* MinHeap package */

// MinHeap implements container/heap.Interface.
type MinHeap struct {
    items []int
}

func NewMinHeap() *MinHeap {
    return &MinHeap{
        items: make([]int, 0),
    }
}

func (h *MinHeap) Len() int {
    return h.Size()
}

func (h *MinHeap) Less(i, j int) bool {
	return h.items[i] < h.items[j]
}
 
func (h *MinHeap) Swap(i, j int) {
    h.items[i], h.items[j] = h.items[j], h.items[i]
}
 
func (h *MinHeap) Push(x interface{}) {
	h.items = append(h.items, x.(int))
}
 
func (h *MinHeap) Pop() interface{} {
    top := h.Top()
    h.items = h.items[:h.Size()-1]
	return top
}

func (h *MinHeap) Top() int {
    return h.items[0]
}

func (h *MinHeap) Size() int {
    return len(h.items)
}

func (h *MinHeap) IsEmpty() bool {
    return h.Size() == 0
}
```

It is faster to use an implemented lib, but it is important to know how to implement a heap by yourself!  


## Final words

The optimal time complexity is `O(nlogn)` because we need to sort the slice of intervals (meetings).  
If the space complexity must be `O(1)`, the solution 2 (and 3) are the one to use, because creating a heap makes the space complexity `O(n)`.  
In any cases, don't forget to propose a brute force (and ask if you should implement it or propose a better solution) and to ask many questions in your interview(s). 


## Similar Questions

1. [[Medium] 56. Merge Intervals](https://leetcode.com/problems/merge-intervals/discuss/1805268/Go-Clean-Code-with-explanation-and-visual-(10ms-100))
2. [[Easy] 495. Teemo Attacking](https://leetcode.com/problems/teemo-attacking/discuss/1805603/Go-Clean-code-with-comments-(30ms-98))
3. [[Medium] 57. Insert Interval](https://leetcode.com/problems/insert-interval/discuss/1807161/Go-Clean-Code-with-visual-(1ms-100)) 
4. [[Medium] 986. Interval List Intersections](https://leetcode.com/problems/interval-list-intersections/discuss/1823039/Go-Clean-Code-with-explanation-and-visual-(10ms-100))
5. [[Easy] 252. Meeting Rooms](https://leetcode.com/problems/meeting-rooms/discuss/1512776/Go-Meeting-Rooms-Clean-solution) 
6. [[Medium] 253. Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/discuss/1826838/Go-Multiple-Solutions-(0ms-100)) **(this problem)**
7. [[Medium] 435. Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/discuss/1843676/Go-Clean-solution-(185ms-100))
8. [[Medium] 763. Partition Labels](https://leetcode.com/problems/partition-labels/discuss/2027004/Go-Merge-and-Sort-Intervals-0ms-(100))
9. [[Medium] Single-Threaded CPU](https://leetcode.com/problems/single-threaded-cpu/)
10. [[Hard] 759. Employee Free Time](https://leetcode.com/problems/employee-free-time/)

I hope it helped! :)