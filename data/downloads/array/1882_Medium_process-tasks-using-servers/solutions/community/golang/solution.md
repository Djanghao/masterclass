# [Go] Two Priority Queues Solution

**Author:** nightybear
**Votes:** 1
**Link:** [https://leetcode.com/problems/process-tasks-using-servers/solutions/1249713/](https://leetcode.com/problems/process-tasks-using-servers/solutions/1249713/)

---

here is min priority queue.

```
// An Item is something we manage in a priority queue.
type Item struct {
    // The index is needed by update and is maintained by the heap.Interface methods.
	index     int // The index of the item in the heap.
	priority1 int 
	priority2 int
	priority3 int
}

// A PriorityQueue implements heap.Interface and holds Items.
type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
    if pq[i].priority1 == pq[j].priority1 {
        if pq[i].priority2 == pq[j].priority2 {
            return pq[i].priority3 < pq[j].priority3 // lowest come first
        }
        return pq[i].priority2 < pq[j].priority2 // lowest come first
    }
	// We want Pop to give us the lowest
	return pq[i].priority1 < pq[j].priority1
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
	pq[i].index = i
	pq[j].index = j
}

func (pq *PriorityQueue) Push(x interface{}) {
	n := len(*pq)
	item := x.(*Item)
	item.index = n
	*pq = append(*pq, item)
}

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil  // avoid memory leak
	item.index = -1 // for safety
	*pq = old[0 : n-1]
	return item
}

// update modifies the priority and value of an Item in the queue.
func (pq *PriorityQueue) update(item *Item, priority1 int, priority2 int, priority3 int) {
	item.priority1 = priority1
	item.priority2 = priority2
    item.priority3 = priority3
	heap.Fix(pq, item.index)
}

func assignTasks(servers []int, tasks []int) []int {
    // (weight, index, time)
	free := make(PriorityQueue, len(servers))
	for index, weight := range servers {
		free[index] = &Item{
            index:        index,
			priority1:    weight,
			priority2:    index,
			priority3:    0, // time
		}
	}
    // (time, weight, index)
    used := make(PriorityQueue, 0)
	heap.Init(&free)
    heap.Init(&used)
    ans := make([]int, len(tasks))
    
    for j:=0; j<len(tasks); j++ {
        for used.Len()>0 && used[0].priority1 <= j || free.Len() == 0 {
            // time, weight, index
            item := heap.Pop(&used).(*Item)
            heap.Push(&free, &Item{
                priority1:    item.priority2, // weight
                priority2:    item.priority3, // index
                priority3:    item.priority1, // time
            })
        }
        // weight, index, time
        item := heap.Pop(&free).(*Item)
        ans[j] = item.priority2
        heap.Push(&used, &Item{
            priority1: Max(j, item.priority3) + tasks[j], // time
            priority2: item.priority1, // weight
            priority3: item.priority2, // index
        })
    }
    return ans
}

func Max(x, y int) int {
    if x > y {
        return x
    }
    return y
}
    
```