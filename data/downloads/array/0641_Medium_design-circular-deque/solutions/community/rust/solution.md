# std::collections::VecDeque solution vs Handmade solution

**Author:** Darkie12
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5843225/](https://leetcode.com/problems/design-circular-deque/solutions/5843225/)

---

Apparently no one shared this solution so I think it's hilarious to show how convenient Rust standard crate can be
# std::collections::VecDeque solution
```rust []
use std::collections::VecDeque;
use std::cmp::Ordering::*;
struct MyCircularDeque {
    queue: VecDeque<i32>
}
impl MyCircularDeque {

    fn new(k: i32) -> Self {
        Self{
            queue: VecDeque::with_capacity(k as usize)
        }
    }
    
    fn insert_front(&mut self, value: i32) -> bool {
        match self.queue.len().cmp(&self.queue.capacity()){
            Equal | Greater => false,
            Less => {
                self.queue.push_front(value);
                true
            }
        }
    }
    
    fn insert_last(&mut self, value: i32) -> bool {
        match self.queue.len().cmp(&self.queue.capacity()){
            Equal | Greater => false,
            Less => {
                self.queue.push_back(value);
                true
            }
        }
    }
    
    fn delete_front(&mut self) -> bool {
        self.queue.pop_front().is_some()
    }
    
    fn delete_last(&mut self) -> bool {
        self.queue.pop_back().is_some()
    }
    
    fn get_front(&self) -> i32 {
        self.queue.front().unwrap_or(&-1).clone()
    }
    
    fn get_rear(&self) -> i32 {
        self.queue.back().unwrap_or(&-1).clone()
    }
    
    fn is_empty(&self) -> bool {
        self.queue.is_empty()
    }
    
    fn is_full(&self) -> bool {
        self.queue.len() == self.queue.capacity()
    }
}
```
Runtime and Memory
![image.png](./images/0.png)

# Handmade solution
```rust []
struct MyCircularDeque {
    storage: Box<[Option<i32>]>,
    front: usize,
    rear: usize,
    capacity: usize,
    length: usize,
}

impl MyCircularDeque {
    fn new(k: i32) -> Self {
        Self {
            storage: vec![None; k as usize].into_boxed_slice(),
            front: 0,
            rear: 0,
            capacity: k as usize,
            length: 0,
        }
    }

    fn insert_front(&mut self, value: i32) -> bool {
        if self.is_full() {
            false
        } else {
            self.front = (self.front + self.capacity - 1) % self.capacity;
            self.storage[self.front] = Some(value);
            self.length += 1;
            true
        }
    }

    fn insert_last(&mut self, value: i32) -> bool {
        if self.is_full() {
            false
        } else {
            self.storage[self.rear] = Some(value);
            self.rear = (self.rear + 1) % self.capacity;
            self.length += 1;
            true
        }
    }

    fn delete_front(&mut self) -> bool {
        if self.is_empty() {
            false
        } else {
            self.storage[self.front].take();
            self.front = (self.front + 1) % self.capacity;
            self.length -= 1;
            true
        }
    }

    fn delete_last(&mut self) -> bool {
        if self.is_empty() {
            false
        } else {
            self.rear = (self.rear + self.capacity - 1) % self.capacity;
            self.storage[self.rear].take();
            self.length -= 1;
            true
        }
    }

    fn get_front(&self) -> i32 {
        if self.is_empty() {
            -1
        } else {
            self.storage[self.front].unwrap_or(-1)
        }
    }

    fn get_rear(&self) -> i32 {
        if self.is_empty() {
            -1
        } else {
            let rear_index = (self.rear + self.capacity - 1) % self.capacity;
            self.storage[rear_index].unwrap_or(-1)
        }
    }

    fn is_empty(&self) -> bool {
        self.length == 0
    }

    fn is_full(&self) -> bool {
        self.length == self.capacity
    }
}
```
![image.png](./images/1.png)
