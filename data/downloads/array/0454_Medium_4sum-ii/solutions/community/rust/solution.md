# Rust solution O(n^2)

**Author:** CODPUD
**Votes:** 1
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/1158987/](https://leetcode.com/problems/4sum-ii/solutions/1158987/)

---

```
use std::collections::HashMap;


impl Solution {
    pub fn four_sum_count(nums1: Vec<i32>, nums2: Vec<i32>, nums3: Vec<i32>, nums4: Vec<i32>) -> i32 {
        let mut sums: HashMap<i32,i32> = HashMap::new();
        let mut count = 0;
        
        for a in nums1.iter(){
            for b in nums2.iter(){
                let sum = a + b;
                if sums.contains_key(&sum) {
                    sums.insert(sum, sums.get(&sum).unwrap() + 1);
                }else{
                    sums.insert(sum, 1);
                }
            }
        }
        
        for c in nums3.iter(){
            for d in nums4.iter(){
                let sum = -(c + d);
                count += sums.get(&sum).cloned().unwrap_or(0);
            }
        }
        
        count
    }
}
```