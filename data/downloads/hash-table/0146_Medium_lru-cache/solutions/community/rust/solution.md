# Rust | Double-Linked list | hashmap

**Author:** flamingm321
**Votes:** 7
**Link:** [https://leetcode.com/problems/lru-cache/solutions/2595299/](https://leetcode.com/problems/lru-cache/solutions/2595299/)

---

Concept:
```
[LRU Cache]
1. Linked list used to identify the node's ordering
2. Map used to search nodes in O(1)


Doublue linked list:
 None <--- node <---> node <---> node <---> node <---> node ---> None
           key         key        key        key        key              
           value       value      value      value      value           
            ^           ^          ^          ^          ^
            |           |          |          |          |
            |           |          |          |          |

map:       key         key        key        key        key              
```


Code: 
```rust
use std::{rc::Rc, cell::RefCell, collections::HashMap, fmt::Debug};

struct LRUCache { 
    map: HashMap<i32, Rc<RefCell<ListNode>>>,
    lru: DoubleListNode,
    cap: usize
}

#[derive(Debug)]
struct ListNode {
    key: i32,
    value: i32,
    prev: Option<Rc<RefCell<ListNode>>>,
    next: Option<Rc<RefCell<ListNode>>>,
}

impl ListNode {
    pub fn new(key: i32, value: i32) -> Self {
        Self { key, value, prev: None, next: None }
    }
}

#[derive(Debug)]
struct DoubleListNode {
    head: Option<Rc<RefCell<ListNode>>>,
    tail: Option<Rc<RefCell<ListNode>>>,
}


impl DoubleListNode {
    pub fn new() -> Self {
        Self { head: None, tail: None }
    }

    fn get_head(&self) -> Option<Rc<RefCell<ListNode>>> {
        if self.head.is_none() {
            None
        } else {
            Some(self.head.as_ref().unwrap().clone())
        }
    }

    fn get_tail(&self) -> Option<Rc<RefCell<ListNode>>> {
        if self.tail.is_none() {
            None
        } else {
            Some(self.tail.as_ref().unwrap().clone())
        }
    }

    pub fn add_front(&mut self, key: i32, value: i32) {
        let node = Rc::new(RefCell::new(ListNode {
            key, 
            value,
            prev: None,
            next: self.get_head()
        }));
        self.head.replace(node);
    }

    pub fn add_back(&mut self, key: i32, value: i32) {
        let node = Rc::new(RefCell::new(ListNode {
            key, 
            value,
            prev: self.get_tail(),
            next: None
        }));
        self.tail.replace(node);
    }

    pub fn add_front_node(&mut self, node: Rc<RefCell<ListNode>>) {
        let head = self.get_head();
        if head.is_some() {
            head.as_ref().unwrap().borrow_mut().prev = Some(node.clone());
        }

        node.borrow_mut().prev = None;
        node.borrow_mut().next = head;

        self.head = Some(node);
    }

    pub fn add_back_node(&mut self, node: Rc<RefCell<ListNode>>) {
        let tail = self.get_tail();
        if tail.is_some() {
            tail.as_ref().unwrap().borrow_mut().next = Some(node.clone());
        }

        node.borrow_mut().prev = tail;
        node.borrow_mut().next = None;

        self.tail = Some(node);
    }

    pub fn remove(&mut self, target: Rc<RefCell<ListNode>>) {
        let prev = target.borrow().prev.clone();
        let next = target.borrow().next.clone();
        
        match (prev, next) {
            (Some(prev), Some(next)) => {
                prev.borrow_mut().next = Some(next.clone());
                next.borrow_mut().prev = Some(prev);
            },
            (Some(prev), None) => {
                // tail case
                prev.borrow_mut().next.take();
                self.tail.replace(prev);
            },
            (None, Some(next)) => {
                // head case
                next.borrow_mut().prev.take();
                self.head.replace(next);
            },
            (None, None) => {
                // singal node case
                self.head.take();
                self.tail.take();
            }
        }
    }

    pub fn move_head(&mut self, target: Rc<RefCell<ListNode>>) {
        if !Rc::ptr_eq(self.get_head().as_ref().unwrap(), &target) {
            self.remove(target.clone());
            self.add_front_node(target);
        }
    }

    pub fn move_tail(&mut self, target: Rc<RefCell<ListNode>>) {
        if !Rc::ptr_eq(self.get_tail().as_ref().unwrap(), &target) {
            self.remove(target.clone());
            self.add_back_node(target);
        }
    }
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl LRUCache {
    fn new(capacity: i32) -> Self {
        Self {
            map: HashMap::new(),
            lru: DoubleListNode::new(),
            cap: capacity as usize,
        }
    }
    
    fn get(&mut self, key: i32) -> i32 {
        if self.map.contains_key(&key) {
            let node = self.map.get(&key).unwrap();
            self.lru.move_head(node.clone());
            node.as_ref().borrow().value
        } else {
            -1
        }
    }
    
    fn put(&mut self, key: i32, value: i32) {
        let node = if self.map.contains_key(&key) {
            let node = self.map.get(&key).unwrap();
            node.borrow_mut().value = value;
            self.lru.remove(node.clone());
            self.lru.add_front_node(node.clone());
            node.clone()
        } else {
            let node = Rc::new(RefCell::new(ListNode::new(key, value)));
            if self.map.len()==self.cap {
                let tail = self.lru.get_tail().as_ref().unwrap().clone();
                self.map.remove(&tail.as_ref().borrow().key);
                self.lru.remove(tail);

                self.map.insert(key, node.clone());
                self.lru.add_front_node(node.clone());
            } else {
                self.map.insert(key, node.clone());
                self.lru.add_front_node(node.clone());
            }
            node
        };
        if self.lru.tail.is_none() {
            self.lru.add_back_node(node);
        }
    }
}
```