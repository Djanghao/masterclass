# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5510921/](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal/solutions/5510921/)

---


```
impl Solution {
    pub fn min_changes(nums: Vec<i32>, k: i32) -> i32 {
        let mut freq = vec![0; (k + 1) as usize];
        let mut v = Vec::new();
        let mut n = nums.len();
        for i in 0..n / 2 {
            let dif = (nums[i] - nums[n - i - 1]).unsigned_abs() as usize;
            freq[dif] += 1;

            let a = nums[i];
            let b = nums[n - i - 1];
            let threshold = std::cmp::max(a.max(b), k - a.min(b));
            v.push(threshold);
        }

        v.sort_unstable();

        let mut ans = n / 2;
        n /= 2;
        for (i, &freq_i) in freq.iter().enumerate() {
            let rest = n - freq_i;
            let i = i as i32;
            let greater = v.partition_point(|&x| x < i);
            ans = std::cmp::min(ans, rest + greater);
        }
        ans as _
    }
}

```