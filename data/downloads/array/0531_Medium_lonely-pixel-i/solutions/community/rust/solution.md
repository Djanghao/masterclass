# Rust | Easy to understand O(mn) solution

**Author:** soyflourbread
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/3654408/](https://leetcode.com/problems/lonely-pixel-i/solutions/3654408/)

---

# Intuition

If a pixel is alone both row-wise and column-wise, it is a lonely pixel!!

# Approach

Iterate through the matrix row-by-row, and find lonely pixels in each row.

Using the same logic, find lonely pixels in each column.
Merge the two results to find lonely pixels in the matrix.

# Complexity
- Time complexity:
$$O(m n)$$

- Space complexity:
$$O(m+n)$$

# Code
```
// State machine to find lonely pixels in a row (or column).
pub enum States {
    Entry,

    Iter {
        prev_idx: Option<usize>,
        count: usize,
    },

    Exited,
}

impl States {
    pub fn next(self, token: bool) -> Self {
        match self {
            Self::Entry => Self::Iter {
                prev_idx: if token { Some(0) } else { None },
                count: 1,
            },
            Self::Iter { prev_idx, count } => {
                if !token {
                    return Self::Iter { prev_idx, count: count + 1 };
                }

                // found a black
                if prev_idx.is_some() { return Self::Exited; } // repeating

                Self::Iter { prev_idx: Some(count), count: count + 1 }
            },
            Self::Exited => Self::Exited, // already exited
        }
    }

    // Get the index of the lonely pixel (if any).
    pub fn drain(self) -> Option<usize> {
        match self {
            Self::Iter { prev_idx, count } => prev_idx,
            _ => None,
        }
    }
}

impl Solution {
    pub fn find_lonely_pixel(mat: Vec<Vec<char>>) -> i32 {
        if mat.is_empty() { return 0; }

        let m = mat.len();
        let n = mat[0].len();

        // Get an array of row-wise lonely pixels.
        let row_vec = mat.iter()
            .map(|row| {
                let mut state = States::Entry;
                for token in row {
                    state = state.next(*token == 'B');
                    if matches!(state, States::Exited) { break; }
                }
                state.drain()
            }).collect::<Vec<_>>();
        
        // Get an array of column-wise lonely pixels.
        let mut col_vec = Vec::with_capacity(n);
        for j in 0..n {
            let mut state = States::Entry;

            for i in 0..m {
                let token = mat[i][j];
                state = state.next(token == 'B');
                if matches!(state, States::Exited) { break; }
            }
            col_vec.push(state.drain());
        }

        let mut count = 0usize;
        for (row_idx, col_idx_opt) in row_vec.into_iter().enumerate() {
            let col_idx = if let Some(idx) = col_idx_opt {
                idx
            } else { continue; };

            // Check if a pixel is lonely both row-wise and col-wise.
            if col_vec[col_idx] == Some(row_idx) {
                count += 1;
            }
        }

        count as i32
    }
}
```