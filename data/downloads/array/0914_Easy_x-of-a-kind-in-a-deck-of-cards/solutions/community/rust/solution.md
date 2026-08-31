# Python / Rust - GCD Solution

**Author:** nuclearoreo
**Votes:** 2
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/700989/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/700989/)

---

- **Python**
```python
from fractions import gcd
from collections import Counter

class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        count = Counter(deck).values()
        return reduce(gcd, count) >= 2
```

- **Rust**
```rust
use std::collections::HashMap;

impl Solution {
    pub fn has_groups_size_x(deck: Vec<i32>) -> bool {
        let mut count: HashMap<i32, i32> = HashMap::new();
        let mut values: Vec<i32> = vec![];
        
        for card in deck.iter() {
            if count.contains_key(&card) {
                let val =  count.get(&card).unwrap() + 1;
                count.insert(*card, val);
            } else {
                count.insert(*card, 1);
            }
        }
        
        for val in count.values() {
            values.push(*val);
        }
        
        let mut res = values[0];
        
        for i in 1..values.len() {
            res = Solution::gcd(res, values[i]);
        }
        
        return res >= 2;
    }
    
    pub fn gcd(x: i32, y: i32) -> i32 {
        if x == 0 { 
            return y 
        } else { 
            return Solution::gcd(y % x, x) 
        }
    }
}
```