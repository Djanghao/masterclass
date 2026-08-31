# Rust + UnionFind

**Author:** unknown-
**Votes:** 3
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/3464947/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/3464947/)

---

```
impl Solution {
    pub fn distance_limited_paths_exist(n: i32, mut edge_list: Vec<Vec<i32>>, queries: Vec<Vec<i32>>) -> Vec<bool> {
        let mut idx: Vec<_> = (0..queries.len()).collect();
        idx.sort_by_key(|&i| queries[i][2]);
        edge_list.sort_by_key(|v| v[2]);

        let mut uf: Vec<usize> = (0..n as usize).collect();
        fn uf_find(i: usize, uf: &mut [usize]) -> usize {
            if (uf[i] != i) {
                uf[i] = uf_find(uf[i], uf);
            }
            uf[i]
        }
        fn uf_union(i: usize, j: usize, uf: &mut [usize]) {
            let i = uf_find(i, uf);
            let j = uf_find(j, uf);
            uf[i] = j;
        }

        let mut ret = vec![false; queries.len()];
        let mut j = 0;
        for i in idx {
            while j < edge_list.len() && edge_list[j][2] < queries[i][2] {
                uf_union(edge_list[j][0] as usize, edge_list[j][1] as usize, &mut uf);
                j += 1;
            }
            ret[i] = uf_find(queries[i][0] as usize, &mut uf) == uf_find(queries[i][1] as usize, &mut uf);
        }
        ret
    }
}
```