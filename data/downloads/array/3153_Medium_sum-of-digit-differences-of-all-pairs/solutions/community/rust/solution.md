# Just a runnable solution

**Author:** ssrlive
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5177473/](https://leetcode.com/problems/sum-of-digit-differences-of-all-pairs/solutions/5177473/)

---


```
impl Solution {
    pub fn sum_digit_differences(nums: Vec<i32>) -> i64 {
        let mut ans = 0;
        let mut freq = vec![vec![0; 10]; 10];
        for &n in &nums {
            let mut n = n;
            for freq_i in freq.iter_mut().take(10) {
                freq_i[n as usize % 10] += 1;
                n /= 10;
                if n == 0 {
                    break;
                }
            }
        }
        for i in 0..freq.len() {
            for j in 0..freq[0].len() {
                ans += freq[i][j] as i64 * (nums.len() as i64 - freq[i][j] as i64);
            }
        }
        ans / 2
    }
}

```