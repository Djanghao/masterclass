# Go, dfs

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4714612/](https://leetcode.com/problems/maximum-subtree-of-the-same-color/solutions/4714612/)

---

# Code
```
type Node struct {
    val int
    color int
    children []*Node
}

func NewNode(val, color int) *Node {
    return &Node{
        val: val,
        color: color,
    }
}

func maximumSubtreeSize(edges [][]int, colors []int) int {
    nodes := make(map[int]*Node)
    for _, edge := range edges {
        if _,ok := nodes[edge[0]]; !ok {
            nodes[edge[0]] = NewNode(edge[0], colors[edge[0]])
        }
        if _,ok := nodes[edge[1]]; !ok {
            nodes[edge[1]] = NewNode(edge[1], colors[edge[1]])
        }
        parent, child := nodes[edge[0]], nodes[edge[1]] 
        parent.children = append(parent.children, child)
    }
    for idx, color := range colors {
        if _, ok := nodes[idx]; !ok {
            nodes[idx] = NewNode(idx, color)
        }
    }

    _, _, m := dfs(nodes[0])
    return m
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func dfs(root *Node) (int, bool, int) {
    if root == nil {
        return 0, true, 0
    }

    parentColorSize := 1
    parentColorSuccess := true
    globalMaxSize := 1
    
    for _, child := range root.children {
        childColor, childColorSuccess, childMaxGlobal := dfs(child)

        globalMaxSize = max(globalMaxSize, childMaxGlobal)
        parentColorSuccess = child.color == root.color && parentColorSuccess && childColorSuccess
        if parentColorSuccess {
            parentColorSize += childColor
        }
    }

    if parentColorSuccess {
        return parentColorSize, true, max(parentColorSize, globalMaxSize)
    }
    return 0, false, globalMaxSize
}
```