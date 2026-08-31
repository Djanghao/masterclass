# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4784597/](https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4784597/)

---


```
impl Solution {
    pub fn earliest_second_to_mark_indices(nums: Vec<i32>, change_indices: Vec<i32>) -> i32 {
        let nums = nums.iter().map(|&x| x as i64).collect::<Vec<_>>();
        let change_indices = change_indices.iter().map(|&x| x as i64).collect::<Vec<_>>();
        let _n = nums.len();
        let m = change_indices.len() as i64;
        let mut lo = 1_i64;
        let mut hi = m + 1;
        while lo < hi {
            let mid = lo + (hi - lo) / 2;
            let okval = Solution::ok(&nums, &change_indices, mid);
            if okval {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        if lo == m + 1 {
            -1
        } else {
            lo as _
        }
    }

    fn ok(nums: &[i64], change_indices: &[i64], ans: i64) -> bool {
        let n = nums.len();
        let m = change_indices.len() as i64;
        if ans == m + 1 {
            return true;
        }

        let mut seen = vec![false; n];
        let mut ps = vec![];
        for j in 0..ans {
            if !seen[(change_indices[j as usize] - 1) as usize] {
                seen[(change_indices[j as usize] - 1) as usize] = true;
                ps.push((j, (change_indices[j as usize] - 1) as usize));
            }
        }
        let mut k = ps.len() as i32 - 1;

        let mut remaining = 0;
        let mut pq = std::collections::BinaryHeap::new();
        for j in (0..ans).rev() {
            if k >= 0 && ps[k as usize].0 == j {
                if nums[ps[k as usize].1] > 0 {
                    pq.push((-nums[ps[k as usize].1], ps[k as usize].1));
                } else {
                    remaining += 1;
                }
                k -= 1;
            } else {
                remaining += 1;
            }
            while remaining < pq.len() {
                pq.pop();
                remaining += 1;
            }
        }

        let mut needops = n as i64;
        let mut cnt = nums.to_vec();
        while let Some((_negcnt, i)) = pq.pop() {
            cnt[i] = 0;
            needops += 1;
        }
        needops += cnt.iter().sum::<i64>();
        needops <= ans
    }
}

```