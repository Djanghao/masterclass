# ✅ Rust Solution

**Author:** erikrios
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/5387455/](https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/solutions/5387455/)

---

```
use std::{cmp::min, collections::HashMap};

impl Solution {
    pub fn minimum_card_pickup(cards: Vec<i32>) -> i32 {
        let mut hash_map = HashMap::new();
        let mut minimum = i32::MAX;

        for i in 0..cards.len() {
            let card = cards[i];
            if hash_map.contains_key(&card) {
                minimum = min(minimum, (i - *hash_map.get(&card).unwrap()) as i32 + 1);
            }
            hash_map.insert(card, i);
        }

        if minimum == i32::MAX {
            return -1;
        }

        minimum
    }
}
```