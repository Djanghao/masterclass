# [Rust] monotonic stack

**Author:** Minminn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4182417/](https://leetcode.com/problems/maximum-number-of-books-you-can-take/solutions/4182417/)

---



```
// dp[i] = max books ends with ith book
// dp[-1] = 0
//                        i            i-1 ,,      j+1  j
// dp[i] = dp[j] + { (books[i]) + (books[i]-1) + ...  }
// ; -1 <= j < i < n
// s.t.  books[j] < books[i] - i + j

// j   i
// ... x
// cond1) cnt <= i - j + 1
// cond2) 1 <= x - cnt + 1
// --> cnt <= i - j + 1
// --> cnt <= x
use std::cmp;

impl Solution {
    pub fn maximum_books(books: Vec<i32>) -> i64 {
        let n = books.len();
        let mut dp = vec![0; n];
        let mut stk: Vec<usize> = Vec::new();

        for (i, &x) in books.iter().enumerate() {
            while !stk.is_empty()
                && books[*stk.last().unwrap()] >= x - (i as i32) + *stk.last().unwrap() as i32
            {
                stk.pop();
            }
            let j = stk.last().map(|&x| x as i32).unwrap_or(-1);
            if j != -1 {
                dp[i] = dp[j as usize];
            }
            let cnt = cmp::min(x, i as i32 - j) as i64;
            dp[i] += ((x + x) as i64 - cnt + 1) * cnt / 2;
            stk.push(i);
        }

        *dp.iter().max().unwrap()
    }
}

```