# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/3220626/](https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/solutions/3220626/)

---

# Code
```
impl Solution {
    pub fn max_happy_groups(batch_size: i32, groups: Vec<i32>) -> i32 {
        use std::collections::HashMap;

        fn dfs(cnt: &mut Vec<i32>, left: i32, dp: &mut HashMap<Vec<i32>, i32>) -> i32 {
            if let Some(&res) = dp.get(cnt) {
                return res;
            }
            let mut res = 0;
            let bz = cnt.len() as i32;
            for j in 1..bz {
                cnt[j as usize] -= 1;
                if cnt[j as usize] >= 0 {
                    res = res.max((left == 0) as i32 + dfs(cnt, (bz + left - j) % bz, dp));
                }
                cnt[j as usize] += 1;
            }
            dp.insert(cnt.clone(), res);
            res
        }

        let mut dp = HashMap::new();
        let mut cnt = vec![0; batch_size as usize];
        let mut res = 0;
        for group in groups {
            if group % batch_size == 0 {
                res += 1;
            } else if cnt[(batch_size - group % batch_size) as usize] > 0 {
                cnt[(batch_size - group % batch_size) as usize] -= 1;
                res += 1;
            } else {
                cnt[(group % batch_size) as usize] += 1;
            }
        }
        res + dfs(&mut cnt, 0, &mut dp)
    }
}
```