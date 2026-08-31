# Rust solution 4ms

**Author:** 575770893
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/1050356/](https://leetcode.com/problems/minimum-incompatibility/solutions/1050356/)

---

```
    pub fn minimum_incompatibility(nums: Vec<i32>, k: i32) -> i32 {
        fn dfs(ind: usize, nums: &Vec<i32>, buckets: &mut Vec<VecDeque<i32>>, k: usize, bucket_len: usize, total: i32, res: &mut i32) {
            if ind == nums.len() {
                *res = total;
                return;
            }
            
            for i in 0..buckets.len().min(k + 1) {
                if buckets[i].len() < bucket_len &&
                    (buckets[i].is_empty() || *buckets[i].back().unwrap() < nums[ind])
                 {
                    let cur = nums[ind] - *buckets[i].back().unwrap_or(&nums[ind]) + total;
                    if cur < *res {
                        buckets[i].push_back(nums[ind]);
                        dfs(ind + 1, nums, buckets, k.max(i + 1), bucket_len, cur, res);
                        buckets[i].pop_back();
                    }
                }
            }
        }

        let mut nums = nums;
        nums.sort();
        let k = k as usize;
        let mut buckets = vec![VecDeque::with_capacity(nums.len() / k as usize); k as usize];
        let mut res = std::i32::MAX;
        dfs(0, &nums, &mut buckets, 0, nums.len() / k as usize, 0, &mut res);
        if res == std::i32::MAX {
            return -1;
        }
        res
    }
```