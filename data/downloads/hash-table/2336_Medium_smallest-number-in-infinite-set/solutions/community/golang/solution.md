# Golang Heap Solution with Small-ish Explanation

**Author:** nathannaveen
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3558897/](https://leetcode.com/problems/smallest-number-in-infinite-set/solutions/3558897/)

---

For this solution there is a counter to know the smallest number that we are currently at (`smallest`), we also use a heap to know the smallest number that is added back into our infinite list (`added`). 

When we add a element back into our infinite list we have to check whether it is smaller than our current smallest element, other wise we add it twice into our infinite list.

When we add a element back into our infinite list we have to also check whether it is already in our heap, other wise we are also adding it to our infinite list again. We could loop through the entire heap to check, but that is an aditional `O(k)` time, with `k = len(heap)`. So in this solution we have a map called `inHeap` which is used to check whether the number `num` is currently in our heap. After we add it to our heap we can set `this.inHeap[num] = true` to show that we already have it in our heap. And after we pop of the value from the heap we set the value of the popped value in `inHeap` to `false` so that we know we can now add it to out heap again.

# Code

```
type SmallestInfiniteSet struct {
    smallest int
    added *IntHeap
    inHeap map[int] bool // the value : whether the value is inside the heap
}


func Constructor() SmallestInfiniteSet {
    h := &IntHeap{}
    heap.Init(h)
    return SmallestInfiniteSet{ 0, h, map[int] bool {} }
}


func (this *SmallestInfiniteSet) PopSmallest() int {
    if this.added.Len() > 0 {
        pop := heap.Pop(this.added).(int)
        this.inHeap[pop] = false
        return pop
    }
    
    this.smallest++
    return this.smallest
}


func (this *SmallestInfiniteSet) AddBack(num int)  {
    if num <= this.smallest && !this.inHeap[num] {
        this.inHeap[num] = true
        heap.Push(this.added, num)
    }
}


type IntHeap []int
func (h IntHeap) Len() int           { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *IntHeap) Push(x any) { *h = append(*h, x.(int)) }
func (h *IntHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}


/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.PopSmallest();
 * obj.AddBack(num);
 */
```