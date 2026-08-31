# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4762506/](https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4762506/)

---

```
impl Solution {
    pub fn max_selected_elements(nums: Vec<i32>) -> i32 {
        let mut dp = std::collections::HashMap::new();
        let mut nums = nums;
        nums.sort();
        let mut res = 0;
        for a in nums {
            let dp_a = *dp.get(&(a)).unwrap_or(&0);
            *dp.entry(a + 1).or_insert(0) = dp_a + 1;
            res = res.max(dp_a + 1);
            let dp_a_1 = *dp.get(&(a - 1)).unwrap_or(&0);
            *dp.entry(a).or_insert(0) = dp_a_1 + 1;
            res = res.max(dp_a_1 + 1);
        }
        res
    }
}
```