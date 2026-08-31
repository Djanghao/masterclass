# Rust Using BTreeSet

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-phone-directory/solutions/2645936/](https://leetcode.com/problems/design-phone-directory/solutions/2645936/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Keep tracking the available slots which are sorted ascending order.  

# Approach
<!-- Describe your approach to solving the problem. -->
We use BTreeSet as the data struct
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O((N + m) * Log N) where N is maxNumbers and M is the # of calls of get & release.  

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::BTreeSet;

struct PhoneDirectory {
    pos: BTreeSet<i32>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl PhoneDirectory {

    fn new(maxNumbers: i32) -> Self {
        let mut s = BTreeSet::new();
        for i in 0..maxNumbers as usize { s.insert(i as i32); }
        Self { pos: s }   
    }
    
    fn get(&mut self) -> i32 {
        let mut a = -1;
        
        for b in self.pos.iter() {
            a = *b;
            break
        }
        
        if a != -1 { self.pos.remove(&(a)); }
        a
    }
    
    fn check(&self, number: i32) -> bool {
        self.pos.contains(&number)
    }
    
    fn release(&mut self, number: i32) {
        //let number = number as usize;
        self.pos.insert(number);
    }
}

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * let obj = PhoneDirectory::new(maxNumbers);
 * let ret_1: i32 = obj.get();
 * let ret_2: bool = obj.check(number);
 * obj.release(number);
 */
```