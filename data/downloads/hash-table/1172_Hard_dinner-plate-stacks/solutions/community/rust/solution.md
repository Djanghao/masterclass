# Two BTreeSet - RUST

**Author:** a4yan1
**Votes:** 0
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/5673860/](https://leetcode.com/problems/dinner-plate-stacks/solutions/5673860/)

---

# Code
```rust []
use std::collections::BTreeSet;
struct DinnerPlates {
    plates: Vec<Vec<i32>>,
    capacity: usize,
    push: BTreeSet<usize>,
    pop: BTreeSet<usize>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl DinnerPlates {

    fn new(capacity: i32) -> Self {
        DinnerPlates {
            plates: Vec::new(),
            capacity : capacity as usize,
            push: BTreeSet::new(),
            pop: BTreeSet::new(),
        }
    }
    
    fn push(&mut self, val: i32) {
        let top = self.push.pop_first();
        if top.is_none() {
            let v = vec![val];
            self.plates.push(v);
            if self.capacity > 1 {self.push.insert(self.plates.len() - 1);}
            self.pop.insert(self.plates.len() - 1);
        } else {
            let top = top.unwrap();
            self.plates[top].push(val);
            if self.plates[top].len() < self.capacity {self.push.insert(top);}
            self.pop.insert(top);
        }
    }
    
    fn pop(&mut self) -> i32 {
        let top = self.pop.pop_last();
        match top {
            Some(x) => {
                if self.capacity == self.plates[x].len(){self.push.insert(x);}
                if self.plates[x].len() > 1 {self.pop.insert(x);}
                self.plates[x].pop().unwrap()
            }
            None => return -1,
        }
    }
    
    fn pop_at_stack(&mut self, index: i32) -> i32 {
        if index as usize >= self.plates.len() {return -1;}
        if self.plates[index as usize].len() == self.capacity {self.push.insert(index as usize);}
        match self.plates[index as usize].pop() {
            Some(x) => {
                if self.plates[index as usize].len() == 0 {
                    self.pop.remove(&(index as usize));
                }
                x
            },
            None => -1,
        }
    }
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * let obj = DinnerPlates::new(capacity);
 * obj.push(val);
 * let ret_2: i32 = obj.pop();
 * let ret_3: i32 = obj.pop_at_stack(index);
 */
```