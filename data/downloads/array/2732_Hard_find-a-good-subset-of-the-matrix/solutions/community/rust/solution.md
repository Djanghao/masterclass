# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/4171177/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/4171177/)

---

```
impl Solution {
    pub fn good_subsetof_binary_matrix(grid: Vec<Vec<i32>>) -> Vec<i32> {
        let mut ans = vec![];
        let n = grid[0].len();
        let m = grid.len();
        let v = vec![0; n];
        for (i, item) in grid.iter().enumerate().take(m) {
            if *item == v {
                ans.push(i as i32);
                return ans;
            }
        }
        for i in 0..m {
            for j in i + 1..m {
                if Self::foo(&grid[i], &grid[j], n) {
                    ans.push(i as i32);
                    ans.push(j as i32);
                    return ans;
                }
            }
        }
        ans
    }

    fn foo(v1: &[i32], v2: &[i32], n: usize) -> bool {
        for i in 0..n {
            if v1[i] + v2[i] == 2 {
                return false;
            }
        }
        true
    }
}

```