# Rust | Bottom-up DP, 6ms, beats 100%

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/4824543/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/4824543/)

---

# Intuition
Compress each row into vertices, construct a graph and do DP on it.

# Complexity
- Time complexity:
$$O(n)$$

# Code
```rust
#[derive(Debug, Clone, PartialOrd, Ord, PartialEq, Eq)]
pub enum Color {
    Blue,
    Pink,
    White,
}

pub fn to_vertices(
    width: usize,
) -> Vec<Vec<Color>> {
    fn backtrack(
        width: usize,
        parent_vec: &mut Vec<Color>,
        ret: &mut Vec<Vec<Color>>,
    ) {
        if parent_vec.len() >= width {
            return ret.push(parent_vec.clone());
        }

        for color_next in [
            Color::Blue, Color::Pink, Color::White,
        ] {
            if Some(&color_next) == parent_vec.last() {
                continue;
            }

            // BEGIN backtracking
            parent_vec.push(color_next);
            backtrack(width, parent_vec, ret);
            parent_vec.pop();
            // END backtracking
        }
    }

    let mut ret = vec![];
    backtrack(
        width,
        &mut Vec::with_capacity(width),
        &mut ret,
    );

    ret
}

pub fn to_graph(
    vertices: Vec<Vec<Color>>,
) -> Vec<Vec<usize>> {
    let n = vertices.len();

    let mut ret = vec![vec![]; n];
    
    for i in 0..n {
        for j in 0..n {
            let v = vertices[i].clone();
            let v_next = vertices[j].clone();
            if v.into_iter().zip(v_next.into_iter())
                .any(|(e0, e1)| e0 == e1) {
                continue;
            }

            ret[i].push(j);
        }
    }

    ret
}

const MOD: usize = 1_000_000_007;

impl Solution {
    pub fn color_the_grid(m: i32, n: i32) -> i32 {
        let (m, n) = (m as usize, n as usize);
        let vertices = to_vertices(m);
        let dp_width = vertices.len();
        let graph = to_graph(vertices);

        let mut dp = vec![1usize; dp_width];
        for _ in 1..n {
            let mut dp_next = vec![usize::MIN; dp_width];

            for (v, count) in dp.into_iter().enumerate() {
                for &v_next in &graph[v] {
                    dp_next[v_next] += count;
                }
            }
            for e in &mut dp_next { *e %= MOD; }

            dp = dp_next;
        }

        let mut ret = dp.into_iter().sum::<usize>();
        ret %= MOD;

        ret as i32
    }
}
```