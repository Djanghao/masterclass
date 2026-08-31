# 17ms dp solution

**Author:** sovlynn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5920330/](https://leetcode.com/problems/count-the-number-of-winning-sequences/solutions/5920330/)

---

# Intuition
Standard dynamic programming solution. THe only hard part is finding the dp inference equation.

# Approach
$dp[n+i]$ means the number of combinations for bob winning $i$ points, $-n\\leq i \\leq n$. The sub number $0, 1, 2$ indicates the combinations ending with 'W', 'F', 'E'.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$

# Code
```rust []
impl Solution {
    const MOD:u64=1000000007;

    pub fn count_winning_sequences(s: String) -> i32 {
        let s=s.as_bytes();
        let n=s.len();
        let mut cur=vec![(0, 0, 0); n*2+1];
        match s[0]{
            b'W' => {
                cur[n+0].0=1;
                cur[n-1].1=1;
                cur[n+1].2=1
            },
            b'F' => {
                cur[n+1].0=1;
                cur[n+0].1=1;
                cur[n-1].2=1;
            },
            _ => { // b'E'
                cur[n-1].0=1;
                cur[n+1].1=1;
                cur[n+0].2=1;
            }
        }

        for i in 1..n{
            let mut nxt=vec![(0, 0, 0); 2*n+1];
            match s[i]{
                b'W' => {
                    for j in n-i..=n+i{
                        let (w, f, e)=cur[j];
                        nxt[j-1].1+=w;
                        nxt[j+1].2+=w;
                        nxt[j].0+=f;
                        nxt[j+1].2+=f;
                        nxt[j].0+=e;
                        nxt[j-1].1+=e;
                    }
                },
                b'F' => {
                    for j in n-i..=n+i{
                        let (w, f, e)=cur[j];
                        nxt[j].1+=w;
                        nxt[j-1].2+=w;
                        nxt[j+1].0+=f;
                        nxt[j-1].2+=f;
                        nxt[j+1].0+=e;
                        nxt[j].1+=e;
                    }
                },
                _ => { // b'E'
                    for j in n-i..=n+i{
                        let (w, f, e)=cur[j];
                        nxt[j+1].1+=w;
                        nxt[j].2+=w;
                        nxt[j-1].0+=f;
                        nxt[j].2+=f;
                        nxt[j-1].0+=e;
                        nxt[j+1].1+=e;
                    }
                },
            }
            for j in n-i..=n+i{
                nxt[j].0%=Self::MOD;
                nxt[j].1%=Self::MOD;
                nxt[j].2%=Self::MOD;
            }
            cur=nxt;
        }
        (cur[n+1..].iter().map(|c|c.0+c.1+c.2).sum::<u64>()%Self::MOD) as i32
    }
}
// WFE
```