# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4200000/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4200000/)

---

```
impl Solution {
    pub fn min_groups_for_valid_assignment(nums: Vec<i32>) -> i32 {
        let mut freq = std::collections::HashMap::new();
        let mut mn = i32::MAX;
        let ans = nums.len() as i32;

        for n in nums {
            *freq.entry(n).or_insert(0) += 1;
        }

        for (_, &v) in freq.iter() {
            mn = mn.min(v);
        }

        for group_size in (1..=mn).rev() {
            let res = Self::is_feasible(&freq, group_size);
            if res > 0 {
                return res;
            }
        }
        ans
    }

    fn is_feasible(freq: &std::collections::HashMap<i32, i32>, group_size: i32) -> i32 {
        let mut total_groups = 0;
        let high_group_size = group_size + 1;
        for (_, &fq) in freq.iter() {
            let mut group_count = fq / high_group_size;
            let mut remainder = fq % high_group_size;

            if remainder > 0 && remainder < group_size {
                let required_item = group_size - remainder;
                if group_count < required_item {
                    return 0;
                }
                group_count = (group_count - required_item) + (remainder + high_group_size * required_item) / group_size;
                remainder = 0;
            }
            total_groups += group_count + if remainder > 0 { 1 } else { 0 };
        }
        total_groups
    }
}

```