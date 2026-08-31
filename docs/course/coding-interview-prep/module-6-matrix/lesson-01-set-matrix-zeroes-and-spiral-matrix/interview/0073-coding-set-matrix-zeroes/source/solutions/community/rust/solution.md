# Rust - Matrix Manipulation

**Author:** idiotleon
**Votes:** 3
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/1402259/](https://leetcode.com/problems/set-matrix-zeroes/solutions/1402259/)

---

Solution - [github](https://github.com/idiotleon/lc_soln_rust_leon/tree/main/src/leetcode/lvl3/lc0073)

<b>Problem List</b>
#MatrixManipulation - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_data_structure/array/by_topic/manipulation)

```
/// @author: Leon
/// https://leetcode.com/problems/set-matrix-zeroes/
/// Time Complexity:    O(`n_rows` * `n_cols`)
/// Space Complexity:   O(1)
/// Reference:
/// https://leetcode.com/problems/set-matrix-zeroes/discuss/26014/Any-shorter-O(1)-space-solution
impl Solution {
    pub fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
        let n_rows = matrix.len();
        let n_cols = matrix[0].len();
        
        let mut first_row = false;
        let mut first_col = false;
        
        for row in 0..n_rows{
            for col in 0..n_cols{
                if matrix[row][col] == 0{
                    if row == 0{
                        first_row = true;
                    }
                    
                    if col == 0{
                        first_col = true;
                    }
                    
                    matrix[0][col] = 0;
                    matrix[row][0] = 0;
                }
            }
        }
        
        for row in 1..n_rows{
            for col in 1..n_cols{
                if matrix[row][0] == 0 || matrix[0][col] == 0{
                    matrix[row][col] = 0
                }
            }
        }
        
        if first_row{
            for col in 0..n_cols{
                matrix[0][col] = 0;
            }
        }
        
        if first_col{
            for row in 0..n_rows{
                matrix[row][0] = 0;
            }
        }
    }
}
```