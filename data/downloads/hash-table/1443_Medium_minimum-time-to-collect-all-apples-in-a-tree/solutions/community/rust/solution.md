# Beats 100% time & memory, O(n) in C++/Rust/Go

**Author:** vadimpiven
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3036920/](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3036920/)

---

# Intuition
As we have $$n$$ nodes, $$n - 1$$ edges, and from each node exists path to node `0` - it means each node has only one parent, so we could store only index of parent to save space.

# Approach
From each node having apple traverse path to node `0`, marking used edges (to visit each node only once) and counting them.

# Complexity
- Time complexity:
$$O(n)$$ or actually $$O(3*n)$$ as we copy all edges ($$n - 1$$), then traverse `hasApple` array ($$n$$), and finally scan `parentEdge` till already visited node is reached ($$n$$)

- Space complexity:
$$O(n)$$ as we store edges

# Code in C++
```
class Solution {
public:
    int minTime(const int n, const std::vector<std::vector<int>> & edges, const std::vector<bool> & hasApple) {
        std::vector<int> parentEdge(n, -1);
        for (const auto & edge : edges) {
            if (parentEdge[edge[1]] == -1) {
                parentEdge[edge[1]] = edge[0];
            } else {
                parentEdge[edge[0]] = edge[1];
            }
        }

        int result = 0;
        for (int i = 0; i < n; ++i) {
            if (!hasApple[i]) {
                continue;
            }

            for (int node = i; parentEdge[node] != -1; ++result) {
                const auto parentNode = parentEdge[node];
                parentEdge[node] = -1;
                node = parentNode;
            }
        }
        return result * 2;
    }
};
```

# Code in Rust
```
impl Solution {
    pub fn min_time(n: i32, edges: Vec<Vec<i32>>, has_apple: Vec<bool>) -> i32 {
        let mut parent_edge = vec![-1; n as usize];
        for edge in edges.into_iter() {
            if parent_edge[edge[1usize] as usize] == -1 {
                parent_edge[edge[1usize] as usize] = edge[0usize];
            } else {
                parent_edge[edge[0usize] as usize] = edge[1usize];
            }
        }

        let mut result = 0;
        for i in 0..(n as usize) {
            if !has_apple[i] {
                continue;
            }

            let mut node = i as i32;
            while parent_edge[node as usize] != -1 {
                let parent_node = parent_edge[node as usize];
                parent_edge[node as usize] = -1;
                node = parent_node;
                result += 1;
            }
        }
        result * 2
    }
}
```

# Code in Go
```
func minTime(n int, edges [][]int, hasApple []bool) int {
    parentEdge := make([]int, n)
    for i := 0; i < n; i++ {
        parentEdge[i] = -1
    }
    for i := 0; i < n - 1; i++ {
        if parentEdge[edges[i][1]] == -1 {
            parentEdge[edges[i][1]] = edges[i][0]
        } else {
            parentEdge[edges[i][0]] = edges[i][1]
        }
    }

    result := 0
    for i := 0; i < n; i++ {
        if !hasApple[i] {
            continue
        }

        for node := i; parentEdge[node] != -1; result++ {
            parentNode := parentEdge[node]
            parentEdge[node] = -1
            node = parentNode
        }
    }
    return result * 2
}
```