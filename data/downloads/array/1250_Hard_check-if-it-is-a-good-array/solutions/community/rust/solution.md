# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3068769/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3068769/)

---

# Code
```
impl Solution {
    pub fn is_good_array(nums: Vec<i32>) -> bool {
        let mut res = nums[0];
        for i in nums.iter() {
            res = Self::gcd(res, *i);
        }
        res == 1
    }

    fn gcd(a: i32, b: i32) -> i32 {
        if b == 0 {
            a
        } else {
            Self::gcd(b, a % b)
        }
    }
}
```