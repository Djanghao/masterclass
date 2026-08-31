# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/2281439/](https://leetcode.com/problems/number-of-ways-to-build-sturdy-brick-wall/solutions/2281439/)

---

```
struct Helper {
    width: i32,
    memo: Vec<Vec<i32>>,
    bricks: Vec<i32>
}

impl Helper {
    fn culc(&mut self, arr:Vec<i32>, sum:i32) {
        if sum == self.width {
            self.memo.push(arr);
            return
        }

        for i in 0..self.bricks.len() {
            let nv = sum + self.bricks[i];
            if self.width < nv {
                continue
            }

            let mut new_arr = arr.clone();
            new_arr.push(self.bricks[i]);
            self.culc(new_arr, nv);
        }
    }
}

const MOD:usize = 1_000_000_007;
impl Solution {
    pub fn build_wall(height: i32, width: i32, mut bricks: Vec<i32>) -> i32 {
        bricks.sort();
        let mut helper = Helper { width, memo: vec![], bricks };
        helper.culc(vec![], 0);

        let n = helper.memo.len();  
        let mut memo = vec![vec![];n];
        for i in 0..n {
            let m = helper.memo[i].len();
            let mut temp = vec![0;m+1];
            for j in 0..m {
                temp[j+1] = helper.memo[i][j] + temp[j];
            }
            memo[i] = temp;
        }

        let mut g = vec![vec![];n];
        for i in 0..n {
            let a = &memo[i];
            let an = a.len();

            for j in i..n {
                let mut success = true;
                let b = &memo[j];
                let bn = b.len();
            for i in 1..an-1 {
                for j in 1..bn-1 {
                    if a[i] == b[j] {
                        success = false;
                    }
                }
            }

                if success {
                    if i == j {
                        g[i].push(j);
                    } else {
                        g[i].push(j);
                        g[j].push(i);
                    }
                }
            }
        }

        let mut memo = vec![1;n];
        let m = height as usize;
        for _ in 1..m {
            let mut temp = vec![0usize;n];

            for i in 0..n {
                for &ni in &g[i] {
                    temp[ni] += memo[i];
                    temp[ni] %= MOD;
                }
            }
            memo = temp;
        }

        let mut result = 0;
        for v in memo {
            result += v;
            result %= MOD;
        }
        result as i32
    }
}
```