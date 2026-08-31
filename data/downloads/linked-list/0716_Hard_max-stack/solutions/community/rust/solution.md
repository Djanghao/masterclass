# Rust solution

**Author:** leodamsky
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-stack/solutions/1378199/](https://leetcode.com/problems/max-stack/solutions/1378199/)

---

```
use std::collections::BTreeMap;
use std::collections::btree_map::Entry;

#[derive(Default)]
struct MaxStack {
    idx: usize,
    stack: BTreeMap<usize, i32>,
    maxs: BTreeMap<i32, Vec<usize>>,
    max: Option<i32>,
    top: Option<i32>
}

/*
  `&self` means the method takes an immutable reference.
  If you need a mutable reference, change it to `&mut self` instead.
 */
impl MaxStack {
    /* initialize your data structure here. */
    fn new() -> Self {
        Default::default()
    }

    // O(log(n))
    fn push(&mut self, x: i32) {
        self.maxs.entry(x)
            .or_default()
            .push(self.idx);
        self.stack.insert(self.idx, x);
        self.idx += 1;

        self.top = Some(x);
        self.max = self.maxs.keys().next_back().copied();
    }

    // O(log(n))
    fn pop(&mut self) -> i32 {
        let last_key = *self.stack.keys().next_back().unwrap();
        let x = self.stack.remove(&last_key).unwrap();
        if let Entry::Occupied(mut e) = self.maxs.entry(x) {
            let indices = e.get_mut();
            indices.pop();
            if indices.is_empty() {
                e.remove();
            }
        }
        // FIXME: bounds MaxStack to finite number of operations
        self.idx -= 1;

        self.top = self.stack.iter().next_back().map(|e| *e.1);
        self.max = self.maxs.keys().next_back().map(|e| *e);
        x
    }

    // O(1)
    fn top(&self) -> i32 {
        self.top.unwrap()
    }

    // O(1)
    fn peek_max(&self) -> i32 {
        self.max.unwrap()
    }

    // O(log(n))
    fn pop_max(&mut self) -> i32 {
        let mut entry = match self.maxs.entry(*self.maxs.keys().next_back().unwrap()) {
            Entry::Vacant(_) => unreachable!("not call on empty stack"),
            Entry::Occupied(e) => e
        };
        let indices = entry.get_mut();
        let idx = indices.pop().unwrap();
        let value = self.stack.remove(&idx).unwrap();
        if let Some(new_idx) = indices.last() {
            self.stack.insert(*new_idx, value);
        } else {
            entry.remove();
        }

        self.top = self.stack.iter().next_back().map(|e| *e.1);
        self.max = self.maxs.keys().next_back().map(|e| *e);
        value
    }
}
```