# Golang Solution with MinHeap | Very Clearly Explained!

**Author:** ansuraj
**Votes:** 5
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/2179294/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/2179294/)

---

**Approach**
* using bricks is costly, so use them sensibly
* the basic idea should be to use the min-height-differences for bricks
* get the diff of heights b/w elements
* push the height diff into a min heap
* so that the min-height-diff is at the top
* the size of the min-heap must be at max the number of ladders
* once the heap size is exceeded, and we pop the min element from the heap
* the min element must be use the bricks, and update the remaining bricks
* if bricks are used up or the last element is reached, we have the answer



```
type IntHeap []int

// the below 3 functions use the heap interface in container/heap package
func (h IntHeap) Less(i,j int) bool {
    
    return h[i] < h[j]
}

func (h IntHeap) Swap(i,j int) {
    
     h[i], h[j] = h[j], h[i]
}

func (h IntHeap) Len() int {
    
    return len(h)
}

// any is alias of interface, hence we have to convert the popped elemnet or pushed element
// type assertions are needed on the popped element is an interface
// x.(int) - a type assertion provides access to an interface value's underlying concrete value.
// interface{} or any can be used interchangebly
// any variable of type - IntHeap will have the Push and Pop properties
// Push and Pop use pointer receivers because they modify the slice's length

func (h *IntHeap) Pop() interface{} {
    original := *h
    l := len(*h)
    x := original[l-1]
    *h = original[:l-1]
    
    return x
}

func (h *IntHeap) Push(x interface{}) {
    *h = append(*h, x.(int))
}

func furthestBuilding(heights []int, bricks int, ladders int) int {
    
    h := &IntHeap{}
    // initilize a heap, with the init func from the heap interface
    heap.Init(h)
    
    oldHeight := heights[0]
    for i := 1; i < len(heights); i++ {
        
        // ignore the buildings of lesser height
        if heights[i] - oldHeight <= 0 {
            oldHeight = heights[i]
            
            continue
        }
        
        // push the element to min heap, so now the min heap would be at the bottom of the array
        heap.Push(h, heights[i] - oldHeight)
        
        // the min heap is full, we need to pop the min value and access its concrete int value
        if h.Len() > ladders {
            min := heap.Pop(h).(int)
            
            // use the bricks with the min value/min height difference
            if bricks >= min {
                bricks -= min
            } else {
                // this index - i cannot be reached
                return i-1
            }
        }
        
        oldHeight = heights[i]
    }
    
    return len(heights) - 1
}