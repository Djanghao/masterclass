# Rust Ordered Map

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearranging-fruits/solutions/3146516/](https://leetcode.com/problems/rearranging-fruits/solutions/3146516/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) Removing common entries from both lists.
2) Loading the remaining entries into corresponding ordered map lists.
3) Selecting the smallest entries from the map list, marching them with the biggest entries from the other list. If the maximum matching number is 1, returning -1.
4) Removing the matching entries from both list.
5) Counting the cost of the swap. Assumw 2k is the number of the matching, the cost is either k * current smallest value, or 2 * k * overall smallest value.   
   
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N * Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::BTreeMap;

impl Solution {
    pub fn min_cost(basket1: Vec<i32>, basket2: Vec<i32>) -> i64 {
        let mn = i32::min(*basket1.iter().min().unwrap(), *basket2.iter().min().unwrap()) as i64;
        let (mut mp1, mut mp2) = (BTreeMap::<i32, i32>::new(), BTreeMap::<i32, i32>::new());

        for a in basket1 { *mp1.entry(a).or_insert(0) += 1; }
        for a in basket2 {
            if mp1.contains_key(&a) == false {
                *mp2.entry(a).or_insert(0) += 1;
                continue
            }
            if *mp1.get(&a).unwrap() == 1 { mp1.remove(&a); }
            else                          { *mp1.entry(a).or_insert(0) -= 1; }
        }

        let mut ret = 0;
        while mp1.is_empty() == false {
            let (a, b) = (*mp1.keys().next().unwrap(), *mp2.keys().next().unwrap());
            let (c, d) = (*mp1.keys().next_back().unwrap(), *mp2.keys().next_back().unwrap());
            if a < b {
                let k = i32::min(*mp1.get(&a).unwrap() / 2, *mp2.get(&d).unwrap() / 2);
                if k == 0 { return -1 }
            
                if *mp1.get(&a).unwrap() == 2 * k { mp1.remove(&a); }
                else                              { *mp1.entry(a).or_insert(0) -= 2 * k; }

                if *mp2.get(&d).unwrap() == 2 * k { mp2.remove(&d); }
                else                              { *mp2.entry(d).or_insert(0) -= 2 * k; }

                ret += i64::min((a as i64) * k as i64, mn * 2 * k as i64);
            }  else {
                let k = i32::min(*mp2.get(&b).unwrap() / 2, *mp1.get(&c).unwrap() / 2);
                if k == 0 { return -1 }

                if *mp2.get(&b).unwrap() == 2 * k { mp2.remove(&b); }
                else                              { *mp2.entry(b).or_insert(0) -= 2 * k; }

                if *mp1.get(&c).unwrap() == 2 * k { mp1.remove(&c); }
                else            { *mp1.entry(c).or_insert(0) -= 2 * k; }

                ret += i64::min((b as i64) * k as i64, mn * 2 * k as i64);
            }
        }

        ret
    }
}
```