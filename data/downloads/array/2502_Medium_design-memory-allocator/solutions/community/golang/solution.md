# [Linked List] keeping track of memory chunks

**Author:** ethan1234
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/5314191/](https://leetcode.com/problems/design-memory-allocator/solutions/5314191/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use a fixed size array and mark all cells used by a mID in a list.
This has a drawback. For each allocation of size n we are keep $$O(n)$$ space to track it. Also to iterate over and see all blocks are used we will have to check $$O(n)$$ cells.


# Approach
<!-- Describe your approach to solving the problem. -->
This can be improved we only track start and end of allocation. let's call it chunk 
Which would be the best data structure for this kind of tracking.
1. We need to traverse in order of cell.
2. allocation can be of random size and we will need to onspot divide a chunk or merge two or more chunks.

LinkedList would be best here for above two requirement.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ n is current allocations
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ n is current allocations

implementation will be optimal if we allocate large chunks
# Code
```
type Allocator struct {
    allocated map[int][]*chunk
    head *chunk
}

type chunk struct {
    index int
    size int
    free bool
    next *chunk
}

func Constructor(n int) Allocator {
    head:= &chunk{index:0, size: n, free: true, next: nil}
    return Allocator{allocated: map[int][]*chunk{}, head: head}
}


func (this *Allocator) Allocate(need int, mID int) int {
    p := this.head
    var start *chunk 
    avail := 0
    for p != nil {
        if !p.free {
            start = nil
            avail = 0
        } else {
            avail += p.size
            if start == nil {
                start = p
            }
            // enough space accumulated
            if avail >= need {
                break
            }
        }
        p = p.next
    }
    if avail < need {
        return -1
    }
    // merge chunks to create one big chunk
    for start.size < need {
        start.size += start.next.size
        start.next = start.next.next
    }

    // break into new chunks if we have more size then needed
    if start.size > need {
        c := &chunk{index: start.index+need, size: start.size - need, free: true, next: start.next}
        start.size = need
        start.next = c
    }
    start.free = false
    this.allocated[mID] = append(this.allocated[mID], start)
    return start.index
}


func (this *Allocator) Free(mID int) int {
    count := 0
    for _, c := range this.allocated[mID] {
        count += c.size
        c.free = true
    }
    this.allocated[mID] = this.allocated[mID][:0]
    return count
}


/**
 * Your Allocator object will be instantiated and called as such:
 * obj := Constructor(n);
 * param_1 := obj.Allocate(size,mID);
 * param_2 := obj.Free(mID);
 */
```