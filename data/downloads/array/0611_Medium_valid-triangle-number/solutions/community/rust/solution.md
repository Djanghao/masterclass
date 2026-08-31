# Rust translated (28ms)

**Author:** sugyan
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-triangle-number/solutions/1339728/](https://leetcode.com/problems/valid-triangle-number/solutions/1339728/)

---

```rust
impl Solution {
    pub fn triangle_number(nums: Vec<i32>) -> i32 {
        let mut nums = nums.iter().filter(|&n| *n > 0).collect::<Vec<_>>();
        if nums.len() < 3 {
            return 0;
        }
        nums.sort_unstable();
        let mut answer = 0;
        for i in 0..nums.len() - 2 {
            let mut k = i + 2;
            for j in i + 1..nums.len() - 1 {
                while k < nums.len() && nums[i] + nums[j] > *nums[k] {
                    k += 1;
                }
                answer += k - j - 1;
            }
        }
        answer as i32
    }
}
```