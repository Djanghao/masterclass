# < 69 IQ solution

**Author:** Hiruto
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-radius-subarray-averages/solutions/3660732/](https://leetcode.com/problems/k-radius-subarray-averages/solutions/3660732/)

---

# Code
```
impl Solution {
    pub fn get_averages(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let k = k as usize;
        let len = 2 * k as u64 + 1;

        let mut result = vec![-1; nums.len()];
        if nums.len() < len as usize {
            return result;
        }

        let mut sum = nums[..len as usize].into_iter().map(|&num| num as u64).sum::<u64>();
        result[k] = (sum / len) as i32;

        for i in k + 1..nums.len() - k {
            sum += nums[i + k] as u64;
            sum -= nums[i - k - 1] as u64;
            result[i] = (sum / len) as i32;
        }

        result
    }
}
```