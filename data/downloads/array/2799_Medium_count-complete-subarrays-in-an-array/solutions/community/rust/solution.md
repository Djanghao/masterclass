# Rust 0ms 🔥 2.11Mb ☄️ One Liner Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/5496737/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/5496737/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::{HashMap, HashSet};
impl Solution {
    pub fn count_complete_subarrays(nums: Vec<i32>) -> i32 {
        nums.iter()
        .enumerate()
        .fold((0, 0, HashMap::new(), nums.iter().collect::<HashSet<_>>().len()),
        |(mut i, mut ans, mut m, n), (j, &num)| {
            m.entry(num).and_modify(|x| *x+=1).or_insert(1);
            while m.len() == n {
                ans += nums.len() - j;
                m.entry(nums[i]).and_modify(|x| *x-=1);
                if Some(&0) == m.get(&nums[i]) {
                    m.remove(&nums[i]);
                }
                i += 1;
            }
            (i, ans, m, n)
        }).1 as i32
    }
}
```