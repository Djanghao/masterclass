# go dp + monotonous queue

**Author:** xyx530538772
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/2673382/](https://leetcode.com/problems/paint-house-ii/solutions/2673382/)

---

```go

type IntMonotonicQueue struct {
	MaxQ, MinQ, q []int
}

func NewIntMonotonicQueue() IntMonotonicQueue {
	return IntMonotonicQueue{
		MaxQ: make([]int, 0),
		MinQ: make([]int, 0),
		q:    make([]int, 0),
	}
}

func (i *IntMonotonicQueue) Push(n int) {
	i.q = append(i.q, n)
	for len(i.MaxQ) > 0 && i.MaxQ[len(i.MaxQ)-1] < n {
		i.MaxQ = i.MaxQ[:len(i.MaxQ)-1]
	}
	i.MaxQ = append(i.MaxQ, n)
	for len(i.MinQ) > 0 && i.MinQ[len(i.MinQ)-1] > n {
		i.MinQ = i.MinQ[:len(i.MinQ)-1]
	}
	i.MinQ = append(i.MinQ, n)
}

func (i *IntMonotonicQueue) Pop() int {
	x := i.q[0]
	if i.MaxQ[0] == x {
		i.MaxQ = i.MaxQ[1:]
	}
	if i.MinQ[0] == x {
		i.MinQ = i.MinQ[1:]
	}
	i.q = i.q[1:]
	return x
}

func (i *IntMonotonicQueue) Max() int {
	return i.MaxQ[0]
}

func (i *IntMonotonicQueue) Min() int {
	return i.MinQ[0]
}

func (i *IntMonotonicQueue) Size() int {
	return len(i.q)
}

func (i *IntMonotonicQueue) isEmpty() bool {
	return i.Size() == 0
}

func minInt(i, j int) int {
	if i > j {
		return j
	}
	return i
}

func minCostII(costs [][]int) int {
	n, k := len(costs), len(costs[0])
	dp := make([][]int, n)
	for i := 0; i < n; i++ {
		dp[i] = make([]int, k)
	}
	for i := 0; i < k; i++ {
		dp[0][i] = costs[0][i]
	}
	for i := 1; i < n; i++ {
		mq := NewIntMonotonicQueue()
		for j := 0; j < k; j++ {
			mq.Push(dp[i-1][j])
		}
		for j := 0; j < k; j++ {
			mq.Pop()
			dp[i][j] = costs[i][j] + mq.Min()
			mq.Push(dp[i-1][j])
		}
	}
	res := math.MaxInt64
	for j := 0; j < k; j++ {
		res = minInt(res, dp[n-1][j])
	}
	return res
}
```