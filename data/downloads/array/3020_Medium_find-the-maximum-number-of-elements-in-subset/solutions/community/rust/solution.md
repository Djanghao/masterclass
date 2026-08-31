# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4644276/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4644276/)

---


```
impl Solution {
    pub fn maximum_length(nums: Vec<i32>) -> i32 {
        let nums = nums.iter().map(|&x| x as i64).collect::<Vec<_>>();
        let mut c = std::collections::BTreeMap::new();
        for &n in nums.iter() {
            *c.entry(n).or_insert(0_i64) += 1;
        }
        let mut res = 1;
        for (&n, &cnt) in c.iter() {
            if n == 1 {
                res = res.max(cnt - (cnt % 2 == 0) as i64);
            } else if cnt > 1 {
                let mut n_res = 1;
                let mut n = n * n;
                while let Some(&cnt) = c.get(&n) {
                    n_res += 2;
                    if cnt == 1 {
                        break;
                    }
                    n *= n;
                }
                res = res.max(n_res);
            }
        }
        res as _
    }
}

```