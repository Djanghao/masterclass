# Golang solutions using three heaps [with runnable tests]

**Author:** Trane9991
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/877305/](https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/solutions/877305/)

---

Idea is based on the following Python solution: https://leetcode.com/problems/find-servers-that-handled-most-number-of-requests/discuss/876883/Python-using-only-heaps

Runnable tests on playground: https://play.golang.org/p/KmXY1RIWA5z

```go
func busiestServers(k int, arrival []int, load []int) []int {
	// min heaps of items, sorted by "priority" value:
	//  - jobs heap    - will store requests that are being processed right now
	//  - serversBef   - will store ordered list of servers with server number less than one we need
	//  - serversAfter - will store ordered list of servers with server number equal or greater
	var jobs, serversBef, serversAfter PriorityQueue
	var reqs = make([]int, k) // to store number of handled requests

	// populate initial list of available servers
	for i := 0; i < k; i++ {
		var node = &Item{
			num:      i,
			priority: i,
			index:    i,
		}

		serversBef = append(serversBef, node)
	}
	heap.Init(&serversBef)

	for i := range arrival {
		sec := arrival[i]
		load := load[i]
		num := i % k
		// fmt.Println(sec, "Looking for server", num)

		// if we need first server, than swap
		// "before" and "after" heaps, because all
		// servers should become "after" at this point
		if num == 0 {
			serversAfter = serversBef
			serversBef = PriorityQueue{}
		}

		// check if some jobs completed, so we can
		// count server as available
		for jobs.Len() > 0 {
			// since jobs are prioritized (sorted) by
			// time, it is enough to keep popping jobs
			// from the queue and check if time it's time
			job := heap.Pop(&jobs).(*Item)
			if job.priority > sec {
				// if job's time hasn't passed yet
				// put it back to the list, and stop checking
				heap.Push(&jobs, job)
				break
			}

			// now we know that this server become available
			node := &Item{num: job.num, priority: job.num}
			// put it in the proper queue of nodes (sorted by server num)
			if job.num < num {
				heap.Push(&serversBef, node)
			} else {
				heap.Push(&serversAfter, node)
			}
		}

		var node *Item
		// check if any server with number equal or
		// greater to our is available, if it is
		// pop the smallest one, if not
		// pop from the "before" queue
		if serversAfter.Len() > 0 {
			node = heap.Pop(&serversAfter).(*Item)
		} else if serversBef.Len() > 0 {
			node = heap.Pop(&serversBef).(*Item)
		} else {
			// if both queues are empty, this means
			// that all servers are busy at the moment
			continue
		}

		// add job processed by this node to the
		// jobs queue
		job := &Item{
			num:      node.num,
			priority: sec + load,
		}
		heap.Push(&jobs, job)
		// and increase processes requests count
		reqs[node.num]++
	}

	// now find the busiest servers
	var mr = map[int][]int{}
	var max = 0
	for i, r := range reqs {
		if r > max {
			max = r
		}
		mr[r] = append(mr[r], i)
	}

	return mr[max]
}

// PQ implementation:

// https://golang.org/src/container/heap/example_pq_test.go
// An Item is something we manage in a priority queue.
type Item struct {
	num      int
	priority int
	index    int
}

// A PriorityQueue implements heap.Interface and holds Items.
type PriorityQueue []*Item

func (pq PriorityQueue) Len() int { return len(pq) }

func (pq PriorityQueue) Less(i, j int) bool {
	if pq[i].priority == pq[j].priority {
		return pq[i].num < pq[j].num
	}
	return pq[i].priority < pq[j].priority
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
```