# Rust || 0ms || beats 100%

**Author:** user7454af
**Votes:** 2
**Link:** [https://leetcode.com/problems/sequential-digits/solutions/5314992/](https://leetcode.com/problems/sequential-digits/solutions/5314992/)

---

# Complexity
- Time complexity: $$O(logn)$$

- Space complexity: $$O(1)$$

# Code
```
impl Solution {
    pub fn sequential_digits(low: i32, high: i32) -> Vec<i32> {
        let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let least_length = low.to_string().len();
        let highest_length = high.to_string().len();
        let idx_to_num = |start: usize, end: usize| -> i32 {
            let mut x = digits[start];
            for j in start+1..end {
                x = x * 10 + digits[j];
            }
            x
        };
        let mut ans = vec![];
        for len in least_length..=highest_length {
            for start in 0..(9-len+1) {
                let num = idx_to_num(start, start + len);
                if num < low {
                    continue;
                }
                if num > high {
                    break;
                }
                ans.push(num);
            }
        }
        ans
    }
}
```