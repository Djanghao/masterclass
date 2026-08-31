# rust dp

**Author:** simplices
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1762899/](https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1762899/)

---

```
use std::collections::{HashSet, HashMap};
use std::cmp::min;

impl Solution {
    pub fn most_similar(nn: i32, roads: Vec<Vec<i32>>, names: Vec<String>, target_path: Vec<String>) -> Vec<i32> {
        
        let mut edges : Vec<HashSet<i32>> = vec![HashSet::new(); nn as _];
        for road in roads.iter(){
            let (i,j) = (road[0], road[1]);
            edges[i as usize].insert(j);
            edges[j as usize].insert(i);
        }
        
        let n = target_path.len();
        
        //store dp values
        let mut cache : HashMap<(i32,i32), i32> = HashMap::new();
        
        //dp boundary condition
        for j in (0..nn) {
            if &target_path[n -1] == &names[j as usize] {
                cache.insert((j, n as i32 - 1), 0);
            }else{
                cache.insert((j, n as i32 - 1), 1);
            }
        }
        
        let mut trace : HashMap<(i32,i32),i32> = HashMap::new();
        
        //remaining dp 
        for i in (0..n as i32 - 1).rev() {
            for city in (0..nn as i32) {
                //find neighbour of current city
                for &neighbour in edges[city as usize].iter(){
                    let valid = {cache.contains_key(&(neighbour,i+1))};
                    if !valid {
                        continue;
                    }
                    //calculate edit distance from current city at index i to the ending city at index n-1
                    let dist_new = {
                        let dist = cache.get(&(neighbour,i+1)).unwrap();
                        dist + if target_path[i as usize] == names[city as usize] {
                            0
                        } else { 
                            1
                        }
                    };
                    let mut v = cache.entry((city,i)).or_insert(i32::MAX);
                    if dist_new < *v {
                        *v = dist_new;    
                        trace.insert((city,i), neighbour);
                    }
                }
            }
        }
        
        //get best starting node
        let mut best_dist = i32::MAX;
        let mut best_idx = 0;
        for i in (0..nn as i32){
            match cache.get(&(i,0)){
                Some(&dist) => {
                    if best_dist > dist{
                        best_dist = dist;
                        best_idx = i;
                    }
                },
                _ => {}
            }
        }

        //trace path from start
        let mut idx_next = best_idx;
        let mut ret = vec!{best_idx};
        let mut i = 0;
        while let Some(&neigh) = trace.get(&(idx_next,i)){
            ret.push(neigh);
            idx_next = neigh;
            i += 1;
        }
        
        ret
    }
}
```