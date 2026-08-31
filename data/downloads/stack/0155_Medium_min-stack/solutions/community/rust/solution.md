# Rust || Simple and Easy || O(n) Time and Space Complexity

**Author:** aditya019
**Votes:** 3
**Link:** [https://leetcode.com/problems/min-stack/solutions/2375388/](https://leetcode.com/problems/min-stack/solutions/2375388/)

---

```
struct MinStack {
    s: Vec<(i32, i32)>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MinStack {

    fn new() -> Self {
        MinStack {
            s: Vec::with_capacity(30000)
        }
    }
    
    fn push(&mut self, val: i32) {
        if self.s.is_empty() {
            self.s.push((val, val));
        } else {
            let min = std::cmp::min(val, self.s[self.s.len() - 1].1);
            self.s.push((val, min));
        }
    }
    
    fn pop(&mut self) {
        self.s.pop();
    }
    
    fn top(&self) -> i32 {
        self.s.last().unwrap().0
    }
    
    fn get_min(&self) -> i32 {
        self.s.last().unwrap().1
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * let obj = MinStack::new();
 * obj.push(val);
 * obj.pop();
 * let ret_3: i32 = obj.top();
 * let ret_4: i32 = obj.get_min();
 */
```