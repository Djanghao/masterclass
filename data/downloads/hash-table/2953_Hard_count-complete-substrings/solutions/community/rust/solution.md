# [🦀] Rust O(n)/O(1) solution (55ms)

**Author:** Tsimon-Dorakh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-substrings/solutions/4508719/](https://leetcode.com/problems/count-complete-substrings/solutions/4508719/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
impl Solution {
    pub fn count_complete_substrings(s: String, k: i32) -> i32 {
        let xs = s.bytes().map(|b| b - b'a').collect();

        (1..=26).map(|i| Self::countSliding(&xs, k, i * k as usize)).sum()
    }

    fn countSliding(xs: &Vec<u8>, k: i32, n: usize) -> i32 {
        if n > xs.len() { return 0; }

        let (mut cs, mut res, mut q) = (vec![0; 26], 0, 0);

        for i in 0..xs.len() {
            let j = i - n;
            cs[xs[i] as usize] += 1;
            if i >= n { cs[xs[j] as usize] -= 1; }
            if i > 0  && xs[i].abs_diff(xs[i - 1]) > 2 { q += 1; }
            if i >= n && xs[j].abs_diff(xs[j + 1]) > 2 { q -= 1; }
            if i >= n - 1 && q == 0 && cs.iter().all(|&x| x == 0 || x == k) { res += 1; }
        }

        res
    }
}
```