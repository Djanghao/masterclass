# Recursive check of nearby slots

**Author:** moonbounces_coeds
**Votes:** 0
**Link:** [https://leetcode.com/problems/minesweeper/solutions/4289011/](https://leetcode.com/problems/minesweeper/solutions/4289011/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
Given $$n$$ as size of matrix $$(rows * cols)$$

- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$ only because it clone original matrix instead of inline changes

# Code
```
impl Solution {
    pub fn update_board(board: Vec<Vec<char>>, click: Vec<i32>) -> Vec<Vec<char>> {
        let mut result = board.clone();
        Solution::reveal_point(&mut result, [click[0] as usize, click[1] as usize]);
        result
    }

    fn reveal_point(board: &mut Vec<Vec<char>>, point: [usize; 2]) {
        let size = [board.len(), board[0].len()];
        if Solution::is_bomb(board, point) {
            board[point[0]][point[1]] = 'X'
        } else {
            let mut counter: u8 = 0;
            let near_by_points = Solution::near_by_points(&point, &size);
            for near_by_point in near_by_points.clone() {
                if Solution::is_bomb(board, near_by_point) {
                    counter += 1;
                }
            }

            if counter > 0 {
                board[point[0]][point[1]] = counter.to_string().chars().next().unwrap()
            } else {
                board[point[0]][point[1]] = 'B';
                for near_by_point in near_by_points {
                    if !Solution::is_revealed(board, near_by_point) {
                        Solution::reveal_point(board, near_by_point)
                    }
                }
            }
        }
    }

    /// Returns iterable of all allowed points around given one
    fn near_by_points(point: &[usize; 2], size: &[usize; 2]) -> Vec<[usize; 2]> {
        let mut result = Vec::new();
        for r in point[0] as i32 - 1 .. point[0] as i32 + 2 {
            for c in point[1] as i32 - 1 .. point[1] as i32 + 2 {
                if r >= 0 && c >= 0 {
                    let r = r as usize;
                    let c = c as usize;
                    if r < size[0] && c < size[1] && !(r == point[0] && c == point[1]) {
                        result.push([r, c])
                    }
                }
            }
        }
        result
    }

    fn is_bomb(board: &Vec<Vec<char>>, point: [usize; 2]) -> bool {
        board[point[0]][point[1]] == 'M'
    }

    fn is_revealed(board: &Vec<Vec<char>>, point: [usize; 2]) -> bool {
        board[point[0]][point[1]] != 'E' || Solution::is_bomb(board, point)
    }
}

```