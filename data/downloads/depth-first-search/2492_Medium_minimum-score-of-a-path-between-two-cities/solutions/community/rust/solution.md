# Rust BFS

**Author:** faroukamr
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3327991/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3327991/)

---

# Code
```
use std::cmp::min;
use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn min_score(n: i32, roads: Vec<Vec<i32>>) -> i32 {
        let mut map: HashMap<i32, Vec<(i32,i32)>> = HashMap::new();
        //generating adj. list
        for road in roads{
            let n1 = road[0];
            let n2 = road[1];
            let cost = road[2];
            map.entry(n1).or_default().push((n2,cost));
            map.entry(n2).or_default().push((n1,cost));
        }
        //adding first node 1 to queue
        let mut queue = vec![map.get(&1).unwrap()];
        let mut visited: HashSet<i32> = HashSet::new();
        visited.insert(1);
        let mut min_cost = i32::MAX;
        
        //BFS
        while !queue.is_empty(){
            for elm in queue.remove(0) {
                for neighbor in map.get(&elm.0).unwrap() {
                    min_cost=min(min_cost,neighbor.1);
                    if !visited.contains(&neighbor.0){
                        visited.insert(neighbor.0);
                        queue.push(map.get(&neighbor.0).unwrap());
                    }
                }
            }
        }
        min_cost
    }
}
```