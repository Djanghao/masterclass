# Rust with combinatorics

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/5595699/](https://leetcode.com/problems/kth-smallest-instructions/solutions/5595699/)

---

# Approach
1. With a variable `combi` to keep track of the number of "*paths remaining if 'H' is chosen*".

2. Initial value of `combi` is `nCr`, where `n` is `dest[0] + dest[1] - 1` and `r` is `dest[0]`.

3. After each step, `combi` needs to be updated efficiently, using the help of the current values of `n` and `r`.

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$
# Code
```
impl Solution {
    pub fn kth_smallest_path(destination: Vec<i32>, mut k: i32) -> String {
        let mut r = destination[0];
        let mut n = r + destination[1] - 1;
        let mut combi = 1;
        for i in 1..=r {
            combi = combi * (n - r + i) / i;
        }
        let mut ans = String::with_capacity(n as usize + 1);
        for _ in 0..n {
            if k > combi {
                ans.push('V');
                k -= combi;
                combi = combi * r / n;
                n -= 1;
                r -= 1;
            }
            else {
                ans.push('H');
                combi = combi * (n - r) / n;
                n -= 1;
            }
        }
        ans.push(if combi == 1 { 'H' } else { 'V' });
        ans
    }
}
```