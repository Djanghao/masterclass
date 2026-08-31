# rust with 59ms

**Author:** Syuq
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5090253/](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5090253/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn subarrays_with_distinct_up_to_k(nums: &[i32], k: usize) -> i64 {
        let mut cnt = vec![0; 100001];
        let mut res = 0;
        let mut j = 0;
        let sz = nums.len();
        let mut distinct_count = 0;

        for i in 0..sz {
            let num = nums[i] as usize;
            cnt[num] += 1;
            if cnt[num] == 1 {
                distinct_count += 1;
            }
            while j < sz && distinct_count > k {
                let j_num = nums[j] as usize;
                cnt[j_num] -= 1;
                if cnt[j_num] == 0 {
                    distinct_count -= 1;
                }
                j += 1;
            }
            res += (i - j + 1) as i64;
        }

        res
    }

    pub fn median_of_uniqueness_array(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let sz = n * (n + 1) / 2;
        let mut l = 1;
        let mut r = n as i32;
        let median = (sz + 1) / 2;

        while l < r {
            let m = (l + r) / 2;
            if Self::subarrays_with_distinct_up_to_k(&nums, m as usize) < median as i64 {
                l = m + 1;
            } else {
                r = m;
            }
        }

        l
    }
}
```