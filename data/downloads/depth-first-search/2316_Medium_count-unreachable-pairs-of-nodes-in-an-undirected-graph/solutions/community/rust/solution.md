# Union-Find in rust - clean, concise and fast (54 ms/15.8MB).

**Author:** dfomin
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3341190/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3341190/)

---

# Intuition
Union-Find/disjoint-set:

*Vertex* is a number.
*Edge* is a pair of vertices.
Graph *component* is a set of vertices.
Graph component *representative* is one vertex from the set of vertices from this component.
*Union* is a function that merges two components.
*Find* is a function that finds a representative of the component by vertex.

1. Make an array to map vertices to graph components representatives. At the beginning each vertex is its own representative and every component has only one vertex. Array is perfect for this mapping (`reprs`).
2. It's faster to keep track of number of vertices in each component (`powers`).
3. For each edge the representative of the first vertex of the edge becomes a representative the second vertex of the edge.
4. The answer is pairwise multiplication of the power of each component.

# Performance
Runtime: 54 ms
Memory: 15.8 MB


# Code
```
impl Solution {
    pub fn count_pairs(n: i32, edges: Vec<Vec<i32>>) -> i64 {
        let mut reprs: Vec<i32> = (0..n).collect();
        let mut powers = vec![1i64; n as usize];
        for edge in edges {
            Solution::union(reprs.as_mut_slice(), powers.as_mut_slice(), edge[0], edge[1]);
        }

        let mut result: i64 = 0;
        let mut cur: i64 = 0;
        for power in powers {
            if power > 0 {
                result += power * cur;
                cur += power;
            }
        }

        return result;
    }

    fn union(reprs: &mut [i32], powers: &mut [i64], v1: i32, v2: i32) {
        let p1 = Solution::find(reprs, v1);
        let p2 = Solution::find(reprs, v2);
        if p1 != p2 {
            reprs[p2 as usize] = p1;
            powers[p1 as usize] += powers[p2 as usize];
            powers[p2 as usize] = 0;
        }
    }

    fn find(reprs: &mut [i32], v: i32) -> i32 {
        if v == reprs[v as usize] {
            return v;
        }
        let r = Solution::find(reprs, reprs[v as usize]);
        reprs[v as usize] = r;
        return r;
    }
}
```