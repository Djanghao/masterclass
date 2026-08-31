# Funny go solution with heap

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/2297918/](https://leetcode.com/problems/wiggle-sort-ii/solutions/2297918/)

---

```
func wiggleSort(nums []int)  {
    var heap []int
    
    for _, num := range nums {
        heap = append(heap, num)
        heapUp(heap, len(heap)-1)
    }
    
    k := len(nums)/2
    
    var topKLargestElement []int
    
    for i := 0; i < k; i++ {
        topKLargestElement = append(topKLargestElement, heap[0])
        heap[0] = heap[len(heap)-1]
        heap = heap[:len(heap)-1]
        heapDown(heap, 0, len(heap)-1)
    }
    
    sort.Slice(heap, func(i, j int) bool {
        return heap[i] > heap[j]
    })
    
    j, k := 0, 0
    
    for i := 0; i < len(nums); i++ {
        if i%2 == 1 {
            nums[i] = topKLargestElement[j]
            j++
        } else {
            nums[i] = heap[k]
            k++
        }
    }
}

func heapUp(heap []int, pos int) {
    parent := (pos-1)/2
    
    if parent >= 0 && heap[parent] < heap[pos] {
        heap[parent], heap[pos] = heap[pos], heap[parent]
        heapUp(heap, parent)
    }
}

func heapDown(heap []int, pos, limit int) {
    l, r := 2*pos+1, 2*pos+2
    larger := pos
    
    if l <= limit && heap[l] > heap[larger] {
        larger = l
    }
    
    if r <= limit && heap[r] > heap[larger] {
        larger = r
    }
    
    if larger != pos {
        heap[larger], heap[pos] = heap[pos], heap[larger]
        heapDown(heap, larger, limit)
    }
}

```
