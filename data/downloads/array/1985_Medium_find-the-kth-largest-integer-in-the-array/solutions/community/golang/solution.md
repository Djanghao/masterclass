# Simple solution with heap - Plus compare str1 and str2 function

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2297738/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/2297738/)

---

```
func kthLargestNumber(nums []string, k int) string {
    var heap []string
    
    for i := 0; i < len(nums); i++ {
        heap = append(heap, nums[i])
        heapUp(heap, len(heap)-1)
        
        if len(heap) > k {
            heap[0] = heap[len(heap)-1]
            heap = heap[:len(heap)-1]
            heapDown(heap, 0, len(heap)-1)
        }
    }
    
    return heap[0]
}

func heapUp(heap []string, position int) {
    parent := (position-1)/2

    if parent >= 0 && compare(heap[position], heap[parent]) == -1 {
        heap[parent], heap[position] = heap[position], heap[parent]
        heapUp(heap, parent)
    }
}

func heapDown(heap []string, position, limit int) {
    l, r := 2*position+1, 2*position+2
    smaller := position
    
    if l <= limit && compare(heap[l], heap[smaller]) == -1 {
        smaller = l
    }
    
    if r <= limit && compare(heap[r], heap[smaller]) == -1 {
        smaller = r
    }
    
    if smaller != position {
        heap[smaller], heap[position] = heap[position], heap[smaller]
        heapDown(heap, smaller, limit)
    }
}

func compare(s1, s2 string) int {
    if len(s1) > len(s2) {
        return 1
    }
    
    if len(s1) < len(s2) {
        return -1
    }
    
    res := 1
    
    for i := 0; i < len(s1); i++ {
        if s1[i] > s2[i] {
            return 1
        } else if s1[i] < s2[i] {
            return -1
        }
    }
    
    return res
}
```