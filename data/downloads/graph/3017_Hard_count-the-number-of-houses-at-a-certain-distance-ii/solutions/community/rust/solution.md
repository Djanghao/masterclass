# Rust incomprehensible answer

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/5533764/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii/solutions/5533764/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
impl Solution {
    pub fn count_of_pairs(n: i32, x: i32, y: i32) -> Vec<i64> {
        let loop_len = (x - y).abs() as usize + 1;
        if loop_len <= 1 {
            // trivial answer
            return (0..n as i64 * 2 - 1).rev().step_by(2).collect();
        }

        let mut ans = vec![0; n as usize];
        // count pairs in the loop
        for i in 0..(loop_len - 1) / 2 {
            ans[i] = loop_len as i64;
        }
        if loop_len & 1 == 0 {
            ans[loop_len / 2 - 1] = loop_len as i64 / 2;
        }

        // helper Vec for head (1..x.min(y))
        let mut to_loop_count = vec![2; loop_len / 2];
        if loop_len & 1 == 0 {
            *to_loop_count.last_mut().unwrap() = 1;
        }

        // include the head (1..x.min(y)) to the graph and count pairs
        let head_len = x.min(y) as usize - 1;
        let mut prefix_sum: Vec<i64> = std::iter::repeat(1)
                .take(head_len + 1)
            .chain(to_loop_count.iter().copied())
            .collect();
        for i in 1..prefix_sum.len() {
            prefix_sum[i] += prefix_sum[i - 1];
        }

        for i in 0..prefix_sum.len() - 1 {
            let j = (prefix_sum.len() - 1).min(i + head_len);
            ans[i] += prefix_sum[j] - prefix_sum[i];
        }
        
        // update helper Vec for tail (x.max(y) + 1..=n)
        for i in 1..1 + head_len {
            if i == to_loop_count.len() {
                to_loop_count.push(0);
            }
            to_loop_count[i] += 1;
        }

        // include the tail (x.max(y) + 1..=n) to the graph and count pairs
        let tail_len = (n - x.max(y)) as usize;
        prefix_sum = std::iter::repeat(1)
                .take(tail_len + 1)
            .chain(to_loop_count.iter().copied())
            .collect();
        for i in 1..prefix_sum.len() {
            prefix_sum[i] += prefix_sum[i - 1];
        }

        let mut tail_count = vec![0; prefix_sum.len() - 1];
        for i in 0..prefix_sum.len() - 1 {
            let j = (prefix_sum.len() - 1).min(i + tail_len);
            ans[i] += prefix_sum[j] - prefix_sum[i];
        }

        // multiply by 2
        for i in 0..ans.len() {
            ans[i] *= 2;
        }
        ans
    }
}
```