# Rust 97ms 🔥 86.05Mb ☄️ Solution 🦀

**Author:** rony0000013
**Votes:** 0
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/5247087/](https://leetcode.com/problems/frequency-tracker/solutions/5247087/)

---

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;
struct FrequencyTracker {
    map: HashMap<i32, usize>,
    freq: HashMap<usize, usize>
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl FrequencyTracker {

    fn new() -> Self {
        Self {
            map: HashMap::new(), freq: HashMap::new()
        }
    }
    
    fn add(&mut self, num: i32) {
        if let Some(&n) = self.map.get(&num) {
            self.freq.entry(n)
                .and_modify(|x| *x = x.saturating_sub(1))
                .or_insert(0);
            self.freq.entry(n+1).and_modify(|x| *x+=1).or_insert(1);
        } else {
            self.freq.entry(1).and_modify(|x| *x+=1).or_insert(1);
        }
        self.map.entry(num).and_modify(|x| *x+=1).or_insert(1);
    }
    
    fn delete_one(&mut self, num: i32) {
        if let Some(&n) = self.map.get(&num) {
            self.freq.entry(n)
                .and_modify(|x| *x = x.saturating_sub(1))
                .or_insert(0);
            self.map.entry(num)
                .and_modify(|x| *x = x.saturating_sub(1))
                .or_insert(0);
            self.freq.entry(n-1).and_modify(|x| *x+=1).or_insert(1);
        }
    }
    
    fn has_frequency(&self, f: i32) -> bool {
        self.freq.contains_key(&(f as usize)) && 
        self.freq.get(&(f as usize)).unwrap_or(&0) > &0
    }
}

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * let obj = FrequencyTracker::new();
 * obj.add(number);
 * obj.delete_one(number);
 * let ret_3: bool = obj.has_frequency(frequency);
 */
```