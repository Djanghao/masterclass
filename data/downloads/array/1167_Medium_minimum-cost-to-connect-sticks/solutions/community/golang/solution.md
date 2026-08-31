# [Go] Minimum Cost to Connect Sticks - Clean Code with Min Heap (98%)

**Author:** krex0r
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/1675607/](https://leetcode.com/problems/minimum-cost-to-connect-sticks/solutions/1675607/)

---

Hello Gophers!

```
 |  |  |  |   totalCost = 0
 1  8  3  5
 
  |  |  |     totalCost += (1+3) --> 4
  4  8  5
  
  |  |        totalCost += (4+5) --> 13
  9  8 
  
  |           totalCost += (17) --> 30
  17
```

Code:

```go
func connectSticks(sticks []int) int {
    heap := NewMinHeap()
    for _, stick := range sticks {
        heap.Add(stick)
    }
    var totalCost int
    for heap.Size() > 1 {
        cur1 := heap.RemoveMin()
        cur2 := heap.RemoveMin()
        newStick := cur1+cur2
        totalCost += newStick
        heap.Add(newStick)
    }
    return totalCost
}

type MinHeap struct {
    items []int
}

func NewMinHeap() *MinHeap {
    return &MinHeap{
        items: make([]int, 0),
    }
}

func (h *MinHeap) Add(x int) {
    pos := h.Size()
    h.items = append(h.items, x)
    h.heapifyUp(pos)
}

func (h *MinHeap) heapifyUp(i int) {
    for h.items[i] < h.items[parentOf(i)] {
        h.swap(i, parentOf(i))
        i = parentOf(i)
    }
}

func (h *MinHeap) RemoveMin() (min int) {
    min, h.items[0], h.items = h.items[0], h.items[h.Size()-1], h.items[:h.Size()-1]
    h.heapfyDown(0)
    return
}

func (h *MinHeap) heapfyDown(x int) {
    var posToSwap int
    left, right := childLeft(x), childRight(x)
    if h.has(left) && h.has(right) {
        if h.items[left] < h.items[right] {
            posToSwap = left
        } else {
            posToSwap = right
        }
    } else if h.has(left) {
        posToSwap = left
    } else if h.has(right) {
        posToSwap = right
    } else {
        return
    }
    if h.items[x] > h.items[posToSwap] {
        h.swap(x, posToSwap)
        x = posToSwap
        h.heapfyDown(x)
    }
}

func (h *MinHeap) has(pos int) bool {
    return pos < h.Size()
}

func (h *MinHeap) swap(i, j int) {
    h.items[i], h.items[j] =  h.items[j], h.items[i]
}

func (h *MinHeap) Size() int {
    return len(h.items)
}

func parentOf(i int) int {
    return (i-1)/2
}

func childLeft(i int) int {
    return 2*i+1
}

func childRight(i int) int {
    return 2*i+2
}
```