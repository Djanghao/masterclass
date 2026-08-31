# [Rust] binary lifting & shortcut vector

**Author:** tmtappr
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/4551365/](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/4551365/)

---

# Intuition
The `parent` vector maps a node to its immediate ancestor 1 step away. Another vector could hold the $n^{th}$ ancestor of each node shortcutting the amount of work it takes to find the $k^{th}$ ancestor for a given node.

Just described is the shortcut vector idea; taking this idea further, the `TreeAncestor` class can hold a table of parents for each node where each successive column for a particular node gives the $2^i$-th ancestor. Having this, `k` can be treated as a series of binary digits where each digit represents a $2^{bit}$ jump.

For instance, `k = 11`in binary would be `0b1011`, which represents a jump from the current node to the 1st parent because the lowest order bit ($2^0$) is a 1. The next higher order bit - the $2^1$ bit- is also a 1, so from the latest node we jump again by 2. The current node's 2nd ancestor is in column 2 of its row in the table.

Then from that node, the jump will be to its $2^3$ ancestor, since the highest order bit (bit 3) is a 1. This is also pulled from the current node's row of the table from the fourth column.

# Approach

### Binary Lifting
The `parent` vector is converted to a table, where there is an entry for each node - mapped the same as the original vector. Instead of the new vector holding only the immediate parent of each node, it holds a row. Each column of that row gives the node's $2^i$-th ancestor.

As described in the Intuition section, `k` is treated as a series of bits. The order of each bit determines which column of the current node's `parent` row to use to get its $2^i$ ancestor, which is then made the current node. `k` is right-shifted and masked while keeping track of the order of the current bit, and this result indexes into the columns.

### Shortcut Vector (2nd Tab below)
On construction, the `TreeAncestor` stores the `parent` vector and creates a secondary vector, `jumps`, holding shortcut routes to ancestors. This shortcut vector is used by `get_kth_ancestor()` to take as many long hops as possible toward an ancestor before finishing using the `parent` vector.

# Complexity
- Time complexity: $O(log(k))$ per query for binary lifting. $O(k)$ per query for the shortcut vector approach.
- Space complexity: $O(n)$

# Code
``` rust []
// Using "binary lifting" - O(log(k)) per query.

struct TreeAncestor {
    parent: Vec<[i32; 31]>,
}

impl TreeAncestor {
    fn new(n: i32, parent: Vec<i32>) -> Self {
        let mut par = vec![[-1; 31]; n as usize];
        for i in 0..n as usize {
            par[i][0] = parent[i];
        }
        for j in 1..31 {
            for i in 1..n as usize {
                let p = par[i][j - 1];
                if p != -1 {
                    par[i][j] = par[p as usize][j - 1];
                }
            }
        }
        Self { parent: par }
    }
    
    fn get_kth_ancestor(&self, mut node: i32, mut k: i32) -> i32 {
        let mut i = 0;
        while k > 0 {
            if k & 1 == 1 {
                node = self.parent[node as usize][i];
                if node == -1 {
                    break;
                }
            }
            k >>= 1;
            i += 1;
        }
        node
    }
}
```
``` rust []
// Using shortcut vector.

const JUMP: i32 = 200;

struct TreeAncestor {
    parent : Vec<i32>,
    jumps  : Vec<i32>,
}

impl TreeAncestor {
    fn new(n: i32, parent: Vec<i32>) -> Self {
        let mut jumps = vec![-1; n as usize];
        for i in 1..n {
            let mut j = i;
            for _ in 0..JUMP {
                j = parent[j as usize];
                if j == -1 { break; }
            }
            jumps[i as usize] = j;
        }
        Self { parent, jumps }
    }
    
    fn get_kth_ancestor(&self, node: i32, k: i32) -> i32 {
        let mut n = node;
        let mut i = 0;
        for _ in 0..k / JUMP {
            if self.jumps[n as usize] != -1 {
                n = self.jumps[n as usize];
                i += JUMP;
            } else { break; }
        }
        for _ in i..k {
            n = self.parent[n as usize];
            i += 1;
            if n == -1 { break; }
        }
        if i != k { -1 } else { n }
    }
}
```
