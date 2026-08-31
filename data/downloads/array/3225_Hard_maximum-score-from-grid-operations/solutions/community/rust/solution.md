# rust workable solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-grid-operations/solutions/5508309/](https://leetcode.com/problems/maximum-score-from-grid-operations/solutions/5508309/)

---

Just a workable solution. Not optimal, runtime terrible.

If rust can ignore boundary check, this can be a lot faster.

# Complexity
- Time complexity:
$$O(n^4)$$

- Space complexity:
$$O(n^2)$$

# Code
I'll give two versions. The first runs faster, the second is easier to understand. They are basicly the same.
```
impl Solution {
    pub fn maximum_score(grid: Vec<Vec<i32>>) -> i64 {
        let n=grid.len();
        if n==1{
            return 0;
        }

        let mut prefSum=Vec::new();
        for i in 0..n{
            let mut tmp=vec![0];
            for j in 0..n{
                let b=tmp[tmp.len()-1];
                tmp.push(b+grid[j][i] as i64);
            }
            prefSum.push(tmp);
        }
        let mut prev=vec![vec![0; n+1]; n+1];
        for a in 0..=n{
            for b in 0..=n{
                prev[b][a]=if a>b{prefSum[1][a]-prefSum[1][b]}else{prefSum[0][b]-prefSum[0][a]};
            }
        }
        for j in 2..n{
            let mut dp=vec![vec![0; n+1]; n+1];
            for c in 0..=n{
                for b in 0..c{
                    let mut m=0;
                    for a in 0..c{
                        m=m.max(prev[b][a]+prefSum[j-1][c]-prefSum[j-1][a.max(b)]);
                    }
                    for a in c..=n{
                        m=m.max(prev[b][a]);
                    }
                    dp[c][b]=m;
                }
                for b in c..=n{
                    let mut m=0;
                    for a in 0..=n{
                        m=m.max(prev[b][a]+prefSum[j][b]-prefSum[j][c]);
                    }
                    dp[c][b]=m;
                }
            }
            prev=dp;
        }
        *prev.iter().map(|v|v.into_iter().max().unwrap()).max().unwrap()
    }
}
```
```
impl Solution {
    pub fn maximum_score(grid: Vec<Vec<i32>>) -> i64 {
        let n=grid.len();
        if n==1{
            return 0;
        }

        let mut prefSum=Vec::new();
        for i in 0..n{
            let mut tmp=vec![0];
            for j in 0..n{
                let b=tmp[tmp.len()-1];
                tmp.push(b+grid[j][i] as i64);
            }
            prefSum.push(tmp);
        }
        let mut prev=vec![vec![0; n+1]; n+1];
        for a in 0..=n{
            for b in 0..=n{
                prev[b][a]=if a>b{prefSum[1][a]-prefSum[1][b]}else{prefSum[0][b]-prefSum[0][a]};
            }
        }
        for j in 2..n{
            let mut dp=vec![vec![0; n+1]; n+1];
            for b in 0..=n{
                for c in 0..=n{
                    let mut m=0;
                    for a in 0..=n{
                        let tmp=prev[b][a]+if c>a&&c>b{
                            prefSum[j-1][c]-prefSum[j-1][a.max(b)]
                        }else if c<b{
                            prefSum[j][b]-prefSum[j][c]
                        }else{0};
                        m=m.max(tmp);
                    }
                    dp[c][b]=m;
                }
            }
            prev=dp;
        }
        *prev.iter().map(|v|v.into_iter().max().unwrap()).max().unwrap()
    }
}
```

