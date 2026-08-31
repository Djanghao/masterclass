# [Rust] 4ms recursive DFS & 0ms iterative DFS.

**Author:** marccarre
**Votes:** 3
**Link:** [https://leetcode.com/problems/flood-fill/solutions/626177/](https://leetcode.com/problems/flood-fill/solutions/626177/)

---

#### Recursive DFS

Runtime(\\*): 4 ms.
```rust
impl Solution {
    pub fn flood_fill(mut image: Vec<Vec<i32>>, sr: i32, sc: i32, new_color: i32) -> Vec<Vec<i32>> {
        let old_color = image[sr as usize][sc as usize];
        if old_color != new_color {
            Self::fill(&mut image, sr as usize, sc as usize, old_color, new_color);
        }
        image
    }
    
    fn fill(image: &mut Vec<Vec<i32>>, i: usize, j: usize, old_color: i32, new_color: i32) {
        if image[i][j] != old_color {
            return;
        }
        image[i][j] = new_color;
        if i > 0 {
            Self::fill(image, i - 1, j, old_color, new_color);
        }
        if i < image.len() - 1 {
            Self::fill(image, i + 1, j, old_color, new_color);
        }
        if j > 0 {
            Self::fill(image, i, j - 1, old_color, new_color);
        }
        if j < image[0].len() - 1 {
            Self::fill(image, i, j + 1, old_color, new_color);
        }
    }
}
```

#### Iterative DFS

Runtime(\\*): 0 ms.
```rust
impl Solution {
    pub fn flood_fill(mut image: Vec<Vec<i32>>, sr: i32, sc: i32, new_color: i32) -> Vec<Vec<i32>> {
        let old_color = image[sr as usize][sc as usize];
        if old_color == new_color {
            return image;
        }
        let mut stack = vec![(sr as usize, sc as usize)];
        while let Some((i, j)) = stack.pop() {
            if image[i][j] != old_color {
                continue;
            }
            image[i][j] = new_color;
            if i > 0 {
                stack.push((i - 1, j));
            }
            if i < image.len() - 1 {
                stack.push((i + 1, j))
            }
            if j > 0 {
                stack.push((i, j - 1));
            }
            if j < image[0].len() - 1 {
                stack.push((i, j + 1));
            }   
        }
        image
    }
}
```

----
(\\*): Leetcode's benchmarks do not seem particularly accurate, and re-submissions of the same code multiple times sometimes exhibits large variance, so please take these with a ~~pinch~~ _huge bucket_ of salt.