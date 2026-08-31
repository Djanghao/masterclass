# Rust solution

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/4890220/](https://leetcode.com/problems/greatest-sum-divisible-by-three/solutions/4890220/)

---

# Intuition
If the total sum has remainder 1 you can reduce it either with the smallest element of remainder 1 or 2 smallest elements of remainder 2. Otherwise, if the total sum has remainder 2 you can reduce it either with the smallest element of remainder 2 or 2 smallest elements of remainder 1.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
use std::collections::BinaryHeap;
impl Solution {
    pub fn max_sum_div_three(nums: Vec<i32>) -> i32 {
        let d = -2i32.pow(13);
        let (sum, mut rem1, mut rem2) = nums
            .into_iter()
            .fold((0, BinaryHeap::new(), BinaryHeap::new()), |(sum, mut rem1, mut rem2), x| (
                sum + x,
                {
                    if x % 3 == 1 {rem1.push(-x);}
                    rem1
                },
                {
                    if x % 3 == 2 {rem2.push(-x);}
                    rem2
                }
            ));
        match sum % 3 {
            0 => sum,
            1 => 0.max(sum + (rem1.pop().unwrap_or(d)).max(rem2.pop().unwrap_or(d) + rem2.pop().unwrap_or(d))),
            2 => 0.max(sum + (rem2.pop().unwrap_or(d)).max(rem1.pop().unwrap_or(d) + rem1.pop().unwrap_or(d))),
            Other => unreachable!()
        }
    }
}
```