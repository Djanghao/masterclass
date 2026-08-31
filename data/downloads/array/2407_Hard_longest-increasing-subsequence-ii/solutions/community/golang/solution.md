# Go Segment Tree

**Author:** german_gorelkin
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/5863806/](https://leetcode.com/problems/longest-increasing-subsequence-ii/solutions/5863806/)

---



# Code
```golang []
func lengthOfLIS(nums []int, k int) int {
	st := NewSegmentTree(nums)

	for _, n := range nums {
		n--
		l := max(0, n-k)
		lmax := st.query(l, n-1, 0, st.n-1, 0)
		lmax++
		st.update(n, lmax, 0, st.n-1, 0)
	}

	return st.maxVal()
}

func maxVal(nums []int) int {
	res := nums[0]
	for _, n := range nums {
		res = max(res, n)
	}
	return res
}

type SegmentTree struct {
	tree []int
	n    int
}

func NewSegmentTree(nums []int) SegmentTree {
	n := maxVal(nums)
	size := 2*int(math.Pow(2, math.Ceil(math.Log2(float64(n))))) - 1
	tree := make([]int, size)
	st := SegmentTree{
		tree: tree,
		n:    n,
	}

	return st
}

func (st SegmentTree) maxVal() int {
	return st.tree[0]
}

func (st SegmentTree) update(index int, value int, start, end int, node int) {
	if start == end {
		st.tree[node] = value
		return
	}

	mid := (start + end) / 2
	if index <= mid {
		st.update(index, value, start, mid, 2*node+1)
	} else {
		st.update(index, value, mid+1, end, 2*node+2)
	}

	st.tree[node] = max(st.tree[2*node+1], st.tree[2*node+2])
}

func (st SegmentTree) query(l, r, start, end, node int) int {
	if l > end || r < start {
		return 0
	}
	if l <= start && r >= end {
		return st.tree[node]
	}

	mid := (start + end) / 2
	leftMax := st.query(l, r, start, mid, 2*node+1)
	rightMax := st.query(l, r, mid+1, end, 2*node+2)
	return max(leftMax, rightMax)
}
```