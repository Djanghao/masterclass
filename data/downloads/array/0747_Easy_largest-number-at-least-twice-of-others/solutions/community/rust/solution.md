# Rust Solution: 0 ms

**Author:** ajesh-mishra
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/2461895/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/2461895/)

---

```
struct Solution {}

impl Solution {
    pub fn dominant_index(nums: Vec<i32>) -> i32 {
        let mut sorted_nums = nums.clone();
        sorted_nums.sort_by(|a, b| b.cmp(&a));

        if sorted_nums[0] >= 2 * sorted_nums[1] {
            nums.iter().position(|&x| x == sorted_nums[0]).unwrap() as i32
        } else {
            -1
        }
    }
}

fn main() {
    let nums = vec![3, 6, 1, 0];
    println!("{}", Solution::dominant_index(nums));
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn ut_positive_case() {
        let nums = vec![3, 6, 1, 0];
        assert_eq!(Solution::dominant_index(nums), 1);
    }

    #[test]
    fn ut_negative_case() {
        let nums = vec![1, 2, 3, 4];
        assert_eq!(Solution::dominant_index(nums), -1);
    }
}
```