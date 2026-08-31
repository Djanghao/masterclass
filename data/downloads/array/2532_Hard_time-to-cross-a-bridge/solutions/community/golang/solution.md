# Golang four queues 85 ms 7.5 MB

**Author:** maxhero90
**Votes:** 1
**Link:** [https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3027604/](https://leetcode.com/problems/time-to-cross-a-bridge/solutions/3027604/)

---

# Complexity
- Time complexity: $$O(n*logk)$$
- Space complexity: $$O(k)$$
# Code
```
type Worker struct {
	efficiency  int32
	leftToRight int16
	rightToLeft int16
	pickOld     int16
	putNew      int16
}

type BankQueue []Worker

func (q BankQueue) Len() int            { return len(q) }
func (q BankQueue) Less(i, j int) bool  { return q[i].efficiency > q[j].efficiency }
func (q BankQueue) Swap(i, j int)       { q[i], q[j] = q[j], q[i] }
func (q *BankQueue) Push(x interface{}) { *q = append(*q, x.(Worker)) }
func (q *BankQueue) Pop() interface{} {
	old := *q
	n := len(old)
	x := old[n-1]
	*q = old[0 : n-1]
	return x
}

type Event struct {
	time   int32
	worker Worker
}

type EventQueue []Event

func (q EventQueue) Len() int            { return len(q) }
func (q EventQueue) Less(i, j int) bool  { return q[i].time < q[j].time }
func (q EventQueue) Swap(i, j int)       { q[i], q[j] = q[j], q[i] }
func (q *EventQueue) Push(x interface{}) { *q = append(*q, x.(Event)) }
func (q *EventQueue) Pop() interface{} {
	old := *q
	n := len(old)
	x := old[n-1]
	*q = old[0 : n-1]
	return x
}

func findCrossingTime(n int, k int, time [][]int) int {
	leftWarehouse := make(EventQueue, 0, k)
	leftBank := make(BankQueue, k)
	for i, workerTime := range time {
		leftBank[i] = Worker{
			efficiency:  int32(((workerTime[0] + workerTime[2]) << 16) | i),
			leftToRight: int16(workerTime[0]),
			rightToLeft: int16(workerTime[2]),
			pickOld:     int16(workerTime[1]),
			putNew:      int16(workerTime[3]),
		}
	}
	heap.Init(&leftBank)
	rightBank := make(BankQueue, 0, k)
	rightWarehouse := make(EventQueue, 0, k)
	var result int32
	for n != 0 {
		for len(rightWarehouse) != 0 && rightWarehouse[0].time <= result {
			heap.Push(&rightBank, rightWarehouse[0].worker)
			heap.Pop(&rightWarehouse)
		}
		for len(leftWarehouse) != 0 && leftWarehouse[0].time <= result {
			heap.Push(&leftBank, leftWarehouse[0].worker)
			heap.Pop(&leftWarehouse)
		}
		if len(rightBank) != 0 {
			result += int32(rightBank[0].rightToLeft)
			heap.Push(&leftWarehouse, Event{
				time:   result + int32(rightBank[0].putNew),
				worker: rightBank[0],
			})
			heap.Pop(&rightBank)
		} else if len(leftBank) != 0 {
			result += int32(leftBank[0].leftToRight)
			heap.Push(&rightWarehouse, Event{
				time:   result + int32(leftBank[0].pickOld),
				worker: leftBank[0],
			})
			heap.Pop(&leftBank)
			n--
		} else if len(leftWarehouse) != 0 && len(rightWarehouse) != 0 {
			if leftWarehouse[0].time <= rightWarehouse[0].time {
				result = leftWarehouse[0].time
			} else {
				result = rightWarehouse[0].time
			}
		} else if len(leftWarehouse) != 0 {
			result = leftWarehouse[0].time
		} else {
			result = rightWarehouse[0].time
		}
	}
	for len(rightWarehouse) != 0 {
		if rightWarehouse[0].time <= result {
			result += int32(rightWarehouse[0].worker.rightToLeft)
		} else {
			result = rightWarehouse[0].time + int32(rightWarehouse[0].worker.rightToLeft)
		}
		heap.Pop(&rightWarehouse)
	}
	return int(result)
}
```