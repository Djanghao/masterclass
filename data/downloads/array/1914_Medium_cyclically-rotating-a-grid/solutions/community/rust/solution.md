# Rust solution using custom iterator

**Author:** luenge
**Votes:** 0
**Link:** [https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/3703943/](https://leetcode.com/problems/cyclically-rotating-a-grid/solutions/3703943/)

---

# Intuition\r
\r
Go through the matrix layer by layer and perform `rotate_left(k)` on the ring.\r
\r
# Approach\r
Basic idea of the algorithm is similar to the implementation of `rotate_left`\r
```\r
[1,2,3,4,5,6]\r
     ^offset\r
\r
// buffer\r
[1,2]\r
// copy left\r
[3,4,5,6,5,6]\r
// update last from buffer\r
[3,4,5,6,1,2]\r
```\r
\r
The not particularly difficult but verbose iteration of the ring is implemented as a custom iterator `LayerIter` which returns the indices of the $l$-th layer in clockwise order.\r
\r
Memory access is all over the place.\r
\r
# Complexity\r
- Time complexity: $O(m\\, n)$ \r
- Space complexity: $O(m\\, n)$\r
<!-- Add your space complexity here, e.g. $$O(n)$$ -->\r
\r
# Code\r
```\r
impl Solution {\r
    pub fn rotate_grid(mut grid: Vec<Vec<i32>>, k: i32) -> Vec<Vec<i32>> {\r
        let m = grid.len();\r
        let n = grid[0].len();\r
        let nlayers = std::cmp::min(m, n) / 2;\r
        \r
        for l in 0..nlayers {\r
            // number of elements in layer\r
            let nelem = 2 * (m + n - 4 * l - 2);\r
            // get rid of cyclic rotations\r
            let offset = (k as usize) % nelem;\r
\r
            // get an iterator over the source indices\r
            let mut source_iter = LayerIter::new(m, n, l);\r
            // buffer first elements, so we can overwrite\r
            let buffer: Vec<_> = source_iter\r
                .by_ref()\r
                .take(offset)\r
                .map(|(i, j)| grid[i][j])\r
                .collect();\r
\r
\r
            // get an iterator over the target indices\r
            let mut target_iter = LayerIter::new(m, n, l);\r
\r
            // move the remaining source elements to their targets\r
            for ((from_i, from_j), (to_i, to_j)) in source_iter.zip(target_iter.by_ref()) {\r
                grid[to_i][to_j] = grid[from_i][from_j];\r
            }\r
\r
            // overwrite the remaining elements with the buffer\r
            for ((i, j), v) in target_iter.zip(buffer) {\r
                grid[i][j] = v;\r
            }\r
        }\r
\r
        grid\r
    }\r
}\r
\r
\r
// iterator over indices of l-th layer running clockwise\r
#[derive(Clone)]\r
struct LayerIter {\r
    nr: usize,\r
    nc: usize,\r
    p: (usize, usize),\r
    cnt: usize,\r
}\r
\r
impl LayerIter {\r
    fn new(m: usize, n: usize, l: usize) -> Self {\r
        Self {\r
            nr: m - 2 * l - 1,\r
            nc: n - 2 * l - 1,\r
            p: (l, l),\r
            cnt: 0,\r
        }\r
    }\r
}\r
\r
impl Iterator for LayerIter {\r
    type Item = (usize, usize);\r
\r
    fn next(&mut self) -> Option<Self::Item> {\r
        if self.cnt < self.nc {\r
            // move right in top row\r
            let result = Some(self.p);\r
            self.p.1 += 1;\r
            self.cnt += 1;\r
            result\r
        } else if self.cnt < self.nc + self.nr {\r
            // move down in right col\r
            let result = Some(self.p);\r
            self.p.0 += 1;\r
            self.cnt += 1;\r
            result\r
        } else if self.cnt < 2 * self.nc + self.nr {\r
            // move left in bottom row\r
            let result = Some(self.p);\r
            self.p.1 -= 1;\r
            self.cnt += 1;\r
            result\r
        } else if self.cnt < 2 * self.nc + 2 * self.nr {\r
            // move up in left col\r
            let result = Some(self.p);\r
            self.p.0 -= 1;\r
            self.cnt += 1;\r
            result\r
        } else {\r
            None\r
        }\r
    }\r
}\r
```