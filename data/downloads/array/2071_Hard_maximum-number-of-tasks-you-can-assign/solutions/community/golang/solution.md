# [golang] binary search + greedy check

**Author:** keemzen
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/1581896/](https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/solutions/1581896/)

---

```
func maxTaskAssign(tasks []int, workers []int, pills int, strength int) int {
    sort.Ints(tasks)
    sort.Ints(workers)

    l, h := 0, min(len(tasks), len(workers))
    for l <= h {
        m := (l + h) / 2
        if check(tasks[0:m], workers[len(workers)-m:], pills, strength) {
            l = m + 1
        } else {
            h = m - 1
        }
    }
    return l-1
}

func check(tasks, workers []int, pills, strength int) bool {
    n := len(tasks)
    used := make([]bool, n)
    availableTasks := newDeque(n) // tasks that can be done by current worker (some may require using pill)

    for workerIdx, taskIdx, maxTaskIdx := 0, 0, 0; workerIdx < n; workerIdx++ {
        // skip done tasks
        for ; used[taskIdx]; taskIdx++ {
        }

        // update queue of available tasks
        for ; maxTaskIdx < n && workers[workerIdx] + strength >= tasks[maxTaskIdx]; maxTaskIdx++ {
            availableTasks.pushBack(maxTaskIdx)
        }
        for !availableTasks.empty() && availableTasks.front() < taskIdx {
            availableTasks.popFront()
        }

        // do the easiest available task or use pill and do the hardest available one
        if workers[workerIdx] >= tasks[taskIdx] {
            used[taskIdx] = true
        } else {
            if pills == 0 || availableTasks.empty() {
                return false
            }
            pills--
            used[availableTasks.back()] = true
            availableTasks.popBack()
        }
    }
    return true
}

func min(i, j int) int {
    if i < j {
        return i
    }
    return j
}
```

And finally my rather ugly deque implementation:
```
type deque struct {
    values   []int
    frontCur int
    backCur  int
}

func newDeque(maxSize int) *deque {
    return &deque{
        values:   make([]int, maxSize),
        frontCur: 0,
        backCur:  -1,
    }
}

func (d *deque) front() int {
    return d.values[d.frontCur]
}

func (d *deque) popFront() {
    d.frontCur++
}

func (d *deque) back() int {
    return d.values[d.backCur]
}

func (d *deque) pushBack(x int) {
    d.backCur++
    d.values[d.backCur] = x
}

func (d *deque) popBack() {
    d.backCur--
}

func (d deque) empty() bool {
    return d.frontCur > d.backCur
}
```