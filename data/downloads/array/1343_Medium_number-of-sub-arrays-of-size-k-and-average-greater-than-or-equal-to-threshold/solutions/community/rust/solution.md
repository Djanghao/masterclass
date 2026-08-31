# ✅ Easy Rust Solution

**Author:** erikrios
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5327470/](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/solutions/5327470/)

---

```
impl Solution {
    pub fn num_of_subarrays(arr: Vec<i32>, k: i32, threshold: i32) -> i32 {
        let mut start_window = 0;
        let mut current_sum = 0;
        let mut counter = 0;

        for (end_window, num) in arr.iter().enumerate() {
            current_sum += num;
            if end_window >= k as usize - 1 {
                let average = current_sum / k;
                if average >= threshold {
                    counter += 1;
                }
                current_sum -= arr[start_window];
                start_window += 1;
            }
        }

        counter
    }
}
```
