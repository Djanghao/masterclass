# Rust solution by prefix sum. Time: O(n). Space: O(1)

**Author:** ojzoor
**Votes:** 0
**Link:** [https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6078436/](https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6078436/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There is should be approach to calculate and get sum of costs between two symbols for forward movement and separately for backward movement.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculating prefix sum for `next_cost` array
2. Calculating prefix sum for `previous_cost` array - and also we have to flip this prefix sum array, because we are moving in the opposite direction
3. Mapping alphabe symbols into theirs indexes
4. Throughing all the symbols in the loop
    1. Checking - is `from` symbol have index greater than index of symbol `to`
    2. For case when `from` symbol less than symbol `to`
        1. Calculating cost distance between two values - `to` and `from` in `next_cost_sum` array
        2. Calculating distance between two values - first element of `previous_cost_sum` array and value of `from` element - and after that distance between values - value of `to` element and last element of `previous_cost_sum` array
        3. Minimum value of these two distances
    3. For case when `from` symbol greater than symbol `to`
        1. Calculating cost distance between two values -  `from` and `to` in `previous_cost_sum` array
        2. Calculating distance between two values - last element of `next_cost_sum` array and value of `from` element -  and after that distance between values - value of `to` element and first element of `next_cost_sum` array
        3. Minimum value of these two distances
    3. Summing of these minimum value into `result`
5. return `result`

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(1)$$ -->

# Code
```rust []
impl Solution {
    pub fn shift_distance(s: String, t: String, mut next_cost: Vec<i32>, mut previous_cost: Vec<i32>) -> i64 {
        let mut len = next_cost.len();

        let next_cost: Vec<i64> = next_cost.into_iter().map(|value| value as i64).collect();
        let previous_cost: Vec<i64> = previous_cost.into_iter().map(|value| value as i64).collect();

        let mut next_cost_sum = Vec::with_capacity(len);
        next_cost_sum.push(next_cost[0]);
        for idx in 1..len {
            next_cost_sum.push(next_cost[idx] + next_cost_sum[idx - 1]);
        }

        let mut previous_cost_sum = Vec::with_capacity(len);
        previous_cost_sum.push(previous_cost[len - 1]);
        for idx in (0..len - 1).rev() {
            previous_cost_sum.push(previous_cost[idx] + previous_cost_sum[len - idx - 2]);
        }
        previous_cost_sum = previous_cost_sum.into_iter().rev().collect();

        let index_by_symbol = ('a'..='z').into_iter()
            .enumerate()
            .map(|(idx, symbol)| (symbol, idx))
            .collect::<std::collections::HashMap<_, _>>();

        let from_one: Vec<usize> = s.chars().map(|symbol| index_by_symbol[&symbol]).collect();
        let to_other: Vec<usize> = t.chars().map(|symbol| index_by_symbol[&symbol]).collect();
        let mut result = 0;
        for idx in 0..from_one.len() {
            let from = from_one[idx];
            let to = to_other[idx];
            let cost = if from < to {
                let mut forward = next_cost[from];
                forward += next_cost_sum[to - 1] - next_cost_sum[from];
                let mut backward = previous_cost_sum[0] - previous_cost_sum[from + 1];
                if to < len - 1 {
                    backward += previous_cost_sum[to + 1];
                }
                forward.min(backward)
            } else if from > to {
                let mut backward = previous_cost[from];
                backward += previous_cost_sum[to + 1] - previous_cost_sum[from];
                let mut forward = next_cost[from];
                forward += next_cost_sum[len - 1] - next_cost_sum[from];
                if to > 0 {
                    forward += next_cost_sum[to - 1];
                }
                forward.min(backward)
            } else {
                0
            };
            result += cost;
        }
        return result;
    }
}
```