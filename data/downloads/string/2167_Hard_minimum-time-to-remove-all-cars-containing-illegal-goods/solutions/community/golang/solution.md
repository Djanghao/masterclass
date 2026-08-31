# DP O(n), split the train and apply operation

**Author:** hucancode
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/4966004/](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/4966004/)

---

# Intuition
- We split the train into 3 parts. Left & Mid & Right
- We apply operation 1 on Left, operation 3 on Mid, and operation 2 on Right
- That naive split will have us ended up with $O(n^2)$ solution, which is unfeasible with $n = 10^5$
- We will optimize further by split the train into 2 parts. Left and Right. We apply operation 1 or 3 on Left, operation 2 on Right

# Approach
- Let $f(1,i)$ is the cost to use operation 1 at position i to clear all car in the range $[0,i]$. By that definition $f(1,i) = i+1$ since we have to eleminate everything came before i to be able to use operation 1.
- Let $f(2,i)$ is the cost to use operation 2 at position i to clear all car in the range $(i, n)$. By that definition $f(2,i) = n-i-1$
- Let $f(3,i)$ is the cost to use operation 3 at position i to clear all _illegal_ car in the range $[0,i]$. 
- Let's say we are at car $i$ and up until car $i-1$ we know the cost to clear all _illegal_ car using method 1 is $f(1,i-1)$ and using method 3 is $f(3, i-1)$ then $f(3,i) = min(f(1,i-1), f(3,i-1))$
- Loop through all middle position $i$ and calculate the cost if we were to split the train at $i$. We use operation 1 and 3 on the left part and operation 2 on the right part.
# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$, but can be optimized to $O(1)$

# Code
```rust
impl Solution {
    pub fn minimum_time(s: String) -> i32 {
        use std::cmp::min;
        let n = s.len();
        let mut f = vec![vec![0;n+1];4];
        // f(1,i) = cost to use operation 1 at i~n
        // f(2,i) = cost to use operation 2 at 0~i
        // f(3,i) = min cost to use operation 3 at 0~i
        let mut ret = n;
        for (i,c) in s.chars().enumerate() {
            f[2][i+1] = n-i-1;
            if c == '1' {
                f[3][i+1] = min(f[1][i], f[3][i]) + 2;
                f[1][i+1] = i+1;
            } else {
                f[3][i+1] = f[3][i];
                f[1][i+1] = f[1][i];
            }
            ret = min(ret, min(f[1][i+1], f[3][i+1]) + f[2][i+1]);
        }
        ret as i32
    }
}
```
$O(1)$ space solution
```rust
impl Solution {
    pub fn minimum_time(s: String) -> i32 {
        use std::cmp::min;
        let n = s.len();
        let mut pick_mid = 0;
        let mut clear_left = 0;
        let mut ret = n;
        for (i,c) in s.chars().enumerate() {
            let clear_right = n-i-1;
            if c == '1' {
                pick_mid = min(clear_left, pick_mid) + 2;
                clear_left = i+1;
            }
            ret = min(ret, min(pick_mid, clear_left) + clear_right);
        }
        ret as i32
    }
}
```

Bonus, Go implementation

```go
func minimumTime(s string) int {
    n := len(s)
    pick_mid := 0
    clear_left := 0
    ret := n
    for i,c := range s {
        clear_right := n-i-1
        if c == '1' {
            pick_mid = min(clear_left, pick_mid) + 2
            clear_left = i+1
        }
        ret = min(ret, min(pick_mid, clear_left) + clear_right)
    }
    return ret
}
```