# Graph from Tree + BFS

**Author:** gomagician
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/5052220/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/5052220/)

---

# Intuition
The problem involves finding the closest leaf to a given node in a binary tree, a leaf being defined as a node with no children. A binary tree is inherently hierarchical and does not support direct traversal to any node or its neighbors, unlike a graph where each node potentially connects to multiple nodes directly. Therefore, the approach involves converting the binary tree into a graph representation, where each node can be accessed directly and all its connections (neighbors) are known, enabling efficient traversal and search operations like breadth-first search (BFS).

# Approach
1. **Convert Tree to Graph**:
   - Traverse the tree using a recursive function.
   - For each node, add edges to its children if they exist, thus treating the tree as an undirected graph where each connection goes both ways.
   - Mark all leaf nodes (nodes without children) in a separate map for quick leaf-checking.

2. **BFS for Closest Leaf**:
   - Initiate BFS from the node 'k', marking it with a distance of 0 from itself.
   - Use a queue to manage the BFS process, storing nodes alongside their respective distances from the starting node.
   - For each node, check if it's a leaf. If it is and its distance is the shortest found so far, update the closest leaf and minimum distance.
   - Continue the BFS by adding unvisited neighbors to the queue with updated distances.
   - Stop the search if the node being processed has a distance greater than the minimum leaf distance found so far to prevent unnecessary processing.

# Complexity
- **Time complexity**: 
  - The BFS operation traverses each node and edge at most once. Hence, the time complexity is \\(O(V + E)\\), where \\(V\\) is the number of vertices (nodes) and \\(E\\) is the number of edges in the graph. Since this is a tree, \\(E = V - 1\\).
  
- **Space complexity**: 
  - The space required to store the graph and auxiliary data structures (queue, visited nodes map) leads to a space complexity of \\(O(V)\\). This includes the space for storing all edges (which is proportional to \\(V\\)), the queue (which in the worst case can hold all vertices), and the visited map (which also holds an entry for each vertex).

This method ensures that the solution efficiently finds the closest leaf to a specified node by utilizing graph traversal techniques, leveraging the structure of the binary tree for optimal conversion and search.

# Code
```
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */


type Queue struct {
    data [][]int
}

func NewQueue() *Queue {
    return &Queue{
        data: make([][]int, 0),
    }
}

func (q *Queue) Push(item []int) {
    q.data = append(q.data, item)
}

func (q *Queue) Pop() []int {
    t := q.data[0]
    q.data = q.data[1:]
    return t
}

func (q *Queue) Empty() bool {
    return len(q.data) == 0
}

type Graph struct {
    edges map[int][]int
    leaves map[int]bool
}

func NewGraph() *Graph{
    edges := make(map[int][]int)
    for i:=1; i<1000; i++ {
        edges[i] = make([]int, 0)
    }

    return &Graph{
        edges: edges,
        leaves: make(map[int]bool),
    }
}

func (g *Graph) AddEdge(n1, n2 int) {
    g.edges[n1] = append(g.edges[n1], n2)
    g.edges[n2] = append(g.edges[n2], n1)
}

func findClosestLeaf(root *TreeNode, k int) int {
    graph := NewGraph()
    
    graphFromTree(root, graph)
    
    return closest(graph, k)
}

func graphFromTree(root *TreeNode, graph *Graph) {
    if root == nil {
        return
    }

    if root.Left != nil {
        graph.AddEdge(root.Val, root.Left.Val)
        graphFromTree(root.Left, graph)
    }

    if root.Right != nil {
        graph.AddEdge(root.Val, root.Right.Val)
        graphFromTree(root.Right, graph)
    }

    if root.Right == nil && root.Left == nil {
        graph.leaves[root.Val] = true
    }
}

func closest(graph *Graph, k int) int {
    visited := make(map[int]bool)
    queue := NewQueue()

    // add starting node k with distance 0 away from itself
    queue.Push([]int{k, 0})
    
    closestNode := -1
    minDistance := math.MaxInt
    for !queue.Empty() {
        node := queue.Pop()
        
        nodeId := node[0]
        distance := node[1]

        visited[nodeId] = true
        if graph.leaves[nodeId] && distance < minDistance {
            minDistance = distance
            closestNode = nodeId

            continue
        }

        for _, neighbor := range graph.edges[nodeId] {
            newDistance := distance+1
            if !visited[neighbor] && newDistance < minDistance {
                queue.Push([]int{neighbor, newDistance})
            }
        }
    }

    return closestNode
}
```