# [Rust] DFS with Memorization (2 ms)

**Author:** bryceat
**Votes:** 0
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/3294694/](https://leetcode.com/problems/shopping-offers/solutions/3294694/)

---

# Intuition
We take a top down approach.  We use memorization because different combinations of specials can lead to the same set of needs.  Any given set of needs has a best price.

# Code
```
use std::collections::HashMap;
impl Solution {
    pub fn shopping_offers(price: Vec<i32>, special: Vec<Vec<i32>>, needs: Vec<i32>) -> i32 {
        fn best(needs: Vec<i32>, special: &[Vec<i32>], price: &[i32], mem: &mut HashMap<Vec<i32>,i32>) -> i32 {
            if let Some(val) = mem.get(&needs) {return *val}
            let mut pos = Vec::new();
            pos.push(needs.iter().zip(price.iter()).map(|(n,p)| n*p).sum::<i32>());
            for spec in special {
                if needs.iter().zip(spec.iter()).all(|(n,s)| s <= n) {
                    let mut cur = needs.clone();
                    for (i,(n,s)) in needs.iter().zip(spec.iter()).enumerate() {
                        cur[i] -= s;
                    }
                    pos.push(spec.last().unwrap() + best(cur, special, price, mem));
                }
            }
            let val = pos.into_iter().min().unwrap();
            mem.insert(needs,val);
            val
        }
        best(needs, &special, &price, &mut HashMap::new())
    }
}
```