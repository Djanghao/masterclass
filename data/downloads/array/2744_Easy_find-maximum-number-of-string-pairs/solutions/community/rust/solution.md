# Rust/Python Linear time/space with explanation

**Author:** SalvadorDali
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3816737/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3816737/)

---

# Intuition
Store the counts of all strings in the hashmap. Now iterate over all our strings and find their reversed strings. Check if it exists in a hashmap. 

Now we have two possible options:
 - reverse string is equal to our original string. To be able to find a reverse we need to have at least two values in a counter `map[rev] >= 2`. If this is the case, increment the results and decrease counter by 2
 - otherwise to be able to find a reverse, you need to have at least one value in a counter. In this case also increment the result and decrease counter by 1.

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(n)$

# Code

```Rust []
use std::collections::HashMap;

impl Solution {
  pub fn maximum_number_of_string_pairs(arr: Vec<String>) -> i32 {
    let mut map: HashMap<String, i32> = HashMap::new();
    for v in &arr {
      *map.entry(v.to_string()).or_default() += 1;
    }

    let mut res = 0;
    for v in arr {
      let v_rev: String = v.chars().rev().collect();
      if !map.contains_key(&v_rev) {
        continue;
      }
      if v == v_rev {
        if *map.get(&v_rev).unwrap() > 1 {
          res += 1;
          *map.entry(v_rev.to_string()).or_default() -= 2;
        }
      } else {
        if *map.get(&v_rev).unwrap() > 0 {
          res += 1;
          *map.entry(v_rev.to_string()).or_default() -= 1;
        }
      }
    }

    return res / 2;
  }
}
```
```python []
from collections import Counter

class Solution:
  def maximumNumberOfStringPairs(self, words: List[str]) -> int:
    cnt, res = Counter(words), 0
    for v in words:
      v_rev = v[::-1]
      if v == v_rev:
        if cnt[v] >= 2:
          res += 1
          cnt[v] -= 2
      else:
        if cnt[v_rev] >= 1:
          res += 1;
          cnt[v_rev] -= 1
    
    return res // 2
```
