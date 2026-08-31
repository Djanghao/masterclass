# [rust] super concise O(N)

**Author:** dolpm
**Votes:** 5
**Link:** [https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2869536/](https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2869536/)

---

```
use std::collections::HashMap;
impl Solution {
    pub fn close_strings(word1: String, word2: String) -> bool {
        // create mappings from characters to their
        // frequencies in word1 and word2
        let (mut map1, mut map2) = ([0; 26], [0; 26]);
        for c in word1.chars() { map1[c as usize - 0x61] += 1; };
        for c in word2.chars() { map2[c as usize - 0x61] += 1; };
        
        // if there is character that one word contains
        // but the other doesn't, then they can't be 'close'
        for i in 0..26 {
            if (map1[i] == 0 && map2[i] != 0) || (map1[i] != 0 && map2[i] == 0) {
                return false;
            }
        }
        
        // sort the maps such that we can make sure the amount of characters
        // with a given frequency match
		//
		// since maps are of size 26, this would be 2*O(26log26) === O(1)
        map1.sort();
        map2.sort();
        
        map1 == map2
    }
}
```