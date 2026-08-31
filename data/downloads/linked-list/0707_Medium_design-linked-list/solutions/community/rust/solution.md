# Raw Pointer Linked List Designed For Speed

**Author:** jdor
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-linked-list/solutions/3924005/](https://leetcode.com/problems/design-linked-list/solutions/3924005/)

---

# Intuition
Unsafe Rust is a necessary part of the language. Learning Rust involves learning the superset of Unsafe Rust. Optimal implementations of collections in Rust depend on raw pointers, dereferencing. To get C tier speed, opt in with the `unsafe` keyword and raw pointers to nodes. Here is a doubly linked list.


# Approach
Construct nodes with bidirectional functionality with raw mutable pointers that can be nullable. Create the list with a head and tail mutable pointer for front and back of the list.

Implementing the required interface begins with figuring out a way to construct heap data, and a pointer to that data. This is accomplished with `Box`, which technically is a simple pointer to heap data. These pointers can be turned into raw pointers to the heap using `Box::into_raw`. We can free heap data by usign `std::mem::drop`, converting the raw pointer back to a `Box` passing it to drop to invoke destructor.

Fine tune iteration through list, check for null, handle edge cases. Result is speedy solution, uses more memory (doubly linked list).

There is potential to make this faster by looking at passed index, proceeding via head or tail, but I am not going to do that right now.


# Code
```
use std::ptr;
use std::mem;

#[derive(Debug, PartialEq, Eq)]
struct MyNode {
    next: *mut MyNode,
    before: *mut MyNode,
    val: i32
}

impl MyNode {
    fn new(val: i32) -> Self {
        Self {next: ptr::null_mut(), before: ptr::null_mut(), val}
    } 
}

struct MyLinkedList {
    head: *mut MyNode,
    tail: *mut MyNode,
    len: i32
}

impl Default for MyLinkedList {
    fn default() -> Self {
        Self {head: ptr::null_mut(), tail: ptr::null_mut(), len: 0}
    }
}

/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyLinkedList {

    fn new() -> Self {
        Self::default()
    }
    
    fn get(&self, index: i32) -> i32 {
        if index >= self.len { 
            return -1 
        }

        let mut target = self.head;

        unsafe {
            for _ in 0..index {
                target = (*target).next;
            }

            (*target).val 
        }
    }
    
    fn add_at_head(&mut self, val: i32) {

        let new_head = Box::into_raw(Box::new(MyNode::new(val)));
        let old_head = self.head;

        unsafe {
            if self.head.is_null() {
                self.head = new_head;
                self.tail = new_head;
            } else {
                (*old_head).before = new_head;
                (*new_head).next = old_head;
                self.head = new_head;
            }
        }

        self.len += 1;
    }
    
    fn add_at_tail(&mut self, val: i32) {

        let new_tail = Box::into_raw(Box::new(MyNode::new(val)));
        let old_tail = self.tail;

        unsafe {
            if self.tail.is_null() {
                self.tail = new_tail;
                self.head = new_tail;
            } else {
                (*new_tail).before = old_tail;
                self.tail = new_tail;
                (*old_tail).next = new_tail;
            }
        }

        self.len += 1;
    }
    
    fn add_at_index(&mut self, index: i32, val: i32) {

        match index {
            0 => { self.add_at_head(val); },

            index if index == self.len => { self.add_at_tail(val); }

            index if index > self.len => { },

            _ => {
                let new_mid = Box::into_raw(Box::new(MyNode::new(val)));
                let mut after = self.head;

                unsafe {
                    for _ in 0..index {
                        after = (*after).next;
                    }

                    let before = (*after).before;

                    (*before).next = new_mid;
                    (*new_mid).next = after;
                    (*new_mid).before = before;
                    (*after).before = new_mid;
                }

                self.len += 1;
            } 
        }
    }
    
    fn delete_at_index(&mut self, index: i32) {

        match (index, self.len) {
            
            // Out-of-bounds case
            (index, len) if index >= len => { },
            
            // One-node case
            (0, 1) => {
                let target_node = self.head;

                self.head = ptr::null_mut();
                self.tail = ptr::null_mut();

                unsafe{ mem::drop(Box::from_raw(target_node)) }
                self.len -= 1;
            }

            // Tail case
            (index, len) if index == len - 1 => {
                unsafe {
                    let target_node = self.tail;
                    let mut before = (*target_node).before;

                    self.tail = before;
                    (*before).next = ptr::null_mut();

                    mem::drop(Box::from_raw(target_node));
                    self.len -= 1;
                }
            },
            
            // Head case
            (0, _) => {
                unsafe {
                    let target_node = self.head;
                    let mut after = (*target_node).next;

                    self.head = after;
                    (*after).before = ptr::null_mut();

                    mem::drop(Box::from_raw(target_node));
                    self.len -= 1;
                }
            },

            // General case
            (index, _) => {
                let mut target_node = self.head;

                unsafe {
                    for _ in 0..index {
                        target_node = (*target_node).next;
                    }
        
                    let mut before = (*target_node).before;
                    let mut after = (*target_node).next;
        
                    (*before).next = after;
                    (*after).before = before;

                    mem::drop(Box::from_raw(target_node));
                    self.len -= 1;
                }
            }
        }

    }
}

impl Drop for MyLinkedList {
    fn drop(&mut self) {
        while self.len > 0 {
            self.delete_at_index(0);
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * let obj = MyLinkedList::new();
 * let ret_1: i32 = obj.get(index);
 * obj.add_at_head(val);
 * obj.add_at_tail(val);
 * obj.add_at_index(index, val);
 * obj.delete_at_index(index);
 */
```