# Rust simple soluton

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-center-of-star-graph/solutions/1308798/](https://leetcode.com/problems/find-center-of-star-graph/solutions/1308798/)

---

Strange, but it takes 16 ms...

```
impl Solution {
    pub fn find_center(edges: Vec<Vec<i32>>) -> i32 {
        let (u0, v0) = (edges[0][0], edges[0][1]);
        let (u1, v1) = (edges[1][0], edges[1][1]);

        match u0 == u1 || u0 == v1 {
            true => u0,
            false => v0,
        }
    }
}
```