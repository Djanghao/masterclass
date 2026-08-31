# Rust Solution

**Author:** rchaser53
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/2634268/](https://leetcode.com/problems/distinct-numbers-in-each-subarray/solutions/2634268/)

---

```
impl Solution {
    pub fn distinct_numbers(nums: Vec<i32>, k: i32) -> Vec<i32> {
        let mut memo = vec![0;10usize.pow(5)+10];
        let mut count = 0;
        let k = k as usize;
        for i in 0..k {
            let v = memo[nums[i] as usize];
            if v == 0 {
                count += 1;
            }
            memo[nums[i] as usize] += 1;
        }

        let mut result = vec![0;nums.len()-k+1];
        result[0] = count;
        for i in k..nums.len() {
            let li = i - k;
            let v1 = nums[li] as usize;
            if memo[v1] == 1 {
                count -= 1;
            }
            memo[v1] -= 1;

            let v2 = nums[i] as usize;
            if memo[v2] == 0 {
                count += 1;
            }
            memo[v2] += 1;
            result[i-k+1] = count;
        }
        result
    }
}
```