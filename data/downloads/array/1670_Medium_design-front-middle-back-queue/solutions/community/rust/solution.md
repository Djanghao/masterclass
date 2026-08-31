# Double Deque solution

**Author:** BitUnWise
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-front-middle-back-queue/solutions/4266434/](https://leetcode.com/problems/design-front-middle-back-queue/solutions/4266434/)

---

uses 2 deques and shuffles numbers between to keep the front and back += 1 in length

fills back first so it's easier to get the front middle element when the length is even

# Code
```
use std::collections::VecDeque;

struct FrontMiddleBackQueue {
    front: VecDeque<i32>,
    back: VecDeque<i32>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl FrontMiddleBackQueue {

    fn new() -> Self {
        Self {
            front: VecDeque::default(),
            back: VecDeque::default(),
        }
    }
    
    fn push_front(&mut self, val: i32) {
        if self.back.is_empty() {
            self.back.push_front(val);
            return;
        }
        self.front.push_front(val);
        if self.front.len() > self.back.len() {
            self.back.push_front(self.front.pop_back().unwrap());
        }
    }
    
    fn push_middle(&mut self, val: i32) {
        if self.front.len() == self.back.len() {
            self.back.push_front(val);
        } else {
            self.front.push_back(val);
        }
    }
    
    fn push_back(&mut self, val: i32) {
        self.back.push_back(val);
        if self.back.len() > self.front.len() + 1 {
            self.front.push_back(self.back.pop_front().unwrap());
        }
    }
    
    fn pop_front(&mut self) -> i32 {
        if self.back.is_empty() {
            return -1;
        }
        if self.front.is_empty() {
            return self.back.pop_front().unwrap();
        }
        let val = self.front.pop_front().unwrap();
        if self.front.len() < self.back.len() - 1 {
            self.front.push_back(self.back.pop_front().unwrap());
        }
        val
    }
    
    fn pop_middle(&mut self) -> i32 {
        if self.back.is_empty() {
            return -1;
        }
        if self.front.len() == self.back.len() {
            self.front.pop_back().unwrap()
        } else {
            self.back.pop_front().unwrap()
        }
    }
    
    fn pop_back(&mut self) -> i32 {
        if self.back.is_empty() {
            return -1;
        }
        let val = self.back.pop_back().unwrap();
        if self.back.len() < self.front.len() {
            self.back.push_front(self.front.pop_back().unwrap());
        }
        val
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * let obj = FrontMiddleBackQueue::new();
 * obj.push_front(val);
 * obj.push_middle(val);
 * obj.push_back(val);
 * let ret_4: i32 = obj.pop_front();
 * let ret_5: i32 = obj.pop_middle();
 * let ret_6: i32 = obj.pop_back();
 */
```