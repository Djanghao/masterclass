# Pretty simple DP with little greedy calc using heap

**Author:** pioneer10
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6137183/](https://leetcode.com/problems/maximize-sum-of-weights-after-edge-removals/solutions/6137183/)

---

# Intuition
The problem can be solved using dynamic programming. For this purpose, we gonna use DFS, thus calculating the values for every subtree.

Obviously, when for each subtree there are two states:
- one where edge connecting the root of the subtree with its parent is being kept
- another is where the edge is being removed

Once we calculated those values for every subtree, we should be able to solve the problem for the whole tree.

# Approach
As mentioned above, for every subtree we calculate two values:
- a) maximum sum of weights for remaining edges in the subtree given each vertex except of the root has an edge with at most `k` other vertices, while root has an edge with at most `k - 1` other vertices
- b) maximum sum of weights for remaining edges in the subtree given each vertex has an edge with at most `k` other vertices.

Note that "at most" doesn't necessarily mean "equal to", even though it might seem that the more edges we left, the greater sum of weights would be. Therefore, value b) is always greater than or equal to a).

How to calculate these values? Let's suppose we've already calculated them for subtrees of our tree, and now we need to calculate them for the tree itself. Now, for every edge outgoing from the root node we calculate two values: one if that edge will stay, another if it will be deleted.

To calculate the first value, we sum up the edge weight and the value a) for the corresponding subtree. While the second value is just the value b) for the corresponding subtree.

NB: it might seem pretty obvious that for the case we keep an edge to use value a), but formally b) might be reachable when the root of subtree has actually less than `k` outgoing edges, so maybe addition of the edge to its parent won't break the constraint. Well, there are two cases:
1. the values a) and b) are equal, therefore it doesn't matter which of them to take since the result is the same
2. the value of b) is greater than a) This means that there is subset of edges of the subtree such that: the root of subtree has exactly `k` outgoing edges, and the sum of weights is greater than a)
hence, the optimal solution (maximal sum of weights) stored in b) corresponds the case when the root does have exactly `k` outgoing edges.

At this point for every edge outgoing from the root of the tree there are two values. There two cases:
- the sum of the weights when we delete the edge is greater than or equal to the one when we keep the edge; in such a case there is no reason for us to keep that edge
- otherwise, keeping the edge would contribute the difference beetween these two values (it is positive, obviously)

So, our task is to choose at most `k` (and at most `k - 1`) edges having positive difference. We just choose `k` (and `k - 1`) having greatest difference.

# Complexity
Let's estimate the time complexity. Obviously, traversing the tree has linear complexity. And what about the calculation of the values? For every vertex there are some number of the edges (or actually, the differencies we calculated) we need to choose from. Obviously the number of such edges cannot be greater than number of children which is less than (except of the root of the tree, of course) the degree of the node.

Moreover, we keep at most `k` greatest values (differencies) in a heap. So, the complexity for the particular vertex is the degree of the edge multiplied by `log(k)`. The sum of these complexities is sum of the degrees of the vertices multiplied by `log(k)`. And the sum of the degrees is double of the number of edges.

Finally, the time complexity is $$O(n * log(k))$$ for the calculations, and $$O(n)$$ for the tree traversal.

- Time complexity: $$O(n * log(k))$$
- Space complexity: $$O(n)$$

# Code
```golang []
type MinInt64Heap []int64

func (h MinInt64Heap) Len() int            { return len(h) }
func (h MinInt64Heap) Less(i, j int) bool  { return h[i] < h[j] }
func (h *MinInt64Heap) Swap(i, j int)      { (*h)[i], (*h)[j] = (*h)[j], (*h)[i] }
func (h *MinInt64Heap) Push(x interface{}) { *h = append(*h, x.(int64)) }
func (h *MinInt64Heap) Pop() interface{} {
    n := len(*h) - 1
    x := (*h)[n]
    *h = (*h)[:n]
    return x
}

func maximizeSumOfWeights(edges [][]int, k int) int64 {
    n := len(edges) + 1
    g := make([][][]int, n)
    for _, p := range edges {
        g[p[0]] = append(g[p[0]], []int{p[1], p[2]})
        g[p[1]] = append(g[p[1]], []int{p[0], p[2]})
    }
    _, res := dfs(g, make([]bool, n), 0, k)
    return res
}

func dfs(g [][][]int, v []bool, p, k int) (int64, int64) {
    v[p] = true
    res := int64(0)
    h := &MinInt64Heap{}
    for _, q := range g[p] {
        if !v[q[0]] {
            a, b := dfs(g, v, q[0], k)
            a += int64(q[1])
            res += b
            switch {
                case a <= b:
                case h.Len() < k:
                heap.Push(h, a - b)
                case (*h)[0] < a - b:
                (*h)[0] = a - b
                heap.Fix(h, 0)
            }
        }
    }
    b := int64(0)
    if h.Len() == k {
        b = heap.Pop(h).(int64)
    }
    for h.Len() > 0 {
        res += heap.Pop(h).(int64)
    }
    return res, res + b
}
```