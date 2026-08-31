# Simple rust solution

**Author:** matthew-ch
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2925160/](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2925160/)

---

Try to connect nodes with odd degrees.

# Code
```
impl Solution {
    pub fn is_possible(n: i32, edges: Vec<Vec<i32>>) -> bool {
        let n = n as usize;
        let mut odd_degree = vec![false; n];
        let mut edge_set = std::collections::HashSet::new();

        for edge in edges.iter() {
            let a = edge[0] as usize - 1;
            let b = edge[1] as usize - 1;
            odd_degree[a] = !odd_degree[a];
            odd_degree[b] = !odd_degree[b];
            edge_set.insert((a, b));
            edge_set.insert((b, a));
        }

        let odd_nodes: Vec<_> = (0..n).filter(|&i| odd_degree[i]).collect();

        match odd_nodes.len() {
            0 => true,
            2 => {
                let a = odd_nodes[0];
                let b = odd_nodes[1];
                if edge_set.contains(&(a, b)) {
                    for i in 0..n {
                        if !odd_degree[i] && i != a && i != b && !edge_set.contains(&(a, i)) && !edge_set.contains(&(b, i)) {
                            return true
                        }
                    }
                    false
                } else {
                    true
                }
            },
            4 => {
                let a = odd_nodes[0];
                let b = odd_nodes[1];
                let c = odd_nodes[2];
                let d = odd_nodes[3];

                let test_nodes = |s, t, u, v| !edge_set.contains(&(s, t)) && !edge_set.contains(&(u, v));

                test_nodes(a, b, c, d) || test_nodes(a, c, b, d) || test_nodes(a, d, b, c)
            },
            _ => false,
        }
    }
}
```