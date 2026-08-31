# golang solution, heap

**Author:** jerrylui803
**Votes:** 0
**Link:** [https://leetcode.com/problems/brightest-position-on-street/solutions/5810485/](https://leetcode.com/problems/brightest-position-on-street/solutions/5810485/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []


// An IntHeap is a min-heap of ints.
type IntHeap []int

func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *IntHeap) Push(x any) {
	// Push and Pop use pointer receivers because they modify the slice's length,
	// not just its contents.
	*h = append(*h, x.(int))
}

func (h *IntHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func (h *IntHeap) Peek() any {
	return (*h)[0]
}

func brightestPosition(lights [][]int) int {

	// convert the lights array to [start, end] format, instead of
	// [middle, duration] format

	lightIntervals := make([][]int, 0)
	for _, light := range lights {
		start := light[0] - light[1]
		end := light[0] + light[1]

		newLightInterval := []int{start, end}
		lightIntervals = append(lightIntervals, newLightInterval)

	}

	// sort by start time
	sort.SliceStable(lightIntervals, func(i, j int) bool {
		return lightIntervals[i][0] < lightIntervals[j][0]
	})

	// the brightness of a specific position can change only if:
	// - a light starts at this position
	// - a light ends at this position

	// we compute the light level at each of the above positions in order
	// the start position is already sorted
	// the end position can be "sorted" by using a pirority queue

	if len(lightIntervals) == 1 {
		return lightIntervals[0][0]
	}

	h := &IntHeap{}
	heap.Init(h)

	maxBrightnessIndex := 0
	maxBrightness := 0
	currBrightness := 0

	for i := 0; i < len(lightIntervals); i++ {
		nextStart := lightIntervals[i][0]

		// peek the heap
		for h.Len() > 0 && nextStart > h.Peek().(int) {
			// then there is a lamp that ends before the next lamp starts
			currBrightness--
			heap.Pop(h)
		}

		// now we process nextStart
		currBrightness++
		heap.Push(h, lightIntervals[i][1])
		if currBrightness > maxBrightness {
			maxBrightness = currBrightness
			maxBrightnessIndex = nextStart
		}
	}

	return maxBrightnessIndex
}
```