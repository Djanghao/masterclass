# 👍Runtime 57 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/5389145/](https://leetcode.com/problems/minimum-possible-integer-after-at-most-k-adjacent-swaps-on-digits/solutions/5389145/)

---

# Code
```
type SegmentTree struct {
	nodes []int
	n     int
}

func NewSegmentTree(max int) *SegmentTree {
	return &SegmentTree{nodes: make([]int, 4*max), n: max}
}

func (st *SegmentTree) add(num, l, r, node int) {
	if num < l || num > r {
		return
	}
	if l == r {
		st.nodes[node]++
		return
	}
	mid := (l + r) / 2
	st.add(num, l, mid, 2*node+1)
	st.add(num, mid+1, r, 2*node+2)
	st.nodes[node] = st.nodes[2*node+1] + st.nodes[2*node+2]
}

func (st *SegmentTree) Add(num int) {
	st.add(num, 0, st.n, 0)
}

func (st *SegmentTree) getUtil(ql, qr, l, r, node int) int {
	if qr < l || ql > r {
		return 0
	}
	if ql <= l && qr >= r {
		return st.nodes[node]
	}
	mid := (l + r) / 2
	return st.getUtil(ql, qr, l, mid, 2*node+1) + st.getUtil(ql, qr, mid+1, r, 2*node+2)
}

func (st *SegmentTree) GetCountLessThan(num int) int {
	return st.getUtil(0, num, 0, st.n, 0)
}

func minInteger(num string, k int) string {
	n := len(num)
	pqs := make([][]int, 10)
	for i := 0; i < 10; i++ {
		pqs[i] = []int{}
	}
	for i := 0; i < n; i++ {
		pqs[num[i]-'0'] = append(pqs[num[i]-'0'], i)
	}
	ans := []byte{}
	seg := NewSegmentTree(n)
	for i := 0; i < n; i++ {
		for digit := 0; digit <= 9; digit++ {
			if len(pqs[digit]) != 0 {
				pos := pqs[digit][0]
				shift := seg.GetCountLessThan(pos)
				if pos-shift <= k {
					k -= pos - shift
					seg.Add(pos)
					pqs[digit] = pqs[digit][1:]
					ans = append(ans, byte('0'+digit))
					break
				}
			}
		}
	}
	return string(ans)
}
```