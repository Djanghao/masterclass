# 👍Runtime 779 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-increasing-quadruplets/solutions/5433974/](https://leetcode.com/problems/count-increasing-quadruplets/solutions/5433974/)

---

# Code
```
type Fenwick struct {
	bit []int64
}

// Initialize Fenwick tree with given size
func NewFenwick(size int) *Fenwick {
	return &Fenwick{
		bit: make([]int64, size),
	}
}

// Sum calculates prefix sum up to given index
func (f *Fenwick) Sum(index int) int64 {
	var sum int64
	for index > 0 {
		sum += f.bit[index]
		index -= index & -index
	}
	return sum
}

// Query range sum from l to r
func (f *Fenwick) Query(l, r int) int64 {
	r = min(r, len(f.bit)-1)
	l = max(l, 1)
	return f.Sum(r) - f.Sum(l-1)
}

// Update Fenwick tree at given index with given value
func (f *Fenwick) Update(index int, val int) {
	for index < len(f.bit) {
		f.bit[index] += int64(val)
		index += index & -index
	}
}

// Utility function to get minimum of two numbers
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// Utility function to get maximum of two numbers
func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func countQuadruplets(nums []int) int64 {
	n := len(nums)

	t1 := NewFenwick(n + 1)
	t2 := NewFenwick(n + 1)
	var ans int64

	for i := 1; i <= n; i++ {
		t2.Update(i, 1)
	}

	for j := 0; j < n; j++ {
		t2.Update(nums[j], -1)

		for k := j + 1; k < n; k++ {
			t2.Update(nums[k], -1)

			if nums[j] > nums[k] {
				c1 := t1.Query(1, nums[k])
				c2 := t2.Query(nums[j], n)
				ans += c1 * c2
			}
		}

		for k := j + 1; k < n; k++ {
			t2.Update(nums[k], 1)
		}

		t1.Update(nums[j], 1)
	}
	return ans    
}
```