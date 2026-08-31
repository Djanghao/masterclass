# rust | HashMap, HashSet

**Author:** bryceat
**Votes:** 1
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/2783698/](https://leetcode.com/problems/insert-delete-getrandom-o1-duplicates-allowed/solutions/2783698/)

---

In order to make get random O(1) we maintain a vector with duplicates of all values allowed.  To make remove O(1) we maintain a a Hashmap that points to a set of indicies with the value in question in the universe.  When we remove a value from the middle of the universe we swap it for the last value and update the Hashmap accordingly.
```
use std::collections::{HashMap,HashSet};
use rand::{thread_rng, Rng};

struct RandomizedCollection {
    inds: HashMap<i32,HashSet<usize>>,
    universe: Vec<i32>,
}

impl RandomizedCollection {

    fn new() -> Self {
        RandomizedCollection{inds: HashMap::new(), universe: Vec::new()}
    }
    
    fn insert(&mut self, val: i32) -> bool {
        let last = self.universe.len();
        self.universe.push(val);
        if let Some(ind) = self.inds.get_mut(&val) {
            (*ind).insert(last);
            ind.len() == 1
        } else {
            self.inds.insert(val,HashSet::from([last]));
            true
        }
    }
    
    fn remove(&mut self, val: i32) -> bool {
        if self.universe.is_empty() {
            return false
        }
        let last_ind = self.universe.len() - 1;
        let last_val = self.universe[last_ind].clone();
        if last_val == val {
            self.universe.pop();
            self.inds.entry(val).and_modify(|v| {(*v).remove(&last_ind);});
            true
        } else if let Some(ind) = self.inds.get_mut(&val) {
            if ind.is_empty() {
                return false
            } else {
                let xind = ind.iter().next().unwrap().clone();
                ind.remove(&xind);
                self.universe.swap(xind,last_ind);
                self.universe.pop();
                self.inds.entry(last_val).and_modify(|v| {(*v).remove(&last_ind); (*v).insert(xind);});
                true
            }
        } else {
            false
        }
        
    }
    
    fn get_random(&self) -> i32 {
        let mut rng = thread_rng();
        self.universe[rng.gen_range(0,self.universe.len())]
    }
}
```