# Rust Solution Binary Search Beats 💯%

**Author:** sunjesse
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/5933373/](https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/5933373/)

---

# Code
```rust []
impl Solution {
    fn valid(mut m: i32, x: i32, y: i32, nums: &Vec<i32>) -> bool {
        let mut dxy: i32 = x-y;
        let ym: i32 = m*y;
        let mut nt: i32 = 0;
        let mut tmp = 0;
        for a in nums {
            tmp = a.clone();
            tmp -= ym;
            if tmp > 0 && m > 0 {
                nt = (tmp + dxy-1)/dxy;
                m -= nt;
                tmp -= nt*dxy;
            }
            if tmp > 0 || m < 0 { return false; }
        }
        true
    }
    pub fn min_operations(nums: Vec<i32>, x: i32, y: i32) -> i32 {
        if nums.len() == 1 { return (nums[0]+x-1)/x; }
        let dxy: i32 = x-y;
        let mut lo: i32 = 0;
        let mut hi: i32 = 1000000000 / y + 1;
        let mut m: i32 = 0;
        while lo <= hi {
            m = (lo+hi)/2;
            if Self::valid(m, x, y, &nums) {
                hi = m - 1;
            }
            else {
                lo = m + 1;
            }
        }
        lo

    }
}
```