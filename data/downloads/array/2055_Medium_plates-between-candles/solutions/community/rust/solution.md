# Rust | prefix sum | 52ms | beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/plates-between-candles/solutions/5365118/](https://leetcode.com/problems/plates-between-candles/solutions/5365118/)

---

# Intuition
Use prefix sum for plates and store most recent candle index for all the indices.

# Approach
Prefix sum of plates is straight forward. For candles we store both left most candle seen and right most candle seen from left and right. When querying a sub array, we get right most candle inside subarray from left prefix candle indices, and left most candle from right prefix candle indices and if both these fall within given query range, the count is just the difference of prefix sums between those two indices.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
impl Solution {
    pub fn plates_between_candles(s: String, queries: Vec<Vec<i32>>) -> Vec<i32> {
        let size = s.len();
        let sc = s.chars().collect::<Vec<_>>();
        let mut plates = vec![0; size];
        let mut left_candle_indices = vec![-1; size];
        let mut right_candle_indices = vec![-1; size];
        for i in 0..size {
            let c = sc[i];
            let rc = sc[size-i-1];
            match c {
                '*' => {
                    plates[i] = if i == 0 {1} else {plates[i-1]+1};
                    if i > 0 {
                        left_candle_indices[i] = left_candle_indices[i-1];
                    }
                },
                _ => {
                    plates[i] = if i == 0 {0} else {plates[i-1]};
                    left_candle_indices[i] = i as i32;
                }
            }
            match rc {
                '*' => {
                    if i > 0 {
                        right_candle_indices[size-1-i] = right_candle_indices[size-i];
                    }
                },
                _ => {
                    right_candle_indices[size-1-i] = (size-1-i) as i32;
                }
            }
        }
        let mut ans = vec![0; queries.len()];
        for (i,q) in queries.iter().enumerate() {
            if let &[left, right] = q.as_slice() {
                let right_candle_idx = left_candle_indices[right as usize];
                let left_candle_idx = right_candle_indices[left as usize];
                if right_candle_idx >= left && left_candle_idx <= right {
                    ans[i] = plates[right_candle_idx as usize]-plates[left_candle_idx as usize];
                }
            }
        }
        ans
    }
}
```