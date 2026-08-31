# [RUST] UnionFind with thracking of nodes' indegree

**Author:** keep_of_kalessin
**Votes:** 1
**Link:** [https://leetcode.com/problems/redundant-connection-ii/solutions/3332045/](https://leetcode.com/problems/redundant-connection-ii/solutions/3332045/)

---


# Code
```rust
impl Solution {
    pub fn find_redundant_directed_connection(edges: Vec<Vec<i32>>) -> Vec<i32> {
        find_redundant_directed_connection(edges)
    }
}

use std::cmp::Ordering;

pub struct UnionFind {
    parents: Vec<usize>,
    ranks: Vec<usize>,
}

impl UnionFind {
    pub fn new(size: usize) -> Self {
        Self {
            ranks: vec![0; size],
            parents: (0..size).collect(),
        }
    }


    pub fn find(&mut self, key: usize) -> usize {
        if self.parents[key] == key {
            return key;
        }

        let parent = self.find(self.parents[key]);
        self.parents[key] = parent;
        parent
    }

    pub fn union(&mut self, a: usize, b: usize) -> bool {
        let x = self.find(a);
        let y = self.find(b);

        // A and B are already in the same set -> nothing to do
        if x == y {
            return false;
        }

        let xr = self.ranks[x];
        let yr = self.ranks[y];

        match xr.cmp(&yr) {
            Ordering::Less => self.parents[x] = y,
            Ordering::Greater => self.parents[y] = x,
            Ordering::Equal => {
                self.parents[x] = y;
                self.ranks[y] += 1;
            }
        }

        true
    }
}

pub fn find_redundant_directed_connection(edges: Vec<Vec<i32>>) -> Vec<i32> {
    let mut indegree = vec![vec![]; edges.len() + 1];
    let mut uf = UnionFind::new(edges.len() + 1);

    let mut problem_node = 0;
    for (idx, edge) in edges.iter().enumerate() {
        let dest = edge[1] as usize;
        indegree[dest].push(idx);

        if indegree[dest].len() > 1 {
            problem_node = dest;
            break;
        }
    }


    // handle cycle detection when all nodes have an indegree of 1 (and 0 for the root if any)
    for (idx, edge) in edges.iter().enumerate() {
        // do not union() the edges that participate ina conflict
        if indegree[problem_node].contains(&idx){
            continue;
        }
        
        // union all nodes that have an indegree of 0 or 1. If there is no
        // problem node, this will perform a cycle detection and return the
        // last edge that causes the cycle
        if !uf.union(edge[0] as usize, edge[1] as usize) {
            return edge.clone();
        }
    }
    
    // if there is a problem_node (i.e. there is no cycle), then return
    // the first edge that causes the problem
    for idx in indegree[problem_node].iter().copied(){
        let edge = &edges[idx];
        if !uf.union(edge[0] as usize, edge[1] as usize) {
            return edge.clone();
        }
    }

    // we are guaranteed to have an edge that causes a problem
    unreachable!("unreachable by the problem statement definition")
}
```