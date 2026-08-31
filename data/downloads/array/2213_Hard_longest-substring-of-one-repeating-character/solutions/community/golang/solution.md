# [Golang][Segmentation Tree] - Standard way

**Author:** RainScar
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/3460196/](https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/3460196/)

---

# Intuition
I believer there're a numerous of segmentation-tree based solutions out there being neat, efficient and clear. 

I present my `raw` segmentation tree based solutions here to provide a verbose while standard version of the solution. Optimizations may apply

# Code
```

func max(arr ...int) int {
	ret := -1
	for _, elem := range arr {
		if ret < elem {
			ret = elem
		}
	}
	return ret
}

type SegTreeNode struct {
	lchar, rchar byte
	l, r, lc, rc int
	lth          int
	left, right  *SegTreeNode
}

func (n *SegTreeNode) Merge() {
	n.lc = n.left.lc
	n.rc = n.right.rc
	n.lchar = n.left.lchar
	n.rchar = n.right.rchar
	n.lth = max(n.left.lth, n.right.lth)
	if n.left.rchar == n.right.lchar {
		n.lth = max(n.lth, n.left.rc+n.right.lc)
		if n.left.lth == (n.left.r - n.left.l + 1) {
			n.lc = n.left.lc + n.right.lc
		}
		if n.right.lth == (n.right.r - n.right.l + 1) {
			n.rc = n.right.rc + n.left.rc
		}
	}
}

func Split(l, r int, src *string) *SegTreeNode {

	n := &SegTreeNode{
		l:     l,
		r:     r,
		lchar: (*src)[l],
		rchar: (*src)[r],
		lc:    1,
		rc:    1,
		lth:   1,
		left:  nil,
		right: nil,
	}

	if l != r {
		mid := (l + r) / 2
		n.left = Split(l, mid, src)
		n.right = Split(mid+1, r, src)
		n.Merge()
	}

	return n
}

func (n *SegTreeNode) Update(i int, c byte) *SegTreeNode {

	if n == nil {
		return n
	} else if i < n.l || i > n.r {
		return n
	} else if n.l == n.r {
		n.lchar = c
		n.rchar = c
		return n
	}

	n.left.Update(i, c)
	n.right.Update(i, c)
	n.Merge()
	return n
}

func longestRepeating(s string, queryCharacters string, queryIndices []int) []int {
	// Build Tree
	root := Split(0, len(s)-1, &s)
	n := len(queryCharacters)
	ret := make([]int, 0)
	for i := 0; i < n; i += 1 {
		root.Update(queryIndices[i], queryCharacters[i])
		ret = append(ret, root.lth)
	}
	return ret
}

```