# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/1444885/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/1444885/)

---

```
impl Solution {
    pub fn find_middle_index(nums: Vec<i32>) -> i32 {
        let total_sum = nums.iter().sum::<i32>();
        let mut prev_sum = 0;

        for (ind, &num) in nums.iter().enumerate() {
            match total_sum - prev_sum - num == prev_sum {
                true => return ind as i32,
                false => prev_sum += num,
            }
        }
        -1
    }
}
```