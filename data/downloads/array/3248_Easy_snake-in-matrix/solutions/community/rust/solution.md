# good foundation for 2d games

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5923030/](https://leetcode.com/problems/snake-in-matrix/solutions/5923030/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []

impl Solution {
  pub fn final_position_of_snake(n: i32, commands: Vec<String>) -> i32 {
    // make grid
    let mut grid:Vec<Vec<i32>> = vec![];
    for i in 0..n {
      grid.push(vec![]);
      for j in 0..n {
        grid[i as usize].push(i*n+j);
      }
    }
    let mut cy = 0;
    let mut cx = 0;
    // simulate
    for cmd in commands {
      match &cmd[..] {
        "UP" => {
          cy-=1;
        }
        "RIGHT" => {
          cx+=1;
        }
        "LEFT" => {
          cx-=1;
        }
        _ => {
          cy+=1;
        }
      }
    }
    grid[cy][cx]
  }
}
```