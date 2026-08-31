# Rust | Simple HashMap solution

**Author:** tomijaga
**Votes:** 1
**Link:** [https://leetcode.com/problems/replace-elements-in-an-array/solutions/2112316/](https://leetcode.com/problems/replace-elements-in-an-array/solutions/2112316/)

---

```rust
use std::collections::HashMap;

impl Solution {
    pub fn array_change(mut nums: Vec<i32>, operations: Vec<Vec<i32>>) -> Vec<i32> {
        let mut map = HashMap::new();
        
        for i in 0..nums.len(){
            map.insert(nums[i], i);
        }
        
        for v in operations{
            let old = v[0];
            let new = v[1];
            
            let i = map.remove(&old).unwrap();
            map.insert(new, i);
            nums[i] = new;
        }
        
        nums
    }
}
```