# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/3003364/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/3003364/)

---

# Code
```
impl Solution {
    pub fn num_squareful_perms(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort();
        let mut ans = 0;

        fn pmt(nums: Vec<i32>, idx: usize, ans: &mut i32) {
            let mut nums = nums;
            if idx >= nums.len() {
                *ans += 1;
            }
            for i in idx..nums.len() {
                if i > idx && nums[i] == nums[idx] {
                    continue;
                }
                nums.swap(i, idx);
                if idx == 0 || (idx > 0 && is_square(nums[idx] + nums[idx - 1])) {
                    pmt(nums.clone(), idx + 1, ans);
                }
            }
        }

        fn is_square(v: i32) -> bool {
            let r = (v as f64).sqrt() as i32;
            r * r == v
        }

        pmt(nums, 0, &mut ans);
        ans
    }
}
```