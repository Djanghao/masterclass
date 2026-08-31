# 🏞️ Efficient Solution Using DFS to Split for Odd & Even Layers || O(n+m) || ~65ms in Rust & Go

**Author:** rutsh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6112525/](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/solutions/6112525/)

---

# \uD83D\uDE0A Intuition:

We need to calculate how many nodes in the first tree can be "targeted" by each node. A node in $tree 1$ is considered "targeted" if the number of edges on the path between it and a node in $tree 2$ is even. We can achieve this by classifying each tree\u2019s nodes into $even$ or $odd$ layers based on their depth, then leveraging this classification to calculate possible targets.

# \uD83D\uDE80 Approach:

1. __Build Graphs:__ Construct adjacency lists for both trees.
2. __DFS Traversal:__ Perform __DFS__ on both trees starting from node $0$ to determine the layer ($even$/$odd$) for each node and count how many nodes belong to each layer.
3. __Calculate Results:__ For each node in $tree1$, determine how many nodes it can target by combining its own layer count and the best layer count from $tree2$ (max of $even$/$odd$ nodes).

# Complexity
- __\uD83D\uDD52 Time Complexity:__
    - __Building Graphs:__ $O(n + m)$ where $n$ and $m$ are the sizes of the two trees (due to adjacency list construction).
    - __DFS Traversal:__ $O(n + m)$ for both tree.
    - __Overall Time Complexity:__ $O(n + m)$, since each node and edge in both trees is visited exactly once.

- __\uD83C\uDFE0 Space Complexity:__
    - __Graph Storage:__ $O(n + m)$ for storing the adjacency lists.
    - __DFS and Result Storage:__ $O(n + m)$ for layers, stack and counts.
    - __Overall Space Complexity:__ $O(n + m)$, primarily due to graph storage and auxiliary data structures.

# Code
```rust []
impl Solution {
    pub fn max_target_nodes(edges1: Vec<Vec<i32>>, edges2: Vec<Vec<i32>>) -> Vec<i32> {
        // Build graphs for both trees
        let graph1 = Self::build_graph(&edges1);
        let graph2 = Self::build_graph(&edges2);

        // Get layers and counts of even/odd layers for both trees
        let (layer_tree1, count1) = Self::split_for_layers(&graph1);
        let (_, count2) = Self::split_for_layers(&graph2);

        // Find the maximum number of nodes we can target from tree2
        let best_l2 = count2[0].max(count2[1]);

        // Prepare the result array
        let mut result = vec![0; graph1.len()];

        // Calculate the result for each node in tree1
        for i in 0..graph1.len() {
            result[i] = count1[layer_tree1[i] as usize] + best_l2;
        }

        result
    }
        
    // Helper function to build the adjacency list from edges
    fn build_graph(edges: &Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut graph = vec![vec![]; edges.len() + 1]; // create adjacency list
        for edge in edges {
            let (u, v) = (edge[0], edge[1]);
            graph[u as usize].push(v);
            graph[v as usize].push(u);
        }
        graph
    }

    // Helper function to perform DFS and split nodes into layers (even/odd depths)
    fn split_for_layers(graph: &Vec<Vec<i32>>) -> (Vec<i32>, [i32; 2]) {
        let mut layers = vec![-1; graph.len()]; // -1 to mark unvisited
        let mut counts = [0, 0]; // counts for even (0) and odd (1) layers

        fn dfs(u: usize, l: i32, parent: i32, graph: &Vec<Vec<i32>>, layers: &mut Vec<i32>, counts: &mut [i32; 2]) {
            layers[u] = l;
            counts[l as usize] += 1;
            for &v in &graph[u] {
                if v != parent {
                    dfs(v as usize, 1 - l, u as i32, graph, layers, counts);
                }
            }
        }

        // Start DFS from node 0 with an even depth (0)
        dfs(0, 0, -1, graph, &mut layers, &mut counts);

        (layers, counts)
    }
}
```
``` Go []
func maxTargetNodes(edges1 [][]int, edges2 [][]int) []int {
    // Build the adjacency lists for both trees
    graph1 := buildGraph(edges1)
    graph2 := buildGraph(edges2)

    // Calculate the layers (even/odd) and node counts for both trees
    layerTree1, cnt1 := splitForLayers(graph1)
    _, cnt2 := splitForLayers(graph2)

    // The best possible targetable node count from tree2 (max of even/odd layers)
    bestL2 := max(cnt2[0], cnt2[1])

    // Prepare the result array for each node in tree1
    result := make([]int, len(graph1))
    for i := range result {
        // For each node in tree1, calculate the maximum nodes it can target
        result[i] = cnt1[layerTree1[i]] + bestL2
    }

    return result
}

func splitForLayers(graph [][]int) ([]int, [2]int) {
    // Layers stores the depth parity (0 or 1) for each node
    layers := make([]int, len(graph))
    var counts [2]int // counts for even (0) and odd (1) layers

    // Helper function to perform DFS
    var dfs func(u, l, p int)
    dfs = func(u, l, p int) {
        counts[l]++ // Increment count of the current layer (even/odd)
        for _, v := range graph[u] {
            if v != p { // Prevent going back to the parent node
                layers[v] = l ^ 1 // Assign opposite parity (even \u2194 odd)
                dfs(v, l^1, u)     // Recursively visit the child node
            }
        }
    }

    // Start DFS from node 0, with an even depth (0)
    dfs(0, 0, -1)
    return layers, counts
}

func buildGraph(edges [][]int) [][]int {
    n := len(edges) + 1 // Number of nodes is one more than the number of edges
    graph := make([][]int, n)
    for _, edge := range edges {
        u, v := edge[0], edge[1]
        graph[u] = append(graph[u], v)
        graph[v] = append(graph[v], u)
    }
    return graph
}

// inline max for speed-up
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```