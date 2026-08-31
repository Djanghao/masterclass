# Easy Heap Solution (two Heaps)

**Author:** irfan_md
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/3520455/](https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/solutions/3520455/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Since we are looking for the minimum difference, we want the sum of the first part as small as possible and right part as great as possible.

For the first part(sumFirst), we can use a Max Heap of size N to store the smallest N elements in it.

We traverse from left(0) to right(n-k). For each A[i], we push it into the heap. If the heap size is greater than N, we pop the heap top. In this way, we track the smallest N elements and their sum.

Similarly for the right part, but we want the greatest N elements.
For the second part(sumSecond ), we can use a Min Heap of size N to store the greatest N elements in it.

We traverse from right(n-1) to left(k). For each A[i], we push it into the heap. If the heap size is greater than N, we pop the heap top. In this way, we track the greatest N elements and their sum.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func minimumDifference(nums []int) int64 {
    sumFirst, sumSecond := 0, 0
    ans := math.MaxInt64
    n := len(nums)
    k := n/3

    maxH := &maxHeap{}
    heap.Init(maxH)
    minH := &minHeap{}
    heap.Init(minH)

    temp := make([]int, n)
    for i:= n-1 ;i>=k;i-- {
        heap.Push(minH, nums[i])
        // minH.Push(nums[i])
        sumSecond +=nums[i]
        if minH.Len() > k {
            // sumSecond -= minH.Pop()
            sumSecond -= heap.Pop(minH).(int)
        }
        if minH.Len() == k {
            temp[i] = sumSecond
        }
    }

    for i:=0;i<n-k;i++ {
        // maxH.Push(nums[i])
        heap.Push(maxH, nums[i])
        sumFirst += nums[i]
        if maxH.Len() > k {
            // sumFirst -= maxH.Pop()
            sumFirst -= heap.Pop(maxH).(int)
        }
        if maxH.Len() == k {
           if ans > (sumFirst-temp[i+1]) {
               ans = sumFirst - temp[i+1]
           }
        }
    }

    return int64(ans)

}

// maxHeap
type maxHeap []int

func(max maxHeap) Swap(i, j int) {
    max[i], max[j] = max[j], max[i]
}

func(max maxHeap) Less(i, j int) bool {
    return max[i] > max[j]
} 

func(max maxHeap) Len() int {
    return len(max)
}

func (max *maxHeap) Push(x any) {
    *max = append(*max, x.(int))
}

func(max *maxHeap) Pop() any {
    old := *max
    n := len(old)
    x := old[n-1]
    *max = old[0:n-1]
    return x
}

// minHeap
type minHeap []int

func(min minHeap) Swap(i, j int) {
    min[i], min[j] = min[j], min[i]
}

func(min minHeap) Less(i, j int) bool {
    return min[i] < min[j]
} 

func(min minHeap) Len() int {
    return len(min)
}

func (min *minHeap) Push(x any) {
    *min = append(*min, x.(int))
}

func(min *minHeap) Pop() any {
    old := *min
    n := len(old)
    x := old[n-1]
    *min = old[0:n-1]
    return x
}
```