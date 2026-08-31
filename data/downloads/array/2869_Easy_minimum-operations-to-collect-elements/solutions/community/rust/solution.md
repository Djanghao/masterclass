# check with bit vector

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5403571/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/5403571/)

---

```
impl Solution {
    pub fn min_operations(mut nums: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut seen = vec![false; k];
        let mut total = 0;
        while seen.iter().any(|&x|!x) {
            if let Some(x) = nums.pop() {
                total += 1;
                if x as usize <= k {
                    seen[(x-1) as usize] = true;
                }
            }
        }
        total 
    }
}
```