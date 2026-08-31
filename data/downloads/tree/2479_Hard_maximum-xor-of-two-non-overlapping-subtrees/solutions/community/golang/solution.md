# [golang] Trie method from LC421 + dfs

**Author:** zy15662
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/solutions/2843497/](https://leetcode.com/problems/maximum-xor-of-two-non-overlapping-subtrees/solutions/2843497/)

---

Always use trie when calculating the maximum XOR of 2 nums
```
type Node struct {
    children []*Node
    cnt int
}
type Trie struct {
    root *Node
}
type data struct {
    g[][]int
    values []int
    subSums []int64
    t *Trie
}
// max digits for a long value
const max_digits = 63
func makeNode() *Node {
    return &Node{
        children: make([]*Node, 2),
        cnt: 0,
    }
}
// Add a subtree sum to the trie
func (this *Trie) add(num int64) {
    cur:=this.root
    for i:=max_digits; i>=0;i-- {
        id := int((num >> i)& int64(1))
        if cur.children[id] == nil {
            cur.children[id] = makeNode()
        }
        cur = cur.children[id]
        cur.cnt++
    }
}
// Same method as Lc421
func (this *Trie) getMax(num int64) int64{
    cur:=this.root
    ans := int64(0)
    for i:=max_digits; i>=0;i-- {
        id := 1-int((num >> i)& int64(1))
        if cur.children[id] != nil {
            cur = cur.children[id]
            ans = ans * int64(2) + int64(1)

        } else if cur.children[1-id] != nil{
            cur = cur.children[1-id]
            ans = ans * int64(2) + int64(0)
        } else {
            return int64(0)
        }
    }
    return ans
}

// Recursively calculates subtree sum for all nodes.
func getSubSums(from, cur int, d *data) int64{
    sum := int64(d.values[cur])
    for _, nxt := range d.g[cur] {
        if nxt == from {continue}
        sum += getSubSums(cur, nxt, d)
    }
    d.subSums[cur] = sum
    return sum
}

// Iterate each node, calculate the max XOR value from its non-overlapping nodes
func dfs(from, cur int, ans *int64, d *data) {
    sum := d.subSums[cur]
    // To avoid overlapping, must seek the max value for cur subtree before we add its children.
    mx := d.t.getMax(sum)
    if mx > *ans {
        *ans = mx
    }
    for _, nxt := range d.g[cur] {
        if nxt == from {continue}
        dfs(cur, nxt, ans, d)
    }
    // To avoid overlapping, must add cur subtree sum after we complete iterating its children.
    d.t.add(sum)
}


func maxXor(n int, edges [][]int, values []int) int64 {
    ans := int64(0)
    g := make([][]int, n)
    for _, e :=range edges {
        u, v := e[0], e[1]
        g[u] = append(g[u], v)
        g[v] = append(g[v], u)
    }
    d := &data{g, values, make([]int64, n), &Trie{makeNode()}}
    getSubSums(0, 0, d)
    dfs(0, 0, &ans, d)
    return ans
}
```