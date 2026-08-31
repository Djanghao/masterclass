# rust sort + two pointers

**Author:** svolkovichs
**Votes:** 1
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/2277764/](https://leetcode.com/problems/two-sum-less-than-k/solutions/2277764/)

---

```
use std::cmp;

impl Solution {
    pub fn two_sum_less_than_k(nums: Vec<i32>, k: i32) -> i32 {
        let len = nums.len();
        let mut cloned = nums.clone();
        cloned.sort();
        
        let mut left = 0;
        let mut right = len - 1;
        let mut result = -1;

        while(left < right) {
            let curr = cloned[left] + cloned[right] ;
            
            if curr < k {
                result = cmp::max(result, curr);
            }
            
            if(curr >= k) {
                right-=1;
            } else {
                left+=1;
            }
        }
        
        result
    }
}
```