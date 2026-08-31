# [Golang] Huffman Algorithm

**Author:** rassakhatsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/3990202/](https://leetcode.com/problems/minimum-time-to-build-blocks/solutions/3990202/)

---

# Intuition
Worker could be doubled into 2 workers or finish a job. So, it must be some kind of tree. End of the tree will contain block cost.
[1,2,3] would look like. That will be the most efficient way. The good thing that blocks can be done in any order. 
```
split=1
    4
   / \\
  3   3
 / \\
1   2
```
Can repeat it for [1,1,1] and [1,2,3,4,5] to see the pattern.
```
    0
   / \\
  0   1
 / \\
1   1
```
```
split=3
      11    
     /  \\
    8     7  
   / \\   / \\
  5   5 3   4
 / \\
1   2
```
# Approach
Utilizing min heap, get 2 elements and largest + split will be the next node cost, put it back and repeat till we get to the first element.

# Complexity
- Time complexity:
 $$O(n*log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
Reuse the same slice.

# Code
```
import "container/heap"

type minHeap []int

func (h minHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}

func (h *minHeap) Push(x any) {
	*h = append(*h, x.(int))
}

func (h *minHeap) Pop() any {
	old := *h
	v := old[len(old)-1]

	*h = old[0 : len(old)-1]

	return v
}

func (h minHeap) Len() int {
	return len(h)
}

func (h minHeap) Less(i, j int) bool {
	return h[i] < h[j]
}

func minBuildTime(blocks []int, split int) int {
	h := minHeap(blocks)

	heap.Init(&h)

	for h.Len() > 1 {
		_, y := heap.Pop(&h).(int), heap.Pop(&h).(int)
		heap.Push(&h, y+split)
	}

	return blocks[0]
}
```