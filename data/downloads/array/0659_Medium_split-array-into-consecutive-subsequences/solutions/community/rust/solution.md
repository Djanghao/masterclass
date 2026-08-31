# Rust HashMap

**Author:** xiaoping3418
**Votes:** 3
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2446843/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2446843/)

---

~~~
use std::collections::HashMap;

impl Solution {
    pub fn is_possible(nums: Vec<i32>) -> bool {
        let mut mp = HashMap::<i32, i32>::new();
        for a in &nums { 
            *mp.entry(*a).or_default() += 1; 
        }
        
        for a in nums {
            let mut cnt = if let Some(count) = mp.get(&a) { *count } else { 0 };
            if cnt == 0 { continue; }
            
            let mut count = 0;
            let mut n = a;
            while let Some(m) = mp.get(&n) {
                if *m < cnt { break }
                cnt = *m;
                *mp.entry(n).or_default() -= 1;
                count += 1;
                n += 1;
            }
            if count < 3 { return false }
        }
        
        true
    }
}
~~~