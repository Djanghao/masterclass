# Golang Solution using minheap- Beats 100% runtime

**Author:** sumit_negi
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5718245/](https://leetcode.com/problems/k-th-nearest-obstacle-queries/solutions/5718245/)

---

# Intuition
Maxheap of k elements

# Approach
At any point, store k maximum distances in the max heap. 
If heaplength >k ==> Pop from maxheap till k elements are remaining.
After popping, if number of elements in heap remaining less than k, add -1 to the answer array 
Otherwise add topmost element of heap to the answer array. It will be the kth nearest distance. 

# Complexity
- Time complexity:
O(nlogk) // (log k for pushing into maxheap. + log k for popping from heap ) * at max n times fro n queries

- Space complexity:
O(k) // k+1 sized heap at any moment

# Code
```golang []
type maxHeap []int

func (h maxHeap) Len() int           { return len(h) }
func (h maxHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h maxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *maxHeap) Push(x any) {
	*h = append(*h, x.(int))
}

func (h *maxHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func resultsArray(queries [][]int, k int) []int {
    n:=len(queries)
    h:=&maxHeap{}
    heap.Init(h)
    var ans []int
    getAbs:=func(a int)int{
        if a<0{return a*-1}else{return a}
    }
    for i:=0;i<n;i++{
        heap.Push(h,getAbs(queries[i][0])+getAbs(queries[i][1]))
        for h.Len()>k{
            heap.Pop(h)
        }
        if h.Len()<k{
            ans=append(ans,-1)
        }else{
            ans=append(ans,(*h)[0])
        }
    }
    return ans
}
```