# [RUST] HashMap + BTreeSet

**Author:** ikws4
**Votes:** 5
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/3113308/](https://leetcode.com/problems/lfu-cache/solutions/3113308/)

---

```rust
use std::collections::{BTreeSet, HashMap};

#[derive(PartialEq, Eq, PartialOrd, Ord, Hash, Clone)]
struct CacheEntry {
    count: usize,
    used_time: usize,
    key: i32,
    value: i32,
}

struct LFUCache {
    queue: BTreeSet<CacheEntry>,
    cache: HashMap<i32, CacheEntry>,
    capacity: usize,
    time: usize,
}

impl LFUCache {
    fn new(capacity: i32) -> Self {
        Self {
            queue: BTreeSet::new(),
            cache: HashMap::new(),
            capacity: capacity as usize,
            time: 0,
        }
    }

    fn get(&mut self, key: i32) -> i32 {
        self.time += 1;
        if let Some(entry) = self.cache.get_mut(&key) {
            self.queue.remove(entry);
            entry.used_time = self.time;
            entry.count += 1;
            self.queue.insert(entry.clone());
            return entry.value;
        }
        -1
    }

    fn put(&mut self, key: i32, value: i32) {
        self.time += 1;
        if self.capacity == 0 {
            return;
        }
        if let Some(entry) = self.cache.get_mut(&key) {
            self.queue.remove(entry);
            entry.used_time = self.time;
            entry.count += 1;
            entry.value = value;
            self.queue.insert(entry.clone());
        } else {
            if self.cache.len() >= self.capacity {
                let entry = self.queue.iter().next().unwrap().clone();
                self.cache.remove(&entry.key);
                self.queue.remove(&entry);
            }
            let entry = CacheEntry {
                key,
                value,
                count: 1,
                used_time: self.time,
            };
            self.cache.entry(key).or_insert(entry.clone());
            self.queue.insert(entry);
        }
    }
}
```