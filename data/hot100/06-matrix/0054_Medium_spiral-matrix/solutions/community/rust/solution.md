# 0ms Rust Solution with Pattern Matching & Enum, clear and concise with comments

**Author:** kennysliding
**Votes:** 6
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/3504647/](https://leetcode.com/problems/spiral-matrix/solutions/3504647/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
**Don't overcomplicate things**

Use a variable `round` to keep track of the loop we are in, and turn accordingly. This solution reaches 0ms as reported by Leetcode.

# Approach
<!-- Describe your approach to solving the problem. -->
Use enum to indicate the direction we are going, check on each loop if we hit a bump i.e. the limit, and turn if so, or increase by one step otherwise.

# Complexity
- Time complexity: $$O(n)$$ for entire vector traversal
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ for creating a cloned copy
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
enum Direction {
    Up,
    Down,
    Right,
    Left,
}

impl Solution {
    pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
        let mut direction = Direction::Right;
        let mut round = 0;
        let mut row = 0;
        let mut col = 0;
        let m = matrix.len();
        let n = matrix[0].len();
        let mut flatten_matrix = vec![];

        for _ in 0..m * n {
            flatten_matrix.push(matrix[row][col]);

            match direction {
                Direction::Up => {
                    // reach the limit
                    if row == round + 1 {
                        col += 1;
                        direction = Direction::Right;
                        round += 1;
                    } else {
                        row -= 1;
                    }
                }
                Direction::Down => {
                    // reach the limit
                    if row + 1 == m - round {
                        col -= 1;
                        direction = Direction::Left;
                    } else {
                        row += 1;
                    }
                }
                Direction::Right => {
                    // reach the limit
                    if col + 1 == n - round {
                        row += 1;
                        direction = Direction::Down;
                    } else {
                        col += 1;
                    }
                }
                Direction::Left => {
                    // reach the limit
                    if col == round {
                        row -= 1;
                        direction = Direction::Up;
                    } else {
                        col -= 1;
                    }
                }
            }
        }

        flatten_matrix
    }
}

```