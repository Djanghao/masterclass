# Rust Solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-methods-from-project/solutions/5892918/](https://leetcode.com/problems/remove-methods-from-project/solutions/5892918/)

---


# Intuition
When faced with the problem of determining which methods (represented by integers) are "remaining" after certain invocations, I first thought about how to represent the relationships between these methods. Since methods can call each other, it resembles a graph where each method is a node, and the invocations represent directed edges. A key insight is that methods that are connected through invocations should be treated as a group.

# Approach
1. **Graph Representation**: Use an adjacency list to represent the graph of method invocations. Each method points to other methods it can invoke.

2. **Disjoint Set Union (DSU)**: Implement a DSU (also known as Union-Find) to keep track of which methods are in the same connected component. This will help us determine if a method can reach other methods through invocations.

3. **Depth-First Search (DFS)**: Perform a DFS starting from the method `k` to count how many methods can be reached from it. This helps to compare the size of the connected component that includes `k` with the total number of invocations that can be reached.

4. **Result Construction**: Based on the size comparison:
   - If the size matches, list all methods that are not in the same component as `k`.
   - If it doesn't match, return all methods, indicating that some methods are still "remaining."

# Complexity
- **Time Complexity**: 
  - Constructing the adjacency list and performing union operations for all invocations takes \\(O(m)\\), where \\(m\\) is the number of invocations.
  - The DFS traversal takes \\(O(n)\\), where \\(n\\) is the number of methods. 
  - Therefore, the overall time complexity is \\(O(n + m)\\).

- **Space Complexity**: 
  - The space required for the adjacency list is \\(O(n + m)\\).
  - The DSU structure requires \\(O(n)\\) space.
  - Thus, the overall space complexity is \\(O(n + m)\\).

# Code
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn remaining_methods(n: i32, k: i32, invocations: Vec<Vec<i32>>) -> Vec<i32> {
        let n = n as usize;
        let k = k as usize;

        let mut adj: Vec<Vec<usize>> = vec![vec![]; n];
        let mut dsu = DSU::new(n);

        for invocation in invocations {
            let u = invocation[0] as usize;
            let v = invocation[1] as usize;
            adj[u].push(v);
            dsu.union(u, v);
        }

        let mut ans = vec![];

        // Find the parent once and store it
        let parent = dsu.find(k);
        let dfs_size = Self::dfs(k, &mut vec![false; n], &adj);

        if dsu.size[parent] == dfs_size {
            for i in 0..n {
                if dsu.find(i) != parent {
                    ans.push(i as i32);
                }
            }
        } else {
            ans.extend((0..n).map(|x| x as i32));
        }

        ans
    }

    fn dfs(node: usize, vis: &mut Vec<bool>, adj: &Vec<Vec<usize>>) -> usize {
        let mut count = 1;
        vis[node] = true;

        for &ne in &adj[node] {
            if vis[ne] {
                continue;
            }
            count += Self::dfs(ne, vis, adj);
        }

        count
    }
}

struct DSU {
    parent: Vec<usize>,
    size: Vec<usize>,
}

impl DSU {
    pub fn new(n: usize) -> Self {
        let parent: Vec<usize> = (0..n).collect();
        let size = vec![1; n];
        DSU { parent, size }
    }

    pub fn find(&mut self, u: usize) -> usize {
        if self.parent[u] != u {
            self.parent[u] = self.find(self.parent[u]);
        }
        self.parent[u]
    }

    pub fn union(&mut self, u: usize, v: usize) {
        let pu = self.find(u);
        let pv = self.find(v);
        if pu == pv {
            return;
        }
        if self.size[pu] > self.size[pv] {
            self.parent[pv] = pu;
            self.size[pu] += self.size[pv];
        } else {
            self.parent[pu] = pv;
            self.size[pv] += self.size[pu];
        }
    }
}
```