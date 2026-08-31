# Rust Solution

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/2730702/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/2730702/)

---

~~~
impl Solution {
    pub fn longest_line(mat: Vec<Vec<i32>>) -> i32 {
        let mut ret = 0;
        let (m, n) = (mat.len(), mat[0].len());
        
        for i in 0..m {
            let dirs = [[0, 1], [1, 1], [-1, 1]];
			 let (u, v) = (i, 0);
			 
            for d in dirs {
                let mut cnt = 0;
                
                for k in 0..m.max(n) {
                    let (x, y) = (u as i32 + k as i32 * d[0], v as i32 + k as i32 * d[1]);
                    if x < 0 || x == m as i32 || y < 0 || y == n as i32 { break }
                    
                    let (x, y) = (x as usize, y as usize);
                    if mat[x][y] == 0 { cnt = 0; }
                    else              { cnt += 1; }
                    ret = ret.max(cnt);
                }
            }
            
            let dirs = [[0, -1], [-1, -1], [1, -1]];
			let (u, v) = (i, n - 1);
			
            for d in dirs {
                let mut cnt = 0;
                
                for k in 0..m.max(n) {
                    let (x, y) = (u as i32 + k as i32 * d[0], v as i32 + k as i32 * d[1]);
                    if x < 0 || x == m as i32 || y < 0 || y == n as i32 { break }
                    
                    let (x, y) = (x as usize, y as usize);
                    if mat[x][y] == 0 { cnt = 0; }
                    else              { cnt += 1; }
                    ret = ret.max(cnt);
                }
            }
        }
        
        for j in 0..n {
            let dirs = [[1, 0], [1, 1], [1, -1]];
			let (u, v) = (0, j);
			
            for d in dirs {
                let mut cnt = 0;
                
                for k in 0..m.max(n) {
                    let (x, y) = (u as i32 + k as i32 * d[0], v as i32 + k as i32 * d[1]);
                    if x < 0 || x == m as i32 || y < 0 || y == n as i32 { break }
                    
                    let (x, y) = (x as usize, y as usize);
                    if mat[x][y] == 0 { cnt = 0; }
                    else              { cnt += 1; }
                    ret = ret.max(cnt);
                }
            }
            
            let dirs = [[-1, 0], [-1, -1], [-1, 1]];
			let (u, v) = (m - 1, j);
			
            for d in dirs {
                let mut cnt = 0;
                
                for k in 0..m.max(n) {
                    let (x, y) = (u as i32 + k as i32 * d[0], v as i32 + k as i32 * d[1]);
                    if x < 0 || x == m as i32 || y < 0 || y == n as i32 { break }
                    
                    let (x, y) = (x as usize, y as usize);
                    if mat[x][y] == 0 { cnt = 0; }
                    else              { cnt += 1; }
                    ret = ret.max(cnt);
                }
            }
        }
        
        ret
    }
}
~~~