# Iterative segment tree with lazy propagation and coordinate compression

**Author:** bacbia3696
**Votes:** 0
**Link:** [https://leetcode.com/problems/falling-squares/solutions/4303996/](https://leetcode.com/problems/falling-squares/solutions/4303996/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func fallingSquares(positions [][]int) []int {
	xs := []int{}
	for _, p := range positions {
		x, h := p[0], p[1]
		xs = append(xs, x)
		xs = append(xs, x+h-1)
	}
	slices.Sort(xs)
	hm := map[int]int{}
	i := 0
	for _, x := range xs {
		if _, ok := hm[x]; !ok {
			hm[x] = i
			i++
		}
	}
	size := len(hm)
	t := make([]int, 2*size)
	lz := make([]int, size)
	h := 64

	build := func(p int) {
		for ; p > 1; p /= 2 {
			t[p/2] = max(t[p/2*2], t[p/2*2+1], lz[p/2])
		}
	}
	apply := func(p, val int) {
		t[p] = val
		if p < size {
			lz[p] = val
		}
	}
	push := func(p int) {
		for s := h; s > 0; s-- {
			i := p >> s
			if lz[i] != 0 {
				apply(i*2, lz[i])
				apply(i*2+1, lz[i])
				lz[i] = 0
			}
		}
	}

	query := func(l, r int) int {
		l += size
		r += size
		push(l)
		push(r)
		rs := math.MinInt
		for ; l <= r; l, r = l/2, r/2 {
			if l%2 == 1 {
				rs = max(rs, t[l])
				l++
			}
			if r%2 == 0 {
				rs = max(rs, t[r])
				r--
			}
		}
		return rs
	}
	set := func(l, r, val int) {
		l += size
		r += size
		l0, r0 := l, r
		for ; l <= r; l, r = l/2, r/2 {
			if l%2 == 1 {
				apply(l, val)
				l++
			}
			if r%2 == 0 {
				apply(r, val)
				r--
			}
		}
		build(l0)
		build(r0)
	}

	rs := []int{}
	for _, p := range positions {
		x, h := p[0], p[1]
		x0, x1 := hm[x], hm[x+h-1]
		curHeight := query(x0, x1)
		set(x0, x1, h+curHeight)
		tp := query(0, size-1)
		rs = append(rs, tp)
	}

	return rs
}

```