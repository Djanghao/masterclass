# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/2886312/](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/2886312/)

---

# Code
```
impl Solution {
    pub fn max_sum_of_three_subarrays(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let n = nums.len();
        let k = k as usize;
        let mut pref = vec![0; n];
        let mut ipref = vec![0; n];
        let mut suff = vec![0; n];
        let mut isuff = vec![0; n];
        {
            let mut sum = 0;
            for i in 0..k {
                sum += nums[i];
            }
            pref[k - 1] = sum;
            ipref[k - 1] = 0;
            for i in k..n {
                sum += nums[i] - nums[i - k];
                ipref[i] = i - k + 1;
                pref[i] = sum;
                if pref[i - 1] >= pref[i] {
                    ipref[i] = ipref[i - 1];
                    pref[i] = pref[i - 1];
                }
            }
        }
        {
            let mut sum = 0;
            for i in (n - k..n).rev() {
                sum += nums[i];
            }
            suff[n - k] = sum;
            isuff[n - k] = n - k;
            for i in (0..n - k).rev() {
                sum += nums[i] - nums[i + k];
                suff[i] = sum;
                isuff[i] = i;
                if suff[i + 1] > suff[i] {
                    isuff[i] = isuff[i + 1];
                    suff[i] = suff[i + 1];
                }
            }
        }
        let mut sum = 0;
        for i in 0..k {
            sum += nums[i];
        }
        let mut maks = 0;
        let mut ans = vec![];
        for i in k..n {
            sum += nums[i] - nums[i - k];
            if i - k >= k - 1 && i + 1 < n {
                let cur = pref[i - k] + sum + suff[i + 1];
                if cur > maks {
                    maks = cur;
                    ans = vec![ipref[i - k] as i32, (i - k + 1) as i32, isuff[i + 1] as i32];
                }
            }
        }
        ans
    }
}
```