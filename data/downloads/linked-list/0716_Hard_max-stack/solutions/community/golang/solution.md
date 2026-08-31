# Golang | Beats 100% | Doubly linked list | MaxHeap | GC

**Author:** MARTIN3T
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-stack/solutions/3874806/](https://leetcode.com/problems/max-stack/solutions/3874806/)

---

# Complexity
- Time complexity:
  - Push: O(logN)
  - Pop: O(1)
  - Top: O(1)
  - PeekMax: O(logN)
  - PopMax: O(1)

# Code
```
type MaxStack struct {
    start *node
    end *node
	maxNodes MaxHeap
}

type node struct {
    val int
    prev *node
    next *node
}


func Constructor() MaxStack {
    start,end:=&node{},&node{}
    start.next=end
    end.prev=start

    return MaxStack{
        start:start,
        end:end,
		maxNodes:MaxHeap{},
    }
}


func (this *MaxStack) Push(x int)  {
	n:=&node{val:x}
    this.insertRight(n)
	heap.Push(&this.maxNodes,n)
}


func (this *MaxStack) Pop() int {
	val:=this.end.prev.val
    this.delete(this.end.prev)		
	return val
}


func (this *MaxStack) Top() int {
    return this.end.prev.val
}


func (this *MaxStack) PeekMax() int {
    n:=heap.Pop(&this.maxNodes).(*node)
    for n.next==nil{
        n=heap.Pop(&this.maxNodes).(*node)
    }

    heap.Push(&this.maxNodes,n)
    return n.val
}


func (this *MaxStack) PopMax() int {
    n:=heap.Pop(&this.maxNodes).(*node)
    for n.next==nil{
        n=heap.Pop(&this.maxNodes).(*node)
    }

    this.delete(n)
    return n.val    
}

func (this *MaxStack) insertRight(n *node){
    last:=this.end.prev
    last.next=n
    this.end.prev=n
    n.prev=last
    n.next=this.end
}

func (this *MaxStack) delete(n *node){
    n.next.prev=n.prev
    n.prev.next=n.next
    n.next=nil
    n.prev=nil
}

// An MaxHeap is a max-heap of nodes.
type MaxHeap []*node

func (h MaxHeap) Len() int           { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i].val >= h[j].val }
func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MaxHeap) Push(x any) {
	// Push and Pop use pointer receivers because they modify the slice's length,
	// not just its contents.
	*h = append(*h, x.(*node))
}

func (h *MaxHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.PeekMax();
 * param_5 := obj.PopMax();
 */
```