# Rust swap_remove

**Author:** Minamikaze392
**Votes:** 5
**Link:** [https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/2859235/](https://leetcode.com/problems/insert-delete-getrandom-o1/solutions/2859235/)

---

# Code
```rust
use std::collections::HashMap;
use rand::seq::SliceRandom;

struct RandomizedSet {
    hash: HashMap<i32, usize>,
    v: Vec<i32>,
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RandomizedSet {

    fn new() -> Self {
        Self {
            hash: HashMap::new(),
            v: Vec::new(),
        }
    }
    
    fn insert(&mut self, val: i32) -> bool {
        if self.hash.contains_key(&val) {
            return false;
        }
        self.hash.insert(val, self.v.len());
        self.v.push(val);
        true
    }
    
    fn remove(&mut self, val: i32) -> bool {
        match self.hash.remove(&val) {
            None => false,
            Some(i) => {
                self.v.swap_remove(i);
                if i < self.v.len() {
                    self.hash.insert(self.v[i], i);
                }
                true
            }
        }
    }
    
    fn get_random(&self) -> i32 {
        *self.v.choose(&mut rand::thread_rng()).unwrap()
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * let obj = RandomizedSet::new();
 * let ret_1: bool = obj.insert(val);
 * let ret_2: bool = obj.remove(val);
 * let ret_3: i32 = obj.get_random();
 */
```