# Rust solution - HashMap and VecDeque

**Author:** sunjesse
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-unique-number/solutions/5913740/](https://leetcode.com/problems/first-unique-number/solutions/5913740/)

---

# Code
```rust []
use std::collections::{HashMap, VecDeque};

struct FirstUnique {
    q: VecDeque<i32>,
    freq: HashMap<i32, i32>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl FirstUnique {

    fn new(nums: Vec<i32>) -> Self {
        let freq = nums.iter()
            .fold(HashMap::new(), |mut acc, &n| {
                *acc.entry(n).or_insert(0) += 1;
                acc
            });
        FirstUnique {
            q: VecDeque::from(nums),
            freq,
        }
    }
    
    fn show_first_unique(&mut self) -> i32 {
        while self.q.len() > 0 && *self.freq.get(self.q.front().unwrap()).unwrap() > 1 {
            self.q.pop_front();
        }
        match self.q.len() {
            0 => -1,
            _ => *self.q.front().unwrap(),
        }
    }
    
    fn add(&mut self, value: i32) {
        self.q.push_back(value);
        *self.freq.entry(value).or_insert(0) += 1;
    }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * let obj = FirstUnique::new(nums);
 * let ret_1: i32 = obj.show_first_unique();
 * obj.add(value);
 */
```