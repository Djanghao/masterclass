# Rust 6ms 🔥 6MB ☄️ Solution 🦀

**Author:** rony0000013
**Votes:** 4
**Link:** [https://leetcode.com/problems/bus-routes/solutions/4278097/](https://leetcode.com/problems/bus-routes/solutions/4278097/)

---

# Complexity
- Time complexity: $$O(n*m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::{HashSet};
impl Solution {
    pub fn num_buses_to_destination(routes: Vec<Vec<i32>>, source: i32, target: i32) -> i32 {
        let mut dist = vec![501 as i16; 1000001];
        dist[source as usize] = 0;
        let mut visited = HashSet::new();
        let mut count = 0;
        
        while visited.len() < routes.len() && count < routes.len() {
            for bus in 0..routes.len() {
                if visited.contains(&bus) {continue;}
                let mut mindist = 501 as i16;
                for i in routes[bus].iter() {
                    mindist = std::cmp::min(mindist, dist[*i as usize] + 1);
                }
                for i in routes[bus].iter() {
                    dist[*i as usize] = std::cmp::min(dist[*i as usize], mindist);
                }
                if mindist < 501 {visited.insert(bus);}
            }
            count += 1;
        }
        if dist[target as usize] == 501 {-1} else {dist[target as usize] as i32}
    }
}
```