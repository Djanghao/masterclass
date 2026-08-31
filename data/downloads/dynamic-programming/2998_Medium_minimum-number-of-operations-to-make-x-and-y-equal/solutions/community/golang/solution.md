# Golang BFS using queue | Simple and Easy to understand

**Author:** Uneet
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4523169/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4523169/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(abs(x\u2212y))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(abs(x\u2212y))
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

type BFSEntry struct {
	level int
	num int
}

type Queue []*BFSEntry

func (q *Queue) Enqueue(ele *BFSEntry) {
	*q = append(*q, ele)
}

func (q *Queue) Dequeue() (*BFSEntry, error) {
	if len(*q) == 0 {
		return nil, fmt.Errorf("queue is empty")
	}
	val := (*q)[0]
	*q = (*q)[1:]
	return val, nil
}

func (q *Queue) Size() int {
	return len(*q)
}

func (q *Queue) PrintQ() {
	for _, v := range *q {
		fmt.Println(*v)
	}
}


func minimumOperationsToMakeEqual(x int, y int) int {
	if y >= x {
		return y - x
	}

	var queue Queue
	queue.Enqueue(&BFSEntry{
		num:   x,
		level: 0,
	})
	visited := make(map[int]bool)
	for queue.Size() > 0 {
		ele, _ := queue.Dequeue()
		if ele.num == y {
			return ele.level
		}
		if _, ok := visited[ele.num]; ok {
			continue
		}
		visited[ele.num] = true
		if ele.num%11 == 0 {
			queue.Enqueue(&BFSEntry{
				level: ele.level + 1,
				num:   ele.num / 11,
			})
		}
		if ele.num%5 == 0 {
			queue.Enqueue(&BFSEntry{
				level: ele.level + 1,
				num:   ele.num / 5,
			})
		}
		queue.Enqueue(&BFSEntry{
			level: ele.level + 1,
			num:   ele.num - 1,
		})
		queue.Enqueue(&BFSEntry{
			level: ele.level + 1,
			num:   ele.num + 1,
		})
	}

	return -1
}

```