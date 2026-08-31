# DP O(nk)

**Author:** hucancode
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/4434295/](https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible/solutions/4434295/)

---

# Intuition
Let's say we have used up $n$ sticks labels $a-1,a-2,...,a-(n-1)$, and we have another stick length $a-n$ which is smaller than all previous sticks, how can we go from here:

- From $n-1,k-1$ configuration, there is only 1 way can make $n,k$ configuration. That is put the new stick on the front
- From $n-1,k$ configuration, there are $n-1$ ways to put the new stick behind and keep the number of visible sticks the same

# Approach
Let $f(n,k)$ denotes the number of ways to arrange $n$ sticks and only show $k$ sticks:
- By that definition, $f(0,0) = 1$, there is 1 way to use nothing and show nothing
- $f(n,k) = f(n-1,k-1) + (n-1) \	imes f(n-1,k)$

# Complexity
- Time complexity: $O(n\	imes k)$
- Space complexity: $O(n\	imes k)$, could be further optimized to $O(k)$ if necessary

# Code
```rust
impl Solution {
    pub fn rearrange_sticks(n: i32, k: i32) -> i32 {
        let n = n as usize;
        let k = k as usize;
        let INF = 1000_000_007;
        let mut f = vec![vec![0i64; k+1]; n+1];
        // f[i][j] = how many ways to use i stick, and need to make j stick visible
        f[0][0] = 1;
        for j in 1..=k {
            for i in j..=n {
                // put first
                f[i][j] += f[i-1][j-1];
                // put back
                f[i][j] += f[i-1][j]*(i as i64 - 1);
                f[i][j] %= INF;
            }
        }
        return f[n][k] as i32;
    }
}
```