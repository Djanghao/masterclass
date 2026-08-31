# Python / Rust -  Hashmap Solutions Time O(N) Space O(N)

**Author:** nuclearoreo
**Votes:** 4
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/614893/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/614893/)

---

- **Python**

```python
class Solution:
    def firstUniqChar(self, s: str) -> int:
        count = {}
        
        for l in s:
            if l in count: count[l] += 1
            else: count[l] = 1
                    
        for i, l in enumerate(s):
            if count[l] == 1:
                return i
        
        return -1
```

- **Rust**

```rust
use std::collections::HashMap;

impl Solution {
    pub fn first_uniq_char(s: String) -> i32 {
        let mut count: HashMap<char, i32> = HashMap::new();
        
        for l in s.chars() {
            if count.contains_key(&l) {
                let val = count.get(&l).unwrap();
                count.insert(l, val + 1);
            } else {
                count.insert(l, 1);
            }
        }
        
        for (i, l) in s.chars().enumerate() {
            let val = *count.get(&l).unwrap();
            if val == 1 {
                return i as i32;
            }
        }
        
        return -1;
    }
}
```