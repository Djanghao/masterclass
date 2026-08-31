# Rust Solution: Focusing on top three elements on each row

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5679198/](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/solutions/5679198/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If we focus on 3 different rows and select 3 top elements on each row, the result could be calculated using these 9 elements.
# Approach
<!-- Describe your approach to solving the problem. -->
Vec a: a[i] contains three top elements from i-th row;
Vec b: b[i] contains three top elements from i-th row or below and from different columns;
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O((M + N)(M + N))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(M + N)
# Code
```rust []
impl Solution {
    pub fn maximum_value_sum(board: Vec<Vec<i32>>) -> i64 {
        let (m, n) = (board.len(), board[0].len());
        let mut a: Vec<Vec<(i64, usize)>> = vec![vec![]; m];
        let mut b: Vec<Vec<(i64, usize)>> = vec![vec![]; m];
        
        for i in (0 .. m).rev() {
            let mut t = vec![];
            
            for j in 0 .. n {t.push(( board[i][j] as i64, j )); }
            t.sort();
            t.reverse();
            for k in 0 .. 3 {
                a[i].push( t[k].clone() );
            }
            
            let mut t = a[i].clone();
            if i + 1 < m {
                for it in &b[i + 1] { t.push((*it).clone()); }
            }
            t.sort();
            t.reverse();

            let mut flag = vec![0; n];
            for (it, k) in t {
                if flag[k] == 1 { continue }
                flag[k] = 1;
                b[i].push((it, k));
                if b[i].len() == 3 { break }
            }
        }

        let mut ret = i64::MIN;
        for it1 in 0 .. m {
            for it2 in it1 + 1 .. m - 1 {
                let it3 = it2 + 1;

                for k1 in 0 .. 3 {
                    for k2 in 0 .. 3 {
                        for k3 in 0 .. 3 {
                            if a[it1][k1].1 == a[it2][k2].1 { continue }
                            if a[it2][k2].1 == b[it3][k3].1 { continue }
                            if b[it3][k3].1 == a[it1][k1].1 { continue }

                            ret = ret.max(a[it1][k1].0 + a[it2][k2].0 + b[it3][k3].0);
                        }
                    }
                } 
            }
        }

        ret
    }
}
```