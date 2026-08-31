# just runnable solution

**Author:** Seasawher
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3290649/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3290649/)

---

# Code
```
impl Solution {
    pub fn max_score(mut nums: Vec<i32>) -> i32 {
        nums.sort_by(|a, b| b.cmp(a));
        let mut answer = 0;
        let mut prefix_sum: i64 = 0;
        for number in nums.iter() {
            prefix_sum += *number as i64;
            if prefix_sum > 0 {
                answer += 1;
            } else {
                break;
            }
        }
        return answer;
    }
}
```