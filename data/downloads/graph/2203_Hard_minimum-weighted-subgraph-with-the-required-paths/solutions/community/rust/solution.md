# Rust with Dijkstra's

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/5611160/](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths/solutions/5611160/)

---

# Code
```
use std::cmp::Reverse;
use std::collections::{BinaryHeap, HashMap};

impl Solution {
    pub fn minimum_weight(n: i32, edges: Vec<Vec<i32>>, src1: i32, src2: i32, dest: i32) -> i64 {
        let mut adj = vec![HashMap::<usize, i64>::new(); n as usize];
        let mut radj = vec![HashMap::<usize, i64>::new(); n as usize];
        for v in edges.iter() {
            adj[v[0] as usize].entry(v[1] as usize)
                .and_modify(|d| *d = (*d).min(v[2] as i64))
                .or_insert(v[2] as i64);
            radj[v[1] as usize].entry(v[0] as usize)
                .and_modify(|d| *d = (*d).min(v[2] as i64))
                .or_insert(v[2] as i64);
        }
        let v1 = Self::dijkstra_to_all(src1 as usize, &adj);
        let v2 = Self::dijkstra_to_all(src2 as usize, &adj);
        let vd = Self::dijkstra_to_all(dest as usize, &radj);
        let ans = v1.iter().zip(v2.iter()).zip(vd.iter())
            .map(|((&a, &b), &c)| a.saturating_add(b).saturating_add(c))
            .min().unwrap();
        if ans == i64::MAX { -1 } else { ans }
    }

    fn dijkstra_to_all(start: usize, adj: &Vec<HashMap<usize, i64>>) -> Vec<i64> {
        let mut ans = vec![i64::MAX; adj.len()];
        ans[start] = 0;
        let mut need = ans.len();
        let mut heap = BinaryHeap::<(Reverse<i64>, usize)>::new();
        heap.push((Reverse(0), start));
        while let Some((Reverse(c), i)) = heap.pop() {
            if ans[i] != c {
                continue;
            }
            need -= 1;
            if need == 0 {
                break;
            }
            for (&j, &c2) in adj[i].iter() {
                if c + c2 < ans[j] {
                    ans[j] = c + c2;
                    heap.push((Reverse(c + c2), j));
                }
            }
        }
        ans
    }
}
```