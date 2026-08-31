# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/1336944/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/1336944/)

---

```
impl Solution {
    pub fn min_subsequence(mut nums: Vec<i32>) -> Vec<i32> {
        let all_sum: i32 = nums.iter().sum();
        let mut cur_sum = 0;
        let mut result = Vec::with_capacity(nums.len());

        nums.sort_unstable_by_key(|&x| -x);

        for x in nums {
            cur_sum += x;
            result.push(x);
            if cur_sum > all_sum - cur_sum {
                break;
            }
        }
        result
    }
}
```