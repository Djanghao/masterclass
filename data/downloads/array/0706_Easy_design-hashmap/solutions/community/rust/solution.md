# Simple Rust solution with O(log n) get

**Author:** wallicent
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-hashmap/solutions/1971867/](https://leetcode.com/problems/design-hashmap/solutions/1971867/)

---

I had a look at the existing Rust solutions to see if mine brought anything new to the pool. What sets this apart from some of the others is:
* Prime number of buckets to reduce collisions
* Sorted buckets for O(log n) get operations, where n is the size of the largest bucket

With this solution you still have O(n) puts and removes, so it would be more efficient to use BSTs as buckets (on paper, but real-world performance is not that great due to cache misses, see https://doc.rust-lang.org/std/collections/struct.BTreeMap.html).

```
struct MyHashMap {
    buckets: Vec<Vec<(i32,i32)>>,
}

// Prime number of buckets to reduce collisions
const N_BUCKETS: usize = 1031;

impl MyHashMap {

    fn new() -> Self {
        Self{ buckets: vec![vec![]; N_BUCKETS] }
    }

    fn hash(key: i32) -> usize {
        key as usize % N_BUCKETS
    }

    fn find_entry(&mut self, key: i32) -> (&mut Vec<(i32, i32)>, Result<usize, usize>) {
        let bucket = &mut self.buckets[Self::hash(key)];
        let result = bucket.binary_search_by(|(k, v)| k.cmp(&key));
        (bucket, result)
    }
    
    fn put(&mut self, key: i32, value: i32) {
        match self.find_entry(key) {
            (bucket, Ok(index)) => bucket[index] = (key, value),
            (bucket, Err(index)) => bucket.insert(index, (key, value)),
        }
    }
    
    fn get(&self, key: i32) -> i32 {
        let bucket = &self.buckets[Self::hash(key)];
        match bucket.binary_search_by(|(k, v)| k.cmp(&key)) {
            Ok(index) => bucket[index].1,
            Err(index) => -1,
        }
    }
    
    fn remove(&mut self, key: i32) {
        match self.find_entry(key) {
            (bucket, Ok(index)) => { bucket.remove(index); },
            _ => (),
        }
    }
}
```