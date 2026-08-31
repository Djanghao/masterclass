# Rust

**Author:** chusonwang
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5876022/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5876022/)

---


# Code
```rust []
impl Solution {
    pub fn max_good_number(nums: Vec<i32>) -> i32 {
        let (a, b, c) = (nums[0], nums[1], nums[2]);
        let permutations = vec![
            vec![a, b, c],
            vec![a, c, b],
            vec![b, a, c],
            vec![b, c, a],
            vec![c, a, b],
            vec![c, b, a],
        ];
        permutations
            .into_iter()
            .map(|v| {
                let binary_concat = format!("{:b}{:b}{:b}", v[0], v[1], v[2]);
                i32::from_str_radix(&binary_concat, 2).unwrap()
            })
            .max()
            .unwrap()
    }
}
```