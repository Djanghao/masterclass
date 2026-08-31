# Rust Solution Using BTreeMap

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-integers-in-intervals/solutions/2375879/](https://leetcode.com/problems/count-integers-in-intervals/solutions/2375879/)

---

~~~
use std::collections::BTreeMap;
struct CountIntervals {
    cnt: i32,
    mp: BTreeMap<i32, i32>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl CountIntervals {

    fn new() -> Self {
        let mp: BTreeMap<i32, i32> = BTreeMap::new(); 
        Self { cnt: 0, mp }
    }
    
    fn add(&mut self, left: i32, right: i32) {
        let (mut left, mut right) = (left, right);
       
        self.cnt += right - left + 1;
        if self.mp.is_empty() {
            self.mp.insert(left, right);
            return
        }
        
        let (a, _) = self.mp.iter().next().unwrap();
        let (_, b) = self.mp.iter().rev().next().unwrap();
        if a - 1 > right || b + 1 < left {
            self.mp.insert(left, right);
            return
        }
        
		// left end joining
        if let Some((&key, &value)) = self.mp.range(..left + 1).rev().next() {
            if value + 1 >= left {
                if value > right { self.cnt -= right - left + 1; }
                else { self.cnt -= value + 1  - left; }
                left = key;
                right = right.max(value);
            }
        }
        
		// removing containing intervals
        let mut done = false;
        while done == false {
            done = true;
            if let Some((&key, &value)) = self.mp.range(left + 1..).next() {
                if value > right { break; }
                self.cnt -= value - key + 1;
                self.mp.remove(&key);
                done = false;
            }
        }
        
		// right end joining
        if let Some((&key, &value)) = self.mp.range(left + 1..).next() {
            if right + 1 >= key {
                self.cnt -= right + 1 - key;
                right = value;
                self.mp.remove(&key);
            }
        }
        
        self.mp.insert(left, right);
    }
    
    fn count(&self) -> i32 {
        self.cnt
    }
}
~~~