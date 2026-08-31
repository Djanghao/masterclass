# Rust Iteration with Two-Dimensional Scans

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/candy-crush/solutions/2827445/](https://leetcode.com/problems/candy-crush/solutions/2827445/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) Iterate until the board is stablized
2) In each iteration, use a flag matrix to mark the grids at which candies will be removed. 
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^2 * M^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(M * N)
# Code
```
impl Solution {
    pub fn candy_crush(board: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let (m, n) = (board.len(), board[0].len());
        let mut board = board;
        
        loop {
            let mut flag = vec![vec![0; n]; m];
            let mut stop = true;
            
            for i in 0 .. m {
                let mut cnt = 1;
                let mut j = 0;
                while j < n {
                    while j + cnt < n && board[i][j] == board[i][j + cnt] {
                        cnt += 1;
                    }
                    
                    if cnt > 2 && board[i][j] != 0 {
                        stop = false;
                        for k in 0 .. cnt { flag[i][j + k] = 1; }
                    }
                    
                    j += cnt;
                    cnt = 1;
                }
            }
            
            for j in 0 .. n {
                let mut cnt = 1;
                let mut i = 0;
                while i < m {
                    while i + cnt < m && board[i][j] == board[i + cnt][j] {
                        cnt += 1;
                    }
                    
                    if cnt > 2 && board[i][j] != 0 {
                        stop = false;
                        for k in 0 .. cnt { flag[i + k][j] = 1; }
                    }
                    
                    i += cnt;
                    cnt = 1;
                }
            }
            
            if stop { break }
            
            for j in 0 .. n {
                let mut cnt = 0;
                for i in (0 .. m).rev() {
                    if board[i][j] == 0 { break }
                    
                    if flag[i][j] == 1 { cnt += 1; }
                    if cnt == 0 { continue }
                    if i + cnt < m { 
                        if flag[i][j] == 0 { board[i + cnt][j] = board[i][j]; }
                    }
                    if cnt > 0 { board[i][j] = 0; }
                } 
            }
        }
        
        board
    }
}
```