# Using min-max heaps: beats 90% time / 100% memory

**Author:** pefreis
**Votes:** 2
**Link:** [https://leetcode.com/problems/finding-mk-average/solutions/5274673/](https://leetcode.com/problems/finding-mk-average/solutions/5274673/)

---

# Intuition
The goal hele is to prvide a way of querying for some statistics over the sorted order of a dynamic set of elements - the previous $$m$$ values at the moment we are queried. Obviously, this can be accomplished by sorting the set of previous $$m$$ items each time we are queried, but in order to be efficient, the solution must maintain these elements (somewhat) sorted.

Note that items that came before the previous $$m$$ elements should not be taken into consideration anymore, so we also have to handle their expiration appropriately.

# Approach
In first place, a queue (`q`) is used to keep track of the previous $$m$$ values received from stream.

For keeping the $$m - 2k$$ middle elements of sorted order, this solution used a simple (not optimal) implementation of min-max heaps (`mid`). Also, the sum of these elements is stored and continuously updated so that **querying operation** takes $$O(1)$$ time to compute the average.

Finally, to handle the expiration of values, other two min-max heaps (`l` and `r`) are maintained for the lowest and highest $$k$$ values. Also, the values are stored along with a `heapId` and indices (min and max) for locating it in the heap where it currently belongs.

With these in place, every time a new value is received, we first check if the queue is at its capacity, in which case the first entry in the queue must be expired. Then the new entry is inserted both in the queue and in the heaps.

Note that whenever we expire an entry or insert a new one into the heaps, they must be "rebalanced" to keep their size. Since min-max heaps are employed, this can be easily done by removing the lowest (or highest) value from a heap and pushing it to the neighboring heap.

# Complexity
- Time complexity:
$$O(M)$$ for `Constructor`, since we preallocate an array of size $$m$$ when creating the slice `q`.
$$O(logM)$$ for each `AddElement` operation.
$$O(1)$$ for each `CalculateMKAverage` operation.

- Space complexity:
$$O(M+2M)$$, being $$O(M)$$ for the queue and $$O(2M)$$ for the whole set of heaps.

# Code
```
import (
    "container/heap"
)

type MKNode struct {
    val int
    heapId int
    minIdx, maxIdx int
}

type MKMinHeap []*MKNode
type MKMaxHeap []*MKNode

func (h MKMinHeap) Len() int { return len(h) }
func (h MKMaxHeap) Len() int { return len(h) }
func (h MKMinHeap) Less(i, j int) bool { return h[i].val < h[j].val }
func (h MKMaxHeap) Less(i, j int) bool { return h[i].val > h[j].val }
func (h MKMinHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
    h[i].minIdx = i
    h[j].minIdx = j
}
func (h MKMaxHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
    h[i].maxIdx = i
    h[j].maxIdx = j
}
func (h *MKMinHeap) Push(v any) {
    n := len(*h)
    node := v.(*MKNode)
    node.minIdx = n
    *h = append(*h, node)
}
func (h *MKMaxHeap) Push(v any) {
    n := len(*h)
    node := v.(*MKNode)
    node.maxIdx = n
    *h = append(*h, node)
}
func (h *MKMinHeap) Pop() any {
    tmp := *h
    size := len(tmp)
    node := tmp[size-1]
    node.minIdx = -1
    tmp[size-1] = nil
    *h = tmp[:size-1]
    return node
}
func (h *MKMaxHeap) Pop() any {
    tmp := *h
    size := len(tmp)
    node := tmp[size-1]
    node.maxIdx = -1
    tmp[size-1] = nil
    *h = tmp[:size-1]
    return node
}

type MKHeap interface {
    Len() int
    Min() *MKNode
    Max() *MKNode
    PopMin() *MKNode
    PopMax() *MKNode
    Push(n *MKNode)
    Remove(minIdx int)
}

type mkHeap struct {
    id int
    minHeap MKMinHeap
    maxHeap MKMaxHeap
}

func NewMKHeap(id int) MKHeap {
    minHeap := MKMinHeap{}
    heap.Init(&minHeap)
    maxHeap := MKMaxHeap{}
    heap.Init(&maxHeap)
    return &mkHeap{id, minHeap, maxHeap}
}

func (h *mkHeap) Len() int { return h.minHeap.Len() }
func (h *mkHeap) Min() *MKNode { return h.minHeap[0] }
func (h *mkHeap) Max() *MKNode { return h.maxHeap[0] }
func (h *mkHeap) PopMin() *MKNode {
    n := heap.Pop(&h.minHeap).(*MKNode)
    heap.Remove(&h.maxHeap, n.maxIdx)
    n.maxIdx = -1
    n.heapId = -1
    return n
}
func (h *mkHeap) PopMax() *MKNode {
    n := heap.Pop(&h.maxHeap).(*MKNode)
    heap.Remove(&h.minHeap, n.minIdx)
    n.minIdx = -1
    n.heapId = -1
    return n
}
func (h *mkHeap) Push(n *MKNode) {
    n.heapId = h.id
    heap.Push(&h.minHeap, n)
    heap.Push(&h.maxHeap, n)
}
func (h *mkHeap) Remove(minIdx int) {
    n := heap.Remove(&h.minHeap, minIdx).(*MKNode)
    n.minIdx = -1
    heap.Remove(&h.maxHeap, n.maxIdx)
    n.maxIdx = -1
    n.heapId = -1
}

type MKAverage struct {
    m, k int
    q []*MKNode
    l, mid, r MKHeap
    midSum int
}

func Constructor(m int, k int) MKAverage {
    q := make([]*MKNode, 0, m)
    l := NewMKHeap(0)
    mid := NewMKHeap(1)
    r := NewMKHeap(2)
    return MKAverage{m, k, q, l, mid, r, 0}
}

func (this *MKAverage) AddElement(num int)  {
    if len(this.q) == this.m {
        this.expire()
    }
    newNode := &MKNode{val: num}
    this.q = append(this.q, newNode)
    this.r.Push(newNode)
    for this.r.Len() > this.k {
        n := this.r.PopMin()
        this.mid.Push(n)
        this.midSum += n.val
    }
    for this.mid.Len() > (this.m-2*this.k) {
        n := this.mid.PopMin()
        this.midSum -= n.val
        this.l.Push(n)
    }
}

func (this *MKAverage) CalculateMKAverage() int {
    if len(this.q) < this.m {
        return -1
    }
    return int(this.midSum / (this.m-2*this.k))
}

func (this *MKAverage) expire() {
    expired := this.q[0]
    if expired.heapId == 2 {
        this.r.Remove(expired.minIdx)
        n := this.l.PopMax()
        this.mid.Push(n)
        this.midSum += n.val
        n = this.mid.PopMax()
        this.midSum -= n.val
        this.r.Push(n)
    } else if expired.heapId == 1 {
        this.mid.Remove(expired.minIdx)
        this.midSum -= expired.val
        n := this.l.PopMax()
        this.mid.Push(n)
        this.midSum += n.val
    } else {
        this.l.Remove(expired.minIdx)
    }
    this.q[0] = nil
    this.q = this.q[1:]
}


/**
 * Your MKAverage object will be instantiated and called as such:
 * obj := Constructor(m, k);
 * obj.AddElement(num);
 * param_2 := obj.CalculateMKAverage();
 */
```