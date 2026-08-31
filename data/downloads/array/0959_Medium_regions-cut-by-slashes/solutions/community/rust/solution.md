# Rust union-find

**Author:** dfomin
**Votes:** 3
**Link:** [https://leetcode.com/problems/regions-cut-by-slashes/solutions/5616994/](https://leetcode.com/problems/regions-cut-by-slashes/solutions/5616994/)

---

# Intuition
Each character is 4 segments: top, left, right, bottom. We can consider each segment as a vertex of the graph. Connecting them according the rules we can calculate number of connected components that is the answer.
**The rules:**
' ' => connect all 4 segments
'/' => connect top and left, connect right and bottom.
'\\\\' => connect top and right, connect left and bottom.
Then connect each neighbor characters according to segments, for example, bottom segment of the first character in the first row is connected to the top segment of the first character in the second row. Right segment of the first character is connected to the left segment of the second character etc.

# Code
```
use std::collections::HashSet;

impl Solution {
    pub fn regions_by_slashes(grid: Vec<String>) -> i32 {
        let height = grid.len();
        let width = grid[0].len();
        let mut components = (0..width * height * 4).collect::<Vec<usize>>();
        let mut result = (width * height * 4) as i32;
        for (i, line) in grid.iter().enumerate() {
            for (j, &ch) in line.as_bytes().iter().enumerate() {
                match ch {
                    b' ' => {
                        Self::union((i * width + j) * 4, (i * width + j) * 4 + 1, &mut components, &mut result);
                        Self::union((i * width + j) * 4, (i * width + j) * 4 + 2, &mut components, &mut result);
                        Self::union((i * width + j) * 4, (i * width + j) * 4 + 3, &mut components, &mut result);
                    }
                    b'/' => {
                        Self::union((i * width + j) * 4, (i * width + j) * 4 + 1, &mut components, &mut result);
                        Self::union((i * width + j) * 4 + 2, (i * width + j) * 4 + 3, &mut components, &mut result);
                    }
                    b'\\\\' => {
                        Self::union((i * width + j) * 4, (i * width + j) * 4 + 2, &mut components, &mut result);
                        Self::union((i * width + j) * 4 + 1, (i * width + j) * 4 + 3, &mut components, &mut result);
                    }
                    _ => panic!(""),
                }
                Self::connect(i, j, width, height, &mut components, &mut result);
            }
        }
        result
    }

    fn union(n1: usize, n2: usize, components: &mut Vec<usize>, result: &mut i32) {
        let p1 = Solution::find(n1, components);
        let p2 = Solution::find(n2, components);
        if p1 != p2 {
            components[p2] = p1;
            *result -= 1;
        }
    }

    fn find(n: usize, components: &mut Vec<usize>) -> usize {
        let mut p = components[n];
        if p != n {
            p = Solution::find(p, components);
            components[n] = p;
        }

        return p;
    }

    fn connect(i: usize, j: usize, width: usize, height: usize, components: &mut Vec<usize>, result: &mut i32) {
        if i > 0 {
            Self::union((i * width + j) * 4, ((i - 1) * width + j) * 4 + 3, components, result);
        }
        if j > 0 {
            Self::union((i * width + j) * 4 + 1, (i * width + j - 1) * 4 + 2, components, result);
        }
        if i < height - 1 {
            Self::union((i * width + j) * 4 + 3, ((i + 1) * width + j) * 4, components, result);
        }
        if j < width - 1 {
            Self::union((i * width + j) * 4 + 2, (i * width + j + 1) * 4 + 1, components, result);
        }
    }
}
```