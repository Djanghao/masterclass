# Rust Solution

**Author:** abhineetraj1
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5862900/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5862900/)

---

# Complexity
- Time complexity: O(k.d) , where kk is the number of elements in nums and dd is the average number of digits in the numbers.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    fn sum_of_digits(mut num: i32) -> i32 {
        let mut sum = 0;
        while num > 0 {
            sum += num % 10;
            num /= 10;
        }
        sum
    }
    pub fn min_element(nums: Vec<i32>) -> i32 {
        nums.iter()
            .map(|&num| Self::sum_of_digits(num))
            .min()
            .unwrap_or(0)
    }
}

```