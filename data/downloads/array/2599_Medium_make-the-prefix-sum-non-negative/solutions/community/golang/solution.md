# O(N log N) - MinHeap to Store the negative numbers

**Author:** agp12
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/4742065/](https://leetcode.com/problems/make-the-prefix-sum-non-negative/solutions/4742065/)

---

# Intuition
We keep 2 things:
- prefixSum: that stores only `nums[i] >= 0`
- neg: that stores the cumulative sum of `nums[i] < 0` (the negative number). 

As we move the pointer, whenever `prefixSum + neg < 0`, we need to remove the smallest number (the biggest contributor that make the whole negative) in the `neg`. That can be helped by using the MinHeap that stores the negative number. We keep popping them until the `prefixSum + neg >= 0`

# Complexity
- Time complexity: O(N Log N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N) for storing the MinHeap. But we only need O(1) to store the prefix sum
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func makePrefSumNonNegative(nums []int) int {
    pq := NewMinHeap[int](func (a, b int)bool{
        return a < b
    })
    // prefixSum is the prefix sum of positive number
    prefixSum := 0
    n := len(nums)
    c := 0
    
    // neg: is the cumulative sum of negative number
    neg := 0
    for i:=0;i<n;i++{
        if nums[i] < 0 {
            for i < n && nums[i] < 0 {
                heap.Push(&pq, nums[i])
                neg += nums[i]
                i++
            }
            for pq.Len() > 0 && neg + prefixSum < 0 {
                useless := heap.Pop(&pq).(int)
                //fmt.Println(i, "remove", useless)
                neg -= useless
                c++
            }

            if i < n && nums[i] >= 0{
                prefixSum += nums[i]
            }

        } else{
            prefixSum += nums[i]
        }
    }
    return c
}


type minHeap[T any] struct {
	data []T
	less func(a, b T) bool
}

func NewMinHeap[T any](less func(a, b T) bool, data ...T) minHeap[T] {
	res := minHeap[T]{
		less: less,
        data: make([]T, 0),
	}

	if len(data) > 0 {
		res.data = make([]T, len(data))
		copy(res.data, data)
		heap.Init(&res)
	}

	return res
}

func (m minHeap[T]) Less(a, b int) bool {
	return m.less(m.data[a], m.data[b])
}

func (m *minHeap[T]) Clear() {
    m.data = make([]T, 0)
}

func (m minHeap[T]) Swap(a, b int) {
	m.data[a], m.data[b] = m.data[b], m.data[a]
}

func (m minHeap[T]) Len() int {
	return len(m.data)
}

func (m *minHeap[T]) Pop() any {
	l := m.Len()
	item := m.data[l-1]
	m.data = m.data[0 : l-1]
	return item
}

func (m *minHeap[T]) Peek() T {
	return m.data[0]
}

func (m *minHeap[T]) Push(a any) {
	m.data = append(m.data, a.(T))
}

```