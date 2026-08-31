# ✅ Rust Solution using Sliding Window and Binary Search

**Author:** erikrios
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-subarray-beauty/solutions/5322505/](https://leetcode.com/problems/sliding-subarray-beauty/solutions/5322505/)

---

```
impl Solution {
    pub fn get_subarray_beauty(nums: Vec<i32>, k: i32, x: i32) -> Vec<i32> {
        let n = nums.len();
        let mut start_window = 0;
        let mut results = Vec::with_capacity(n - k as usize + 1);
        let mut subs = Vec::with_capacity(k as usize);

        for end_window in 0..n {
            let num = nums[end_window];
            let pos = subs.binary_search(&num).unwrap_or_else(|e| e);
            subs.insert(pos, num);

            if end_window >= k as usize - 1 {
                let mut smallest_xth = subs[(x - 1) as usize];
                if smallest_xth > 0 {
                    smallest_xth = 0
                }
                results.push(smallest_xth);
                let num = nums[start_window];
                let pos = subs.binary_search(&num).unwrap_or_else(|e| e);
                subs.remove(pos);
                start_window += 1;
            }
        }

        results
    }
}
```