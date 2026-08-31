# [Go] DFS with brief explanation

**Author:** sebnyberg
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2202388/](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2202388/)

---

There's no Go solution yet so I'll post mine here.

There can be up to 1000 edges.
Considering all pairs of edges is feasible if the XOR of each
new tree can be calculated in O(1) or O(logN).

Personally, I found it easier to consider nodes rather than edges.
Cutting a node's edge means chopping of its connecting parent edge,
which creates a new subtree rooted at the node.

Consider chopping of a single subtree from the root.
The XOR of the tree after losing its subtree is `xor[root] ^ xor[subtree]`.

Consider chopping a second subtree.
If the subtree is independent from the first, then the XOR of the tree becomes
`xor[root] ^ xor[subtree1] ^ xor[subtree2]`.

The tricky part is when a subtree is part of another subtree.
Then the root becomes `xor[root] ^ xor[subRoot]`,
and the subroot XOR becomes `xor[subRoot] ^ xor[subChild]`.

This leads us to the solution:
1. Calculate XOR of each subtree rooted in each node
2. Visit each node, consider it a "subroot", i.e. the root of a subtree
3. Visit each child of the "subroot". Add it to a list of children for the subroot.
4. Check whether chopping of the subroot and subroot child trees is optimal
5. Once all children have been visited for the subroot, consider every non-child and non-parent of the subroot.
6. Done!

```go
func minimumScore(nums []int, edges [][]int) int {
	n := len(nums)

	// Create bi-directional adjacency list
	bidiAdj := make([][]int, n)
	for _, e := range edges {
		if e[0] > e[1] {
			e[0], e[1] = e[1], e[0]
		}
		bidiAdj[e[0]] = append(bidiAdj[e[0]], e[1])
		bidiAdj[e[1]] = append(bidiAdj[e[1]], e[0])
	}

	// Convert into regular adjacency list
	curr := []int{0}
	next := []int{}
	seen := make([]bool, n)
	adj := make([][]int, n)
	seen[0] = true
	for len(curr) > 0 {
		next = next[:0]
		for _, i := range curr {
			for _, j := range bidiAdj[i] {
				if seen[j] {
					continue
				}
				seen[j] = true
				next = append(next, j)
				adj[i] = append(adj[i], j)
			}
		}
		curr, next = next, curr
	}

	// Capture the XOR value of each subtree rooted in a node
	xors := make([]int, n)
	copy(xors, nums)
	var calcXOR func(i int) int
	calcXOR = func(i int) int {
		for _, nei := range adj[i] {
			xors[i] ^= calcXOR(nei)
		}
		return xors[i]
	}
	calcXOR(0)

	// isParent[i] is true if the node is a isParent of the current node
	isParent := make([]bool, n)
	isParent[0] = true
	// isChild[i] is true if the node is a isChild of the current node
	// isChild is reset once traversal of all children for a node has finished
	isChild := make([]bool, n)

	res := math.MaxInt64

	// Visit each subchild, marking it as a child and comparing it with its
	// subtree parent.
	var visitSubChild func(subRoot, child int)
	visitSubChild = func(subRoot, child int) {
		subRootXOR := xors[subRoot] ^ xors[child]
		childXOR := xors[child]
		treeXOR := xors[0] ^ xors[subRoot]
		maxXOR := max(subRootXOR, max(childXOR, treeXOR))
		minXOR := min(subRootXOR, min(childXOR, treeXOR))
		res = min(res, maxXOR-minXOR)
		isChild[child] = true
		for _, nei := range adj[child] {
			visitSubChild(subRoot, nei)
		}
	}

	var visitSubRoot func(subRoot int)
	visitSubRoot = func(subRoot int) {
		// Collect children for this node and evaluate cutting the two subtrees
		// rooted in subRoot and the child.
		for i := range isChild {
			isChild[i] = false
		}
		for _, child := range adj[subRoot] {
			visitSubChild(subRoot, child)
		}
		isParent[subRoot] = true

		// XOR with every node that is not a child or parent of the current one
		for other := 1; other < len(xors); other++ {
			if isParent[other] || isChild[other] {
				continue
			}
			a := xors[other]
			b := xors[subRoot]
			c := xors[0] ^ a ^ b
			res = min(res, max(a, max(b, c))-min(a, min(b, c)))
		}

		// Consider each child as the root of a subtree
		for _, child := range adj[subRoot] {
			visitSubRoot(child)
		}
		isParent[subRoot] = false
	}

	for _, subRoot := range adj[0] {
		visitSubRoot(subRoot)
	}

	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```