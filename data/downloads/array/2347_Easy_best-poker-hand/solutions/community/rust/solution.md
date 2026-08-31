# Rust Solution

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/2322882/](https://leetcode.com/problems/best-poker-hand/solutions/2322882/)

---

~~~
use std::collections::HashMap;

impl Solution {
    pub fn best_hand(ranks: Vec<i32>, suits: Vec<char>) -> String {
        let mut suits = suits;
        let mut ret = String::new();
        
        suits.sort();
        if suits[0] == suits[4] {
            ret += "Flush";
            return ret
        }
        
        let mut mp: HashMap<i32, i32> = HashMap::new();
        for a in ranks {
            *mp.entry(a).or_default() += 1;
        }
        
        let mut mx = 1;
        for (a, cnt) in mp {
            mx = mx.max(cnt);
        }
        
        if mx >= 3 { ret += "Three of a Kind"; }
        else if mx == 2 { ret += "Pair"; }
        else { ret += "High Card"; }
        
        ret
    }
}
~~~